const { gql } = require('apollo-server')


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


    type Mutation {
        createPlaylist(name: String, description: String, roomId: ID!): Boolean!
        addSongToPlaylist(roomId: ID, playlistId: String, trackUri: String): Boolean!
    }

    
`

module.exports = Spotify
