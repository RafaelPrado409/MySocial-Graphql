import { List } from '../data';

export const resolvers = {
  Query: {
    list: () => {
      return List
    },

    user: (_, { _id }) => {
      return List.find((user) => user._id === _id)
    },

    name: (_, { name }) => {
      let digitArray = name.split(" ");
      let initialsDigits = digitArray[0];
      let lastDigits = digitArray[1];
      let regex = new RegExp(`^${initialsDigits}[a-zA-Z]*.${lastDigits}[a-zA-Z].*$`)
      let result = [];
      
      List.forEach(user => {
        let reg = user.name.match(regex);
        if (reg !== null) {
          result = reg;
        }
      });
      return name.length < 10 ? List.find(user => user.name === result[0]) : List.find(user => user.name === name)
    }
  }
}