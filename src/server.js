import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';
import { createSchema } from './createSchema';

const startServer = async () => {
  const typeDefs = gql`
    type Query {
      hello: String
    }
  `;

  const resolvers = {
    Query: {
      hello: () => 'hi'
    }
  }

  const app = express();

  const server = new ApolloServer({
    // schema: createSchema()
    typeDefs,
    resolvers,
  });

  server.applyMiddleware({ app }); // app is from an existing express app

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  )
};

startServer();