import { Response, Request } from "express";
import { resolvers } from '../resolvers';

export class ListController {
  listAll(response: Response) {
    const list = resolvers.Query.list();
    return response.json(list);
  }

  index(request: Request, response: Response) {
    const { id } = request.params;
    const list = resolvers.Query.list();
    const user = list.find(user => user._id === id);
    return response.json(user);
  }
}