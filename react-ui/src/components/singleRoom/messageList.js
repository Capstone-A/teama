import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { gql, useMutation } from '@apollo/client'
import SingleMessage from './singleMessage'
//import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import styled from 'styled-components'

const MessageDiv = styled.div`
  margin: 20px;
  padding: 10px;
  border-radius: 20px;
  box-shadow: 8px 8px 10px black;
  background-image: linear-gradient(
    to bottom right,
    ${({ theme }) => theme.mint},
    ${({ theme }) => theme.sky}
  );
  width: 20vw;
  height: 60vh;
`

const ChatButton = styled.button`
  background-color: ${({ theme }) => theme.mint};
  color: #000000;
  font-size: 1em;
  font-weight: 800;
  border-radius: 20px;
  padding: 0.3em 0.8em;
  margin: 10px;
`
const Messages = styled.div`
  text-align: left;
  overflow: scroll;
  padding-left: 10px;
  padding-right: 10px;
  height: 60%;
  background-color: rgba(255, 255, 255, 30%);
`

function MessageList(props) {
  useEffect(() => {
    props.subscribeToNewMessages()
  })

  const [variables, setVariables] = useState({
    roomId: props.match.params.roomId,
    message: '',
  })

  const [
    createMessage,
    { loading: mutationLoading, error: mutationError },
  ] = useMutation(CREATE_MESSAGE)

  function updateScroll(){
    Messages.scrollTop = Messages.scrollHeight;
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    createMessage({ variables })
    setVariables({ ...variables, message: '' })
    updateScroll()
  }


  return (
    <MessageDiv>
      <h1>Chat Room</h1>
      <Messages>
        {props.messages.map((message) => (
          <SingleMessage key={message.id} {...message} />
        ))}
      </Messages>
      <Form onSubmit={handleSubmit}>
        <Form.Control
          type="text"
          value={variables.message}
          onChange={(e) =>
            setVariables({ ...variables, message: e.target.value })
          }
          placeholder="New Message"
        />
        <ChatButton type="submit">Send</ChatButton>
      </Form>
      {mutationLoading && <p>Loading...</p>}
      {mutationError && <p>Error :( Please try again</p>}
    </MessageDiv>
  )
}

const CREATE_MESSAGE = gql`
  mutation createMessage($roomId: ID, $message: String!) {
    createMessage(roomId: $roomId, message: $message) {
      message
      user {
        spotifyUsername
      }
    }
  }
`
export default withRouter(MessageList)
