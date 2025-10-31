import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/black_logo.png'
import { useNavigate } from 'react-router-dom'
const NavbarContainer = styled.div`
  height: ${({isFullScreen}) => isFullScreen ? '0' : '4.5rem'};
  background: #1e1e1e;
  display: flex;
  align-items: center;
  justify-content: center;
`

const NavbarContent = styled.button`
  background: transparent;
  border: 0;

  display: flex;
  align-items: center;
  gap: 0.3rem;
  cursor: pointer;
`

const Logo = styled.img`
  width: 100px;
  margin-right: -0.9rem;
`

const MainHeading = styled.h1`
  font-size: 2rem;
  font-weight: 200;
  color: #fff;

  span{
    font-weight: 700;
  }
`

const Navbar = ({ isFullScreen }) => {
  const navigate = useNavigate()
  return (
    <NavbarContainer isFullScreen={isFullScreen}>
      <NavbarContent onClick={() => {
        navigate('/')
      }}>
        <Logo src={logo} />
        <MainHeading>
          <span>Code</span>Rush
        </MainHeading>
      </NavbarContent>
    </NavbarContainer>
  )
}

export default Navbar