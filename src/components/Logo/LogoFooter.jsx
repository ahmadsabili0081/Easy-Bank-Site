import React from 'react'
import styled from 'styled-components'
import LogoFooterImages from '../../assets/logo-light.svg'

const LogoFooterStyles = styled.div`
  @media screen and (max-width:570px) {
    img{
          width: 50%;
    }
  }
`;


let LogoFooter = () => {
  return (
    <LogoFooterStyles>
      <img src={LogoFooterImages} alt='Ini adalah icon' />
    </LogoFooterStyles>
  )
}

export default LogoFooter
