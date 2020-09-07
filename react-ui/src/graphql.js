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

export const SUGGEST_TO_QUEUE = gql`
  mutation suggestToQueue($roomId: Id $trackUri: String) {
    suggestToQueue(roomId: $roomId trackUri: $trackUri) {
      trackUri
    }
  }
`
