const graphQl = require("graphql");
const _ = require("loadash");

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphQl;

//dummy data
var books = [
  { name: "Name of the wind", genre: "Fantasy", id: "1" },
  { name: "The Final Empire", genre: "Fantasy", id: "2" },
  { name: "The Long Earth", genre: "Sci-Fi", id: "3" },
];

const BookType = new GraphQLObjectType({
  name: "Book", 
  fields: () => ({
    id: { GraphQLString },
    name: { GraphQLString },
    genre: { GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        //code to get data from db or other source
        _.find(books, { id: args.id });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
