import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <a>
          <img src="/images/home-icon.svg"/>
          <span>HOME</span>
        </a>
        <a>
          <img src="/images/search-icon.svg"/>
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg"/>
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="/images/original-icon.svg"/>
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg"/>
          <span>MOVIES</span>
        </a>
        <a>
          <img src="/images/series-icon.svg"/>
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImage src="/images/dalmatian-breed-dog.webp" />
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
`
// FOR ME - remember align vs justify.

const Logo = styled.img`
  width: 80px;
`

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin: 0 0 0 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 30px;
      margin: 0 5px 0 0;
    }

    span {
      font-size: 12px;
      letter-spacing: 1.4px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background-color: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -5px;
        opacity: 0;
        transform-origin: left;
        transition: opacity 300ms, transform 300ms;
        transform: scaleX(0)
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`

const UserImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
`
