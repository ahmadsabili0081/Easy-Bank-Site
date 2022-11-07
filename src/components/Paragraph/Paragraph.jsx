import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ParagraphStyles = styled.p`
    color: var(--grayish-blue);
    line-height: 1.5;
`;

function Paragraph(props) {
  return <ParagraphStyles>{props.text}</ParagraphStyles>
}
Paragraph.propTypes = {
  text: PropTypes.string,
}
export default Paragraph
