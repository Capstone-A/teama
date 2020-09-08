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

export const ADD_TO_QUEUE = gql`
  mutation addToQueue($uri: String, $trackName: String, $artist: String, $roomId: Int) {
    addToQueue(uri: $uri, trackName: $trackName, artist: $artist, roomId: $roomId) {
      id
      uri
      trackName
      artist
    }
  }
`

export const ADDED_TO_QUEUE = gql`
  subscription addedToQueue($roomId: Int) {
    suggestedToQueue(roomId: $roomId) {
      id
      uri
      trackName
      artist
    }
  }
`

export const REMOVED_FROM_QUEUE = gql`
  subscription removedFromQueue($roomId: Int) {
    removedFromQueue(roomId: $roomId) {
      id
      uri
      trackName
      artist
    }
  }
`


export const REMOVE_FROM_QUEUE = gql`
  subscription removeFromQueue($roomId: Int) {
    removeFromQueue(roomId: $roomId) {
      id
      uri
      trackName
      artist
    }
  }
`

