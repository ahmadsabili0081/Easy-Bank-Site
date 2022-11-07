import styled from "styled-components";
import PropTypes from 'prop-types';
import Paragraph from "../Paragraph/Paragraph";

const BoxLatestStyles = styled.div`
  width: 300px;
  margin: 10px;
  border-radius: 10px 0px 0px 0px;
  background-color: #fff;
  img{
    height: 200px;
    border-radius: 10px 10px 0px 0px;
  }
  .itemText{
    padding: 10px;
    span{
      display: inline-block;
      font-size: 12px;
      color: var(--grayish-blue);
    }
    h3{
      margin: 15px 0px;
    }
  }
@media screen and (max-width:570px) {
  width: 100%;
  margin: 20px 0px;
}
`;

let BoxLatest = (props) => {
  return (
    props.DataLates.map((itemData, index) => {
      return (
        <BoxLatestStyles key={index}>
          <img src={itemData.img} alt='icon' />
          <div className="itemText">
            <span>{itemData.span}</span>
            <h3>{itemData.titlesLatest}</h3>
            <Paragraph text={itemData.textLatest} />
          </div>
        </BoxLatestStyles>
      )
    })
  )
}
BoxLatest.propTypes = {
  DataLates: PropTypes.array,
}
export default BoxLatest;
