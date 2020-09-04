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