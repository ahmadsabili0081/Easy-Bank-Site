import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ButtonStyles = styled.button`
  display: inline-block;
  padding: 15px 30px;
  outline: none;
  border: none;
  font-weight: 700;
  border-radius: 15px;
  color: var(--light-grayish-blue);
  cursor: pointer;
  font-family: 'Public Sans', sans-serif;
  background: var(--button-color);
  @media screen and (max-width:570px) {
    margin: 20px auto;
    text-align: center;
  }
`

function Buttons(props) {
  return <ButtonStyles type='button'>{props.textButton}</ButtonStyles>
}
Buttons.propTypes = {
  textButton: PropTypes.string
}
export default Buttons
