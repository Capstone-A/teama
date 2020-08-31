import React from 'react'
import styled from 'styled-components'
import { gql, useQuery, useMutation } from '@apollo/client'
import { withRouter } from 'react-router'

const RoomList = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.primary};
`

const RoomCard = styled.div`
  border-radius: 10px;
  background-color: ${({ theme }) => theme.secondary};
  box-shadow: 5px 5px 10px black;
  flex-basis: 1fr;
  width: 250px;
  height: 300px;
  margin-top: 20px;
  font-family: 'Montserrat', sans-serif;
  color: black;
`

const GET_All_ROOMS = gql`
  {
    getAllRooms {
      id
      name
      description
      # public
    }
  }
`

const JOIN_ROOM = gql`
  mutation joinRoom($roomId: ID!) {
    joinRoom(roomId: $roomId) {
      ok
    }
  }
`

function Rooms(props) {
  const { loading, error, data } = useQuery(GET_All_ROOMS)
  const [joinExistingRoom] = useMutation(JOIN_ROOM, {
    onError: (err) => console.error(err),
  })

  const handleCardClick = (evt) => {
    evt.preventDefault()
    joinExistingRoom({ variables: { roomId: evt.currentTarget.id } }).then(
      props.history.push(`/room/${evt.currentTarget.id}`)
    )
  }

  if (loading)
    return (
      <>
        <h1>Loading...</h1>
      </>
    )
  else if (error)
    return (
      <>
        <h1>{`Error! ${error.message}`}</h1>
      </>
    )
  else {
    return (
      <RoomList>
        {data.getAllRooms.map((room) => (
          <RoomCard key={room.id} id={room.id} onClick={handleCardClick}>
            <h1 style={{ fontFamily: 'Cardo' }}>{room.name}</h1>
          </RoomCard>
        ))}
      </RoomList>
    )
  }
}
export default withRouter(Rooms)
