import React from 'react'
import styled from 'styled-components'
import Box from './Box/Box';
import Paragraph from './Paragraph/Paragraph';
import Titles from './Titles/Titles';
import IconOnline from '../assets/icon-online.svg'
import IconBudgeting from '../assets/icon-budgeting.svg'
import IconOnboarding from '../assets/icon-onboarding.svg'
import IconAPI from '../assets/icon-api.svg'

let Data = [
  {
    img: `${IconOnline}`,
    title: "Online Banking",
    text: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
  },
  {
    img: `${IconBudgeting}`,
    title: "Simple Budgeting",
    text: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."
  },
  {
    img: `${IconOnboarding}`,
    title: "Fast Onboarding",
    text: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away."
  },
  {
    img: `${IconAPI}`,
    title: "Open API",
    text: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
  },
]

const AboutStyles = styled.div`
  padding: 100px 0px;
  position: relative;
  background-color: var(--light-grayish-blue);
  .container__about{
    max-width: 1200px;
    margin: 0px auto;
    .textTitle{
      width: 50%;
    }
    .row__about{
      display: flex;
      justify-content: space-between;
      align-items: stretch;
      margin-top: 50px;
    }
  }
@media screen and (max-width:1024px) {
  padding: 100px 10px;
  .container__about{
    width: 100%;
  }
}
@media screen and (max-width:768px) {
  padding: 50px 10px;
}
@media screen and (max-width:570px) {
  padding: 50px 10px;
  .container__about{
    width: 100%;
    .textTitle{
      width: 100%;
      text-align: center;
      p{
        margin: 10px 0px;
      }
    }
    .row__about{
      flex-direction: column;
    }
  }
}
`;
function About() {
  return (
    <AboutStyles id='About'>
      <div className='container__about'>
        <div className='textTitle'>
          <Titles title="Why choose Easybank?" />
          <Paragraph text="We leverage Open Banking to turn your bank account into your financial hub.
          Control your finances like never before." />
        </div>
        <div className='row__about'>
          {Data.map((itemData, index) => {
            return (
              <Box key={index} boxs={itemData} />
            )
          })}
        </div>
      </div>
    </AboutStyles>
  )
}

export default About
