import styled from "styled-components"
import Buttons from "./Buttons/Buttons";
import Paragraph from "./Paragraph/Paragraph";
import Titles from "./Titles/Titles";
import BgHero from '../assets/bg-intro-desktop.svg'
import HeroImages from '../assets/image-mockups.png'
const HeroStyles = styled.div`
  width: 100%;
  height: 670px;
  position: relative;
  background-color: var( --very-lightGray);
  background-image: url(${BgHero});
  background-repeat: no-repeat;
  background-size: calc(100% - 40%);
  background-position: right;
  background-position-y: 50px;
  .container__hero{
    max-width: 1200px;
    margin: 0px auto;
    padding: 70px 0px;
    .row__hero{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .text__hero{
        width: 500px;
        h1{
          width: 70%;
          font-size: 3rem;
        }
        p{
          margin: 10px 0px;
          width: 80%;
        }
      }
      .hero__images{
        width: 500px;
      }
    }
  }
@media screen and (max-width:1024px) {
  padding: 0px 10px;
  .container__hero{
    width: 100%;
  }
}
@media screen and (max-width:768px) {
  padding: 0px 10px;
  .container__hero{
    width: 100%;
  }
}
@media screen and (max-width:570px){
  width: 100%;
  padding: 0px 10px;
  background-size: cover;
  background-position-y: -100px;
  background-position-x: -170px;
  .container__hero{
    width: 100%;
    .row__hero{
      flex-direction: column-reverse;
      .text__hero{
        width: 100%;
        text-align: center;
        h1{
          width: 100%;
        }
        p{
          width: 100%;
        }
      }
      .hero__images{
        width: 100%;
      }
    }
  }
}
`;

let Hero = () => {
  return (
    <HeroStyles id="Hero">
      <div className="container__hero">
        <div className="row__hero">
          <div className="text__hero">
            <Titles title="Next generation digital banking" />
            <Paragraph text="Take your financial life online. Your Easybank
                              account will be a one-stop-shop for spending,
                              saving, budgeting, investing, and much more." />
            <Buttons textButton="Request Invite" />
          </div>
          <div className="hero__images">
            <img src={HeroImages} alt="hero images" />
          </div>
        </div>
      </div>
    </HeroStyles>
  )
}
export default Hero