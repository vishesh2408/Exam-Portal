import React from 'react';
import styled from 'styled-components';
import banner3 from '../components/banner3.png';

const Banner = styled.header`
  background-image: url('${banner3}');
  display: flex;
  align-items: center;
  padding-left: 60px;
  height: 700px;
   color: rgb(15, 14, 14);

  width: 100%;
    min-width: 1520px;
    height: 700px;
    margin-top:10px;
    font: verdana;
    




    
`;

const BannerImage = () => {
  return <Banner />;
}

export default BannerImage;
