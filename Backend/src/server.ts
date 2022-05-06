import express, { NextFunction, Request, Response} from 'express';
import "express-async-errors";
import audit  from 'express-requests-logger'

import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';

import bunyan from 'bunyan';
import http from 'http';
import { routes } from "routes";

import { resolvers } from './resolvers';
import { typeDefs } from './schema'

const app = express();

app.use(express.json());

app.use(routes);

// const logger = bunyan.createLogger({
//   name: 'graphqlLog',
// });

// app.use(audit({
//   logger: logger,
//   request: {
//     maxBodyLength: 50
//   },
//   response: {
//     maxBodyLength: 50
//   }
// }));

async function startApolloServer(typeDefs, resolvers) {
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();
  server.applyMiddleware({ app });
  await new Promise<void>(resolve => httpServer.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof Error) {
      return response.status(400).json(error.message);
    }
    return response.status(500).json(error);
  }
);

startApolloServer(typeDefs, resolvers);
