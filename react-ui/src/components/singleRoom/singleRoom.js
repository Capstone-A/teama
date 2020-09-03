import React from 'react'
// import styled from 'styled-components'
import MessageList from './messageList'
import { withRouter } from 'react-router-dom'
import { gql, useQuery } from '@apollo/client'
import { Container, Row, Col } from 'react-bootstrap'
import UsersList from './usersList'
import Player from './player'
import UserSearchBar from './userSearchBar'
import TrackSearchBar from './trackSearchBar'


export const SingleRoom = (props) => {
  const roomId = props.match.params.roomId

  const { loading, error, data, subscribeToMore } = useQuery(GET_ROOM_INFO, {
    variables: { roomId },
  })

  //if (error) return <h1>Something went wrong in the rooms!</h1>
  if (loading) return <h1>Loading...</h1>

  const messages = data.getSingleRoom.messages
  //const songs = data.getSingleRoom.songs
  console.log(data.getSingleRoom, 'singleRoom data')
  console.log(data.getSingleRoom.users, 'users')
  const users = data.getSingleRoom.users
  const accessToken = data.getSingleRoom.accessToken

  return (
    <div>
      <h1>This room is liiiiit</h1>
      <h2>Room Name: {data.getSingleRoom.name}</h2>
      <p>Room Description: {data.getSingleRoom.description}</p>

      <Container fluid>
        <Row>
          <Col>
            <UserSearchBar />
          </Col>
          <UsersList users={users} />
          <Col className="music-player">Music Player</Col>
          {/* <Player accessToken = {accessToken}/> */}
          <TrackSearchBar/>
          <Col className="chat-room">
            <MessageList
              roomId={roomId}
              messages={messages}
              subscribeToNewMessages={() =>
                subscribeToMore({
                  document: MESSAGE_CREATED,
                  variables: { roomId },
                  updateQuery: (prev, { subscriptionData }) => {
                  if (!subscriptionData.data) return prev
                  const messageCreated = subscriptionData.data.messageCreated
                  return Object.assign({}, prev, {
                    getSingleRoom: {
                      messages: [
                        messageCreated,
                        ...prev.getSingleRoom.messages,
                      ],
                    },
                  })
                },
              })
            }
          />
        </Col>
      </Row>
      </Container>
    </div>
  )
}

export default withRouter(SingleRoom)

const GET_ROOM_INFO = gql`
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

const MESSAGE_CREATED = gql`
  subscription messageCreated($roomId: ID!) {
    messageCreated(roomId: $roomId) {
      message
      user {
        spotifyUsername
      }
    }
  }
`
