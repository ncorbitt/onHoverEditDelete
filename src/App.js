import React, { useState, useEffect } from 'react';
import './style.css';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import { PersonNote } from '@styled-icons/fluentui-system-filled/PersonNote';
import { PersonDelete } from '@styled-icons/fluentui-system-filled/PersonDelete';

const colors = {
  black: '#000000',
  purple: '#5800FF',
  pink: '#E900FF',
  yellow: '#FFC600',
};

const AppContainer = styled.section`

`;

const UserCard = styled.section`
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

const UserCardButtonsContainer = styled.section`
  display:  flex;
  justify-content: flex-end;
  flex: 1 1 auto;
`;

const UserCardButtons = styled.span`
  position: absolute;
  flex: 1 1 auto;
`;

const CardEdit = styled.span`
  margin-right: 10px;
  color: darkBlue;
`;

const CardDelete = styled.section`
  color:  darkRed;
`;
function Users() {
  const [allUsers, setUser] = useState([
    {
      name: 'Etan Torbict',
      title: 'Full Stack Developer',
      years: 3,
      id: uuidv4(),
    },
    {
      name: 'Maryam Torbict',
      title: 'UI/UX Developer',
      years: 3,
      id: uuidv4(),
    },
    {
      name: 'Atyana Torbict',
      title: 'UI/UX Developer',
      years: 1,
      id: uuidv4(),
    },
    {
      name: 'Ban Torbict',
      title: 'Game Developer',
      years: 1,
      id: uuidv4(),
    },
    {
      name: 'Mac David',
      title: 'Game Developer',
      years: 2,
      id: uuidv4(),
    },
  ]);

  const hoveringStyles = {
    textShadow: `3px 3px 10px ${colors.pink}`,
  };

  // const [allUsers, setUser] = useState([]);
  useEffect(() => {}, [allUsers]);

  function User({ u }) {
    const [hovering, isHovering] = useState(false);
    useEffect(() => {}, [hovering]);

    function setHovering(value, u) {
      value === true ? isHovering(true) : isHovering(false);
    }

    function removeUser(id) {
      setUser((prevUsers) => prevUsers.filter((user) => user.id !== id));
    }

    function editUser(id) {
      let _user = allUsers.filter((user) => user.id === id);
      let user = _user[0];
      console.log('edit', user.name);
    }

    const CardEditFun = ({ name, user }) => {
      return (
        <CardEdit id="card-edit" className="card-button" title="edit">
          <PersonNote
            size="24"
            style={{ color: colors.yellow }}
            onClick={() => editUser(user.id)}
          />
        </CardEdit>
      );
    };

    const CardDeleteFun = ({ name, user }) => {
      return (
        <CardDelete id="card-delete" className="card-button" title="delete">
          <PersonDelete
            size="24"
            style={{
              color: colors.pink,
            }}
            onClick={() => removeUser(user.id)}
          />
        </CardDelete>
      );
    };

    return (
      <UserCard
        key={u.id}
        id={u.name}
        style={
          hovering ? { backgroundColor: colors.purple, color: 'white' } : {}
        }
        className="user-card"
        onMouseEnter={(e) => setHovering(true, u)}
        onMouseLeave={(e) => setHovering(false, u)}
      >
        <UserCardButtonsContainer>
          <UserCardButtons
            id={u.id}
            className="buttons"
            style={hovering ? { display: 'flex' } : { display: 'none' }}
          >
            <CardEditFun name="Edit" user={u} />
            <CardDeleteFun name="Delete" user={u} />
          </UserCardButtons>
        </UserCardButtonsContainer>

        <h5 style={hovering ? hoveringStyles : {}}>{u.name}</h5>
        <h1 style={hovering ? hoveringStyles : {}}>{u.title}</h1>
        <p style={hovering ? hoveringStyles : {}}>{u.years} years</p>
      </UserCard>
    );
  }

  function NoUsers() {
    return (
      <section
        style={{
          background: '#d3d3d38f',
          width: '100%',
          height: '98vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1 style={{ color: 'grey', fontSize: '7em', margin: 0 }}>NO USERS</h1>
        <p style={{ color: 'grey', fontSize: '3em' }}>Add some ...</p>
      </section>
    );
  }

  return (
    <section
      className="card-main"
      style={{
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '160px auto',
        fontFamily: 'Barlow Condensed',
        height: '65vh',
      }}
    >
      <section className="add-a-developer-box">
        <p
          className="linear-pink-purple"
          style={{
            borderRadius: 7,
            width: '50%',
            fontSize: '2em',
          }}
        >
          Add A Developer
        </p>
        <p
          className="linear-pink-purple plus-sign"
          style={{
            fontSize: '7em',
            position: 'relative',
            top: '-15px',
            cursor: 'pointer',
          }}
        >
          +
        </p>
      </section>

      <section
        className="card-container"
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginBottom: 30,
        }}
      >
        {allUsers.length === 0 ? (
          <NoUsers />
        ) : (
          allUsers.map((user) => <User u={user} />)
        )}
      </section>
    </section>
  );
}

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

export default function App() {
  return (
    <AppContainer className="app">
      <Header title="My Developers" />
      <Users />
    </AppContainer>
  );
}
