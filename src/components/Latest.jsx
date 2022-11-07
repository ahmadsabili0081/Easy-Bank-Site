import styled from "styled-components"
import currencyImages from '../assets/image-currency.jpg';
import restaurantImages from '../assets/image-restaurant.jpg';
import PlaneImages from '../assets/image-plane.jpg';
import confettiImages from '../assets/image-confetti.jpg';
import BoxLatest from "./BoxLatest/BoxLatest";
import Titles from "./Titles/Titles";

let DataLates = [
  {
    img: `${currencyImages}`,
    span: 'By Claire Robinson',
    titlesLatest: 'Receive money in any currency with no fees',
    textLatest: 'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …'
  },
  {
    img: `${restaurantImages}`,
    span: 'By Wilson Hutton',
    titlesLatest: 'Treat yourself without worrying about money',
    textLatest: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …'
  },
  {
    img: `${PlaneImages}`,
    span: 'By Wilson Hutton',
    titlesLatest: 'Take your Easybank card wherever you go',
    textLatest: 'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …'
  },
  {
    img: `${confettiImages}`,
    span: 'By Claire Robinson',
    titlesLatest: 'Our invite-only Beta accounts are now live!',
    textLatest: 'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...'
  },
]

const LatestStyles = styled.div`
  position: relative;
  padding: 100px 0px;
  background-color:  var( --very-lightGray);
  .container__Latest{
    max-width : 1200px;
    margin: 0px auto;
    .row__Latest{
      display: flex;
      justify-content: space-between;
      align-items: stretch;
      margin-top: 30px;
    }
  }
@media screen and (max-width:570px) {
  padding: 50px 10px;
  .container__Latest{
    width: 100%;
    .row__Latest{
      flex-direction: column;
      h1{
        text-align: center;
      }
    }
  }
}
`;

let Latets = () => {
  return (
    <LatestStyles id="Blog">
      <div className="container__Latest">
        <Titles title="Latest Articles" />
        <div className="row__Latest">
          {DataLates.length > 0 && <BoxLatest DataLates={DataLates} />}
        </div>
      </div>
    </LatestStyles>
  )
}
export default Latets