import React from 'react'
import styled from 'styled-components'
import Logout from './Logout';
import welcome from "../assests/Welcome (2).gif"
function Welcome({currentUser}) {
  return (
    <Container>
        <img src={welcome} alt="Robot" style={{width:"100%"}}/>
        <h1>
            Welcome, <span>{currentUser.username}</span>
        </h1>
        <h3>Please select a chat to start Messaging</h3>
    </Container>
  )
}


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 25rem;
    margin-bottom: 2rem;
  }
  span {
    color: #4e0eff;
  }
`;
export default Welcome
