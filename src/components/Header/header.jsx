import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const colors = {
  black: '#000000',
  purple: '#5800FF',
  pink: '#E900FF',
  yellow: '#FFC600',
};

const HeaderSection = styled.section`
position: fixed;
z-index:5;
top:0;
left:0;
width: 100%;
display:flex;
justify-content: center;
align-items: center;
font-family: Barlow Condensed;
background-color: ${colors.purple};   
box-shadow: 0 1px 10px rgb(0 0 0 / 50%);
`;
const HeaderContainer = styled.section`
display: flex;
width:80%;
justify-content: center;
`;
const HeaderMain = styled.section`
display: flex;
align-items: center;
height: 70px;
width: 100%;
color: ${colors.black};
`;
const HeaderTitle = styled.h1`
font-size: 2.5em;
padding: 1em;
color: white;
text-shadow: 3px 3px 10px ${colors.pink}
`;

function Header({ title }) {
  return (
    <HeaderSection className="header-section">
      <HeaderContainer className="heder-containter">
        <HeaderMain className="header-main">
          <HeaderTitle>{title}</HeaderTitle>
        </HeaderMain>
      </HeaderContainer>
    </HeaderSection>
  );
}

export default Header;
