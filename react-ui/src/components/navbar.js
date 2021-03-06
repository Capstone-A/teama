import React, { useContext } from 'react'
import UserContext from '../userContext'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Heading = styled.div`
  font-size: 4rem;
  padding-top: 10px;
  color: black;
  margin-bottom: -30px;
  text-shadow: 0 0 10px ${({ theme }) => theme.golden};
`

const StyledNav = styled.nav`
  background-color: black;
  font-family: 'Montserrat', sans-serif;
  position: fixed;
  z-index: 1000;
  width: 100vw;
  height: 130px;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.purple};
  :hover {
    text-decoration: none;
    color: ${({ theme }) => theme.darkPurple};
  }
`

const Navbar = () => {
  const isLoggedIn = useContext(UserContext)

  return (
    <StyledNav>
      <div>
        <Heading>DJ PARTY</Heading>
        {isLoggedIn && (<StyledLink to="/home">View All Rooms</StyledLink>)}
      </div>
    </StyledNav>
  )
}

export default Navbar

//navbar must show login before logging in; logout after logging out
//the info must be attached to the apollo context
