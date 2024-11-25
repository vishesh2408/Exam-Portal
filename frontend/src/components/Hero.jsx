import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import BannerImage from './BannerImage';  

const BannerContent = styled.div`
  max-width: 500px;
 
     position: absolute;
  left: 60px;  // Position from the left side of the screen
  top: 50%;  // Position from the top to the center vertically
  transform: translateY(-50%);
font-family: 'Poppins', sans-serif;
`;

const BannerHeading = styled.h1`
  font-size: 3.5rem;
 
    
     margin-bottom: 20px;
`;

const BannerText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 50px;
`;

const Button = styled.button`
  padding: 12px 25px;
  font-size: 1.2rem;
  background-color: #212222;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  

  &:hover {
    background-color: #0056b3;
  }
`;

const Hero = () => {
  return (
    <div>
       
      <BannerImage />
      <BannerContent>
        <BannerHeading>Crafting Futures Through Quality Testing.</BannerHeading>
        <BannerText>Every Exam, a Step Towards Greatness</BannerText>
        <Link to="/Register">
          <Button>Get Started</Button>
        </Link>
      </BannerContent>
    </div>
  )
}

export default Hero;
