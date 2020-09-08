import React, { useState, useContext, useEffect } from 'react'
//import { useCombobox } from 'downshift'
import UserContext from '../../../userContext'
import styled from 'styled-components'

const QueueDiv = styled.div`
  margin-top: 10px;
  padding: 10px;
  border-radius: 20px;
  width: 30vw;
  height: 60vh;
  box-shadow: 8px 8px 10px black;
  background-image: linear-gradient(
    to bottom right,
    ${({ theme }) => theme.purple},
    ${({ theme }) => theme.darkPurple}
  );
`
const Tracks = styled.div`
  text-align: left;
  overflow: scroll;
  padding-left: 10px;
  padding-right: 10px;
  height: 90%;
  background-color: rgba(0, 0, 0, 30%);
`

function SuggestionQueue (props) {


  return (
    <QueueDiv>
      <h2>Suggestions!</h2>
      <Tracks>
        {songs.length ? (
          songs.map((item) => {
            let albumImg = item.track.album.images[2]
            let artists = item.track.artists.map((artist) => artist.name)
            return (
              <>
                <img key={item.track.id} src={albumImg.url} alt="" />
                <h5>{item.track.name}</h5>
                <p>{artists}</p>
                <p>{item.track.album.name}</p>
              </>
            )
          })
        ) : (
          <p>Loading tracks...</p>
        )}
      </Tracks>
    </QueueDiv>
  )
}
