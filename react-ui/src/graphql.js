import { gql } from '@apollo/client'


export const GET_ME = gql`
  query me {
    me {
      user {
        spotifyUsername
        accessToken
      }
      gotUser
    }
  }
`

export const GET_ROOM_INFO = gql`
  query getSingleRoom($roomId: ID!) {
    getSingleRoom(roomId: $roomId) {
      id
      name
      description
      messages {
        message
        user {
          spotifyUsername
        }
      }
      users {
        spotifyUsername
        accessToken
      }
    }
  }
`

export const MESSAGE_CREATED = gql`
  subscription messageCreated($roomId: ID!) {
    messageCreated(roomId: $roomId) {
      message
      user {
        spotifyUsername
      }
    }
  }
`

//**** QUEUE ****//

export const GET_QUEUE = gql`
  query getQueue($roomId: Int) {
    getQueue(roomId: $roomId) {
      id
      uri
      trackName
      artist
    }
  }
`

// export const ADD_TO_QUEUE = gql`
//   mutation addToQueue($uri: String, $trackName: String, $artist: String, $roomId: Int) {
//     addToQueue(uri: $uri, trackName: $trackName, artist: $artist, roomId: $roomId) {

//     }
//   }
// `

// export const ADDED_TO_QUEUE = gql`
//   subscription suggestedToQueue($roomId: ID) {
//     suggestedToQueue(roomId: $roomId) {
//       trackUri
//       trackName
//       artist
//     }
//   }
// `
