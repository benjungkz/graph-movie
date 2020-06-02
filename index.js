import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

// Create Server
const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers
});

// Server Start
server.start(() => { console.log("Graphql Sever Running")});