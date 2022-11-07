import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components'
import Buttons from './Buttons/Buttons';
import Logo from './Logo/Logo'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';

const HeaderStyles = styled.header`
  width: 100%;
  padding: 1%;
  position: fixed;
  top: 0;
  z-index: 1;
  background-color: #fff;
  .container__header{
    max-width: 1200px;
    margin: 0px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    nav.navbar{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 800px;
      ul{
        display: flex;
        justify-content: space-between;
        align-items: center;
        li{
          font-weight: 600;
          margin: 5px 5px;
          padding: 10px;
          color: var(--grayish-blue);
        }
      }
    }
  }
@media screen and (max-width:768px) {
  width: 100%;
  padding: 3% 1%;
  .container__header{
    width: 100%;
    nav.navbar{
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      width: 60%;
      height: 100vh;
      position: fixed;
      top: 0;
      right: -100%;
      overflow-x: hidden;
      transition: 0.5s;
      background-color: #fff;
      box-shadow: 2px 5px 10px rgba(0,0,0,0.45);
      ul{
        flex-direction: column;
      }
    }
    nav.navbar.mobile{
      right: 0;
      svg{
        position: absolute;
        top: 20px;
        right: 20px;
        cursor: pointer;
        font-size: 30px;
      }
    }
    svg{
      font-size: 25px;
    }
  }
}
@media screen and (max-width:570px){
  width: 100%;
  padding: 4%;
  .container__header{
    width: 100%;
    nav.navbar{
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      width: 70%;
      height: 100vh;
      position: fixed;
      top: 0;
      right: -100%;
      overflow-x: hidden;
      transition: 0.5s;
      background-color: #fff;
      box-shadow: 2px 5px 10px rgba(0,0,0,0.45);
      ul{
        flex-direction: column;
      }
    }
    svg{
        font-size: 25px;
      }
    nav.navbar.mobile{
      right: 0;
      svg{
        position: absolute;
        top: 20px;
        right: 20px;
        cursor: pointer;
        font-size: 30px;
      }
    }
  }
}
`;

function Header() {
  const [nav, setNav] = useState(false);
  const [mobile, setMobile] = useState(
    window.matchMedia('(max-width:768px)').matches
  )
  useEffect(() => {
    window.addEventListener('resize', () => {
      setMobile(window.matchMedia('(max-width:768px)').matches);
    })

  }, []);
  let handleClickNav = () => {
    setNav(true);
  }
  let handleCloseNav = () => {
    setNav(false);
  }
  return (
    <HeaderStyles>
      <div className='container__header'>
        <Logo />
        <nav className={nav ? 'navbar mobile' : 'navbar'}>
          {nav && <FontAwesomeIcon onClick={handleCloseNav} icon={faClose} />}
          <ul>
            <li><Link to='Hero' smooth>Home</Link></li>
            <li><Link to='About' smooth>About</Link></li>
            <li><Link to='Contact' smooth>Contact</Link></li>
            <li><Link to='Blog' smooth>Blog</Link></li>
            <li><Link to='Careers' smooth>Careers</Link></li>
          </ul>
          <Buttons textButton='Request Invite' />
        </nav>
        {mobile && (<FontAwesomeIcon icon={faBars} onClick={handleClickNav} />)}
      </div>
    </HeaderStyles>
  )
}

export default Header
