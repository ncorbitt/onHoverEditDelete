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
    <div>
      <Users />
    </div>
  );
}

function Users() {
  const [users, setUser] = useState([
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
  ]);

  function User(u) {
    const [hovering, setHovering] = useState(false);
    useEffect(() => {}, [hovering]);

    const CardEditFun = ({ name }) => {
      return (
        <CardEdit id="card-edit" className="card-button" title="edit">
          <PersonNote size="24" />
        </CardEdit>
      );
    };

    const CardDeleteFun = ({ name }) => {
      return (
        <CardDelete id="card-delete" className="card-button" title="delete">
          <PersonDelete size="24" />
        </CardDelete>
      );
    };

    return (
      <UserCard
        key={u.id}
        className="user-card font"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <UserCardButtonsContainer>
          <UserCardButtons
            className="buttons"
            style={{ display: hovering ? 'flex' : 'none' }}
            // style={{ display: 'flex' }}
          >
            <CardEditFun name="Edit" />
            <CardDeleteFun name="Delete" />
          </UserCardButtons>
        </UserCardButtonsContainer>

        <h5>{u.name}</h5>
        <h1>{u.title}</h1>
        <p>{u.years} years</p>
      </UserCard>
    );
  }

  return (
    <section style={{ width: '80%', margin: '0 auto' }} className="font">
      <h1>Users</h1>
      <section
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {users.map((user) => User(user))}
      </section>
    </section>
  );
}
