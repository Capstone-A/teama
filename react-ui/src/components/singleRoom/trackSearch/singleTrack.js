import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
// import UserContext from '../../../userContext'
import { SUGGEST_TO_QUEUE } from '../../../graphql'

// import styled from 'styled-components'

function SingleTrack(props) {
  const [variables, setVariables] = useState({
    roomId: props.roomId,
    trackUri: props.item.uri
  })

  const [suggestToQueue] = useMutation(SUGGEST_TO_QUEUE, {
    onError: (err) => console.error(err)
  })


  const handleClick = evt => {
    evt.preventDefault()
    suggestToQueue({ variables })
  }


  return (
      <div onClick={handleClick}>
        <h3>{props.item.name}</h3>
        <h4>{props.item.artists[0].name}</h4>
      </div>
  )
}

export default SingleTrack
