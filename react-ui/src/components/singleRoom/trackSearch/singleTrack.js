import React, { useState } from 'react'
import { useMutation, useSubscription } from '@apollo/client'
// import UserContext from '../../../userContext'
import { SUGGEST_TO_QUEUE, SUGGESTED_TO_QUEUE } from '../../../graphql'

// import styled from 'styled-components'

function SingleTrack(props) {

  const [variables, setVariables] = useState({
    roomId: props.roomId,
    trackUri: props.item.uri,
    trackName: props.item.name,
    artist: props.item.artists[0].name
  })

  const [suggestToQueue] = useMutation(SUGGEST_TO_QUEUE, {
    onError: (err) => console.error(err)
  })

  // const {data: {suggestedToQueue}, loading} = useSubscription(
  //   SUGGESTED_TO_QUEUE,
  //   { variables: { roomId: variables.roomId }}
  // )

  const handleClick = evt => {
    evt.preventDefault()
    suggestToQueue({ variables })

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
