import React, { useContext, useState } from 'react'
import UserContext from '../../../userContext'

import SearchResult from './searchResult'

import styled from 'styled-components'

const SongSearchDiv = styled.div`
  margin: 20px;
  padding: 10px;
  border-radius: 20px;
  width: 35vw;
  box-shadow: 8px 8px 10px black;
  background-image: linear-gradient(
    to bottom right,
    ${({ theme }) => theme.purple},
    ${({ theme }) => theme.darkPurple}
  );
`

const TrackList = styled.div`
  background-color: rgba(0, 0, 0, 30%);
`

function TrackSearchBar(props) {
  const user = useContext(UserContext)
  const [tracks, setTracks] = useState(null)
  const [loading, setLoading] = useState(false)
  const [value, setValue] = useState("")

  const search = async val => {
    setLoading(true)
    const params = `q=${val}&type=track&limit=10`
    const searchParams = new URLSearchParams(params)

    const response = await fetch(
      'https://api.spotify.com/v1/search?' + searchParams,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          authorization: `Bearer ${user.accessToken}`,
        },
      }
    )

    const data = await response.json()
    console.log('data.tracks.items: ', data.tracks.items)
    setTracks(data.tracks.items)
    setLoading(false)
  }

  const onChangeHandler = async evt => {
    search(evt.target.value);
    setValue(evt.target.value)
  };

  return (
    <SongSearchDiv>
      <h2>Find Song</h2>
      {/* TODO: onKeyDown (https://stackoverflow.com/questions/43384039/how-to-get-input-textfield-values-when-enter-key-is-pressed-in-react-js/43384732) */}
      <input
        value={value}
        onChange={evt => onChangeHandler(evt)}
        placeholder="Search song"
      />
      {
        tracks &&
        <TrackList>
          <SearchResult list={tracks} />
        </TrackList>
      }
    </SongSearchDiv>
  )
}

export default TrackSearchBar

//////////////

// import React, { useState, useContext } from 'react'
// import { useMutation } from '@apollo/client'
// import { useCombobox } from 'downshift'
// import UserContext from '../../userContext'
// import { SUGGEST_TO_QUEUE } from '../../graphql'
// import styled from 'styled-components'

// const SongSearchDiv = styled.div`
//   margin: 20px;
//   padding: 10px;
//   border-radius: 20px;
//   width: 35vw;
//   box-shadow: 8px 8px 10px black;
//   background-image: linear-gradient(
//     to bottom right,
//     ${({ theme }) => theme.purple},
//     ${({ theme }) => theme.darkPurple}
//   );
// `

// const TrackList = styled.div`
//   background-color: rgba(0, 0, 0, 30%);
// `

// function TrackSearchBar(props) {
  // const user = useContext(UserContext)
//   const [inputItems, setInputItems] = useState([])
//   // const [tracks, setTracks] = useState([])
//   const [track, setTrack] = useState({}) // TODO: Track should be added to a playlist
//   const [suggestToQueue, { data }] = useMutation(SUGGEST_TO_QUEUE)

//   const [token] = useState(user.accessToken)
//   const {
//     isOpen,
//     getMenuProps,
//     getInputProps,
//     getComboboxProps,
//     highlightedIndex,
//     getItemProps,
//     reset
//   } = useCombobox({
//     items: inputItems,
//     onInputValueChange: async ({ inputValue }) => {
//       const params = `q=${inputValue}&type=track&limit=10`
//       const searchParams = new URLSearchParams(params)

//       const response = await fetch(
//         'https://api.spotify.com/v1/search?' + searchParams,
//         {
//           method: 'GET',
//           headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//             authorization: `Bearer ${token}`,
//           },
//         }
//       )

//       const data = await response.json()
//       console.log('data.tracks.items: ', data.tracks.items)
//       setInputItems(data.tracks.items)
//       // console.log("inputItems: ", inputItems)
//     },
//     onSelectedItemChange: item => console.log("item: ", item),
//     onHighlightedIndexChange: item => console.log("item2: ", item),
//   })

//   return (
//     <SongSearchDiv className="searchTrack" >
//       <h2>Find Song</h2>
//       <div {...getComboboxProps()}>
//         <input
//           {...getInputProps()}
//           placeholder="Search songs"
//           enterBotton="Search"
//           size="large"
//         />
//       </div>
//       <TrackList {...getMenuProps}>
//         {isOpen &&
//           inputItems.map((item, index) => (
//             <span
//               key={item.id}
//               {...getItemProps({ item, index })}
//               // onClick={() => {
//               //   //TODO: where to send track data??
//               //   // setTrack(item)
//               //   console.log('item', item)
//               //   console.log('item.trackUri',)
//               //   // suggestToQueue(props.roomId, item.trackUri)
//               // }}
//               >
//               <h4
//                 style={
//                   highlightedIndex === index ? { background: '#ede' } : {}
//                 }>
//                 {item.name}
//               </h4>
//               <p>{item.artists[0].name}</p>
//             </span>
//           ))}
//       </TrackList>
//     </SongSearchDiv>
//   )
// }
// export default TrackSearchBar
