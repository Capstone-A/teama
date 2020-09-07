const { gql } = require('apollo-server')

// TODO: query getAllRooms

const room = gql`
    type Room {
        id:ID!
        name: String!
        messages: [Message!]
        users: [User!]
        isCreator: Boolean
        public: Boolean!
        description: String
        playlistId: String
    }

    type Query {
        getAllRooms: [Room!]!
        getSingleRoom(roomId: ID!): Room!
        getPublicRooms: [Room!]!
        getPrivateRooms: [Room!]!
    }

    type CreateRoomResponse {
        ok: Boolean!
        roomMade: Room
        error: String
    }

    type VoidResponse {
        ok: Boolean!
        error: String
    }

    type Mutation {
        createRoom(name: String!, description: String, public: Boolean): CreateRoomResponse!
        addUserToRoom(spotifyUsername: String!, roomId: ID!): VoidResponse!
        joinRoom(roomId: ID!): Boolean
        leaveRoom(roomId: ID!): Boolean
    }

    type Subscription {
        userLeft(roomId: ID!): [User]
        userJoin(roomId: ID!): [User]
    }
`

module.exports = room
