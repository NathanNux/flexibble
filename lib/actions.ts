import { GraphQLClient } from "graphql-request";

const isProduction = process.env.NODE_ENV === 'production'
const apiUrl = isProduction ? process.env.NEXT_PUBLIC_GRAPHQL_API_URL || '' : 'http://127.0.0.1:4000/graphql
const apiKey = isProduction ? process.env.GRAPHQL_API_KEY || '' : 'letmein'

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!)


const makeGraphQLRequest = async ( query: string, variables = {} ) => {
    try {
        // create a new GraphQL client to make request to database =
    } catch (error) {
        throw (error)
    }
}