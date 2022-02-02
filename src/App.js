import React, { useState, useEffect } from 'react';
import './style.css';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import { PersonNote } from '@styled-icons/fluentui-system-filled/PersonNote';
import { PersonDelete } from '@styled-icons/fluentui-system-filled/PersonDelete';

const UserCard = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex: 1 1 auto;
  min-width:200px;
  border: 3px solid black;
  border-radius: 7px;
  padding: 1em;
  cursor: pointer;
  margin: .1%;
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

export default function App() {
  return (
    <div
      className="app"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '98vh',
      }}
    >
      <Users />
    </div>
  );
}

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

  // const [allUsers, setUser] = useState([]);
  useEffect(() => {}, [allUsers]);

  // const [hovering, setHovering] = useState(false);
  // useEffect(() => {}, [hovering]);

  function User(u) {
    // const [hovering, setHovering] = useState(false);
    // useEffect(() => {}, [hovering]);

    function setHovering(value, id) {
      if (value === true) {
        const user = document.getElementById(id);
        user.style.display = 'flex';
      } else {
        const user = document.getElementById(id);
        user.style.display = 'none';
      }
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
          <PersonNote size="24" onClick={() => editUser(user.id)} />
        </CardEdit>
      );
    };

    const CardDeleteFun = ({ name, user }) => {
      return (
        <CardDelete id="card-delete" className="card-button" title="delete">
          <PersonDelete size="24" onClick={() => removeUser(user.id)} />
        </CardDelete>
      );
    };

    return (
      <UserCard
        key={u.id}
        id={u.name}
        className="user-card font"
        onMouseEnter={(e) => setHovering(true, u.id)}
        onMouseLeave={(e) => setHovering(false, u.id)}
      >
        <UserCardButtonsContainer>
          <UserCardButtons
            id={u.id}
            className="buttons"
            style={{ display: 'none' }}
            // style={{ display: 'flex' }}
          >
            <CardEditFun name="Edit" user={u} />
            <CardDeleteFun name="Delete" user={u} />
          </UserCardButtons>
        </UserCardButtonsContainer>

        <h5>{u.name}</h5>
        <h1>{u.title}</h1>
        <p>{u.years} years</p>
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
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0px auto',
        fontFamily: 'Barlow Condensed',
      }}
    >
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
          allUsers.map((user) => User(user))
        )}
      </section>
    </section>
  );
}
