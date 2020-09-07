const { gql } = require('apollo-server')

// TODO: query getAllRooms

const Spotify = gql`

    type Image {
        url: String
    }

    type Album {
        images: [Image!]
        name: String
    }

    type Artist {
        name: String
    }

    type Track {
        id: String
        name: String
        uri: String
        duration_ms: Int
        artists: [Artist!]
        album: Album
    }


    type Playlist {
        collaborative: Boolean
        description: String
        id: String
        name: String
        owner: String
        tracks: [Track!]
        uri: String
    }

    type Query {
        getPlaylist(playlistId: String!): Playlist
    }

    # type deQueueResponse {
    #     trackToPlaylist: String
    #     newQueue: Queue
    # }

    type Queue {
        trackUri: [String],
        trackName: [String],
        artist: [String]
    }

    type Mutation {
        createPlaylist(name: String, description: String, roomId: ID!): Boolean!
        addSongToPlaylist(roomId: ID, playlistId: String, trackUri: String): Boolean!
        suggestToQueue(roomId: ID, trackUri: String, trackName: String, artist: String): Boolean
        deQueue(roomId: ID, trackUri: String): Boolean
    }

    type Subscription {
        suggestedToQueue(roomId: ID!): Queue
        deQueued(roomId: ID trackUri: String): String
    }
`

module.exports = Spotify
