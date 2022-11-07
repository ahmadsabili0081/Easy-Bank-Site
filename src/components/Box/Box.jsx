import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Paragraph from '../Paragraph/Paragraph'

const BoxStyles = styled.div`
  width: 250px;
  img{
    width: 70px;
    height: 70px;
  }
  h3{
    margin: 20px 0px;
  }
@media screen and (max-width:570px) {
  width: 100%;
  text-align: center;
}
`

function Box({ boxs }) {
  return (
    <BoxStyles>
      <img src={boxs.img} alt='Icon box' />
      <h3>{boxs.title}</h3>
      <Paragraph text={boxs.text} />
    </BoxStyles>
  )
}
Box.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
}
export default Box
