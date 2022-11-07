import styled from "styled-components"
import LogoFooter from "./Logo/LogoFooter"
import FacebookIcons from '../assets/icon-facebook.svg';
import YoutubeIcons from '../assets/icon-youtube.svg';
import TwitterIcons from '../assets/icon-twitter.svg';
import PinterestIcons from '../assets/icon-pinterest.svg';
import InstagramIcons from '../assets/icon-instagram.svg'


import { Link } from "react-scroll";
import Buttons from "./Buttons/Buttons";

const FooterStyles = styled.div`
    padding: 50px 0px;
    position: relative;
    background-color: var(--dark-blue);
    .container__footer{
      max-width: 1200px;
      margin: 0px auto;
      .row__footer{
        display: flex;
        justify-content: space-between;
        align-items: stretch;
        .logo{
          .logoIcons{
            margin-top: 50px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            img{
              width: 20px;
              height: 20px;
            }
          }
        }
        ul{
          li{
            padding: 12px;
            a{
              color: #f3f4f6;
            }
          }
        }
        .copyright{
          display: flex;
          justify-content: center;
          flex-direction: column;
          span{
            display: inline-block;
            margin-top: 50px;
            color: #9698a6;
          }
        }
      }
    }
@media screen and (max-width:1024px) {
  padding: 50px 10px;
}
@media screen and (max-width:570px){
  padding: 50px 10px;
  .container__footer{
    width: 100%;
    .row__footer{
      flex-direction: column;
      .logo{
        text-align: center;
        .logoIcons{
          width: 50%;
          margin: 50px auto;
        }
      }
      ul{
        margin: 10px 0px;
        text-align: center;
      }
      .copyright{
        text-align: center;
      }
    }
  }
}
`;

let Footer = () => {
  return (
    <FooterStyles>
      <div className="container__footer">
        <div className="row__footer">
          <div className="logo">
            <LogoFooter />
            <div className="logoIcons">
              <Link to="facebook"><img src={FacebookIcons} alt="logo" /></Link>
              <Link to="youtube"><img src={YoutubeIcons} alt="icon" /></Link>
              <Link to="youtube"><img src={TwitterIcons} alt="icon" /></Link>
              <Link to="youtube"><img src={PinterestIcons} alt="icon" /></Link>
              <Link to="youtube"><img src={InstagramIcons} alt="icon" /></Link>
            </div>
          </div>
          <ul>
            <li><Link to="About Us">About Us</Link></li>
            <li><Link to="Contact">Contact</Link></li>
            <li><Link to="Blog">Blog</Link></li>
          </ul>
          <ul>
            <li><Link to="Careers">Careers</Link></li>
            <li><Link to="Support">Support</Link></li>
            <li><Link to="Privacy Policy">Privacy Policy</Link></li>
          </ul>
          <div className="copyright">
            <Buttons textButton="Request Invite" />
            <span>© Easybank. All Rights Reserved</span>
          </div>
        </div>
      </div>
    </FooterStyles>
  )
}
export default Footer