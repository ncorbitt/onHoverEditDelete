import styled from 'styled-components';

export const UserCard = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex: 1 1 auto;
  min-width:200px;
  // border: 3px solid pink;
  box-shadow: 0px 0px 1px 1px rgb(0,0,0, 0.4);
  border-radius: 7px;
  padding: 1em;
  cursor: pointer;
  margin: .9%;
  width: 100px;

  h1,h5,p {
    font-family: 'Barlow Condensed'
  }


  h1 {
    font-size: 2.5em;
    text-align: center;
  }

  h5 {
    font-size: 1.5em;
    margin: 0;

  }

`;

export const UserCardButtonsContainer = styled.section`
  display:  flex;
  justify-content: flex-end;
  flex: 1 1 auto;
`;

export const UserCardButtons = styled.span`
  position: absolute;
  flex: 1 1 auto;
`;

export const CardEdit = styled.span`
  margin-right: 10px;
  color: darkBlue;
`;

export const CardDelete = styled.section`
  color:  darkRed;
`;
