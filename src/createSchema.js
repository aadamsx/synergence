import { makeExecutableSchema } from 'graphql-tools';
import { loadResolversFiles, loadSchemaFiles } from '@graphql-modules/sonar';
import { mergeGraphQLSchemas, mergeResolvers } from '@graphql-modules/epoxy';

export const createSchmea = () => {
  return makeExecutableSchema({
    typeDefs: mergeGraphQLSchemas(loadSchemaFiles(__dirname + '/modules/schema/')),
    resolvers: mergeResolvers(loadResolversFiles(__dirname + '/modules/resolvers/'))
  });
};