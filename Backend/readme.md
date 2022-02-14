
### Yarn

 ``` 
yarn 
``` 
to install all dependences

 ``` 
 yarn start 
 ``` 
 to start the application after install the dependences
 
### NPM

```
npm install
``` 
to install all dependences
```
npm run start
``` 
 to start the application after install the dependences
 
 ### ENDPOINT
 
 ```
 http://localhost:4000/graphql
 ```
 
 ### QUERIES
 
 ```
 query GetUsers {
      list {
        _id
        picture
        age
        eyeColor
        name
        company
        email
      }
    }
    
    query GetUser($id: ID!) {
    user(_id: $id) {
      picture
      age
      eyeColor
      name
      company
      email
      friends {
        picture
        age
        eyeColor
        name
        company
        email
      }
    }
  }
  
  query GetByName($name: String!) {
  name(name: $name) {
    _id
    picture
    age
    eyeColor
    name
    company
    email
  }
}
 ```
