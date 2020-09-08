// import React, { useEffect } from 'react'
// import { Button } from 'react-bootstrap'
// import styled from 'styled-components'
// import { useQuery } from '@apollo/client'
// import { GET_QUEUE, ADDED_TO_QUEUE, REMOVED_FROM_QUEUE} from '../../../graphql'

// const QueueDiv = styled.div`
//   margin-top: 10px;
//   padding: 10px;
//   border-radius: 20px;
//   width: 30vw;
//   height: 60vh;
//   box-shadow: 8px 8px 10px black;
//   background-image: linear-gradient(
//     to bottom right,
//     ${({ theme }) => theme.purple},
//     ${({ theme }) => theme.darkPurple}
//   );
// `
// const Tracks = styled.div`
//   text-align: left;
//   overflow: scroll;
//   padding-left: 10px;
//   padding-right: 10px;
//   height: 90%;
//   background-color: rgba(0, 0, 0, 30%);
// `

// function SuggestionQueue (props) {

//   const roomId = props.roomId
//   console.log(roomId, 'this is roomid')

//   const { loading, error, data, subscribeToMore } = useQuery(GET_QUEUE, {
//     variables: { roomId },
//   })

//   // const subscribeToMoreSongs = () => {
//   //   subscribeToMore({
//   //     document: ADDED_TO_QUEUE,
//   //     variables: {roomId},
//   //     updateQuery: (prev, {subscriptionData}) => {
//   //       if (!subscriptionData.data) return prev
//   //       const newSongAdded = subscriptionData.data.addedToQueue
//   //       console.log(newSongAdded, 'newSongAdded')
//   //       return Object.assign({}, prev, {
//   //         getQueue:[newSongAdded, ...prev.getQueue]
//   //       })
//   //     }
//   //   })
//   // }

//   // const subscribeToLessSongs = () => {
//   //   subscribeToMore({
//   //     document: REMOVED_FROM_QUEUE,
//   //     variables: {roomId},
//   //     updateQuery: (prev, {subscriptionData}) => {
//   //       if(!subscriptionData.data) return prev
//   //       const updatedQueue = subscriptionData.data.removedFromQueue
//   //       return Object.assign({}, prev, {
//   //         getQueue: updatedQueue
//   //       })
//   //     }
//   //   })
//   // }

//   // useEffect(() => {
//   //   subscribeToMoreSongs()
//   //   subscribeToLessSongs()
//   // })

//   console.log('this is the queue', data.getQueue)
  
//   if (loading) return <h1>Loading...</h1>

 

//   // const queue = data.getQueue

//   return (
//     <QueueDiv>
//       <h2>Suggestion Queue</h2>
//       {/* <Tracks>
//         {queue.length ? (
//           queue.map((item) => {
//             return (
//               <>
//                 <h5>{item.trackName}</h5>
//                 <p>{item.artist}</p>
//                 <Button>Add Me</Button>
//               </>
//             )
//           })
//         ) : (
//           <p>Loading tracks...</p>
//         )}
//       </Tracks> */}
//     </QueueDiv>
//   )
// }

// export default SuggestionQueue



