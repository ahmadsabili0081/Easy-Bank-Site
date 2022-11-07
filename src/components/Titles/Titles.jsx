import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TitleStyles = styled.h1`
  color: var( --title-color);
`;

function Titles(props) {
  return <TitleStyles className='title'>{props.title}</TitleStyles>
}
Titles.propTypes = {
  title: PropTypes.string,
}

export default Titles
