import React, { useState } from 'react'
import { useMutation, useSubscription } from '@apollo/client'
// import UserContext from '../../../userContext'
import { ADD_TO_QUEUE, ADDED_TO_QUEUE } from '../../../graphql'

// import styled from 'styled-components'

function SingleTrack(props) {

  const [variables, setVariables] = useState({
    roomId: props.roomId,
    uri: props.item.uri,
    trackName: props.item.name,
    artist: props.item.artists[0].name
  })

  const [addToQueue] = useMutation(ADD_TO_QUEUE, {
    onError: (err) => console.error(err)
  })

  // const {data: {suggestedToQueue}, loading} = useSubscription(
  //   ADDED_TO_QUEUE,
  //   { variables: { roomId: variables.roomId }}
  // )

  const handleClick = evt => {
    evt.preventDefault()
    addToQueue({ variables })

    // const { trackUri, trackName, artist } = suggestedToQueue
    // localStorage.setItem(`${trackUri}`, {trackUri, trackName, artist})
  }


  return (
      <div onClick={handleClick}>
        <h3>{props.item.name}</h3>
        <h4>{props.item.artists[0].name}</h4>
      </div>
  )
}

export default SingleTrack
