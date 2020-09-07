import React from 'react'
// import styled from 'styled-components'

// const Message = styled.p`
//   color: black;
// `


export default function SingleTrack(props) {

  const handleClick = evt => {
    evt.preventDefault()
    console.log("props.item: ", props.item)
    console.log("evt.currentTarge: ",evt.currentTarget)
    console.log("evt.currentTarge.uri: ",evt.currentTarget.trackUri)
  }


  return (
      <div onClick={handleClick}>
        <h3>{props.item.name}</h3>
        <h4>{props.item.artists[0].name}</h4>
      </div>
  )
}
