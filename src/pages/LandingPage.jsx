import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import About from '../components/About'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Latets from '../components/Latest'

const ButtonScrollStyles = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 12px;
  background-color: var(--very-lightGray);
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 2px 5px 10px rgba(0,0,0,0.45);
  animation: header ease 0.5s;
  z-index: 30;
  svg{
    pointer-events: none;
  }
@keyframes header{
  from{
    right: -100%;
  }
  to{
    right: 20px;
  }
}
`;

function LandingPage() {
  const [scroll, setScroll] = useState(
    window.scrollY > 50
  );
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  let handleClickUp = () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }
  return (
    <div className='container'>
      {scroll &&
        (<ButtonScrollStyles onClick={handleClickUp}>
          <FontAwesomeIcon icon={faArrowUp} />
        </ButtonScrollStyles>)}
      <Header />
      <Hero />
      <About />
      <Latets />
      <Footer />
    </div>
  )
}

export default LandingPage
