import React, {useState, useEffect} from 'react'
import { Link, Redirect } from 'react-router-dom'
import { logout } from '../store'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

const Heading = styled.div`
  background-color: black;
  font-family: 'Montserrat', sans-serif;
  color: ${({ theme }) => theme.primary};
  font-size: 5rem;
  padding: 20px;
`
// const SpotifyButton = styled.a`
//   padding: 10px 30px 10px 30px;
//   margin-top: 500px;
//   background-color: rgb(36, 212, 78);
//   font-family: "Montserrat", sans-serif;
//   border-radius: 30px;
//   color: white;
// `;

const Navbar = () => {
  // const [user, setUser] = useState({})

  // useEffect(() => {

  // })

  const isLoggedIn = useSelector((state) => !!state.user.id)

  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(logout())
  }

  return (
    <div>
      <nav>
        {isLoggedIn ? (
          <div>
            {/* The navbar will show these links after you log in */}
            <Link to="/home">Home</Link>
            <a href="#" onClick={handleClick}>
              Logout
            </a>
          </div>
        ) : (
          <div>
            {/* The navbar will show these links before you log in */}
            {/*           <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link> */}
            {/* <SpotifyButton href="/auth/spotify">Login With Spotify</SpotifyButton> */}
            <Heading>CAPSTONE GOATS</Heading>
          </div>
        )}
      </nav>
    </div>
  )
}

export default Navbar


//navbar must show login before logging in; logout after logging out
//the info must be attached to the apollo context
