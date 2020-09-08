const { gql } = require('apollo-server')

const queue = gql`
    type Queue {
        id: ID
        uri: String
        trackName: String
        artist: String
    }

    type Query {
        getQueue(roomId: Int): [Queue]
    }

    type Mutation {
        addToQueue(uri: String, trackName: String, artist: String, roomId: Int): Queue
        removeFromQueue(uri:String, roomId: Int ): [Queue]
    }

    type Subscription{
        addedToQueue(roomId: Int) : Queue
        removedFromQueue(roomId: Int) : [Queue]
    }

`

module.exports = queue

