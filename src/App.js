import React, { useState, useEffect } from 'react';
import './style.css';
import styled from 'styled-components';

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

`;

const UserCardButtonsContainer = styled.section`
  display:  flex;
  justify-content: flex-end;
  flex: 1 1 auto;
`;

const UserCardButtons = styled.section`
  position: absolute;
  flex: 1 1 auto;

`;

const CardEdit = styled.p`
  margin-right: 10px;
  background-color: lightBlue;
  color: darkBlue
`;

const CardDelete = styled.p`
  background-color: darkRed;
  color: white;
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
    },
    {
      name: 'Maryam Torbict',
      title: 'UI/UX Developer',
      years: 3,
    },
    {
      name: 'Atyana Torbict',
      title: 'UI/UX Developer',
      years: 1,
    },
    {
      name: 'Ban Torbict',
      title: 'Game Developer',
      years: 1,
    },
  ]);

  function User(u) {
    const [hovering, setHovering] = useState(false);
    useEffect(() => {}, [hovering]);

    return (
      <UserCard
        className="user-card"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <UserCardButtonsContainer>
          <UserCardButtons
            className="buttons"
            style={{ display: hovering ? 'flex' : 'none' }}
          >
            <CardEdit id="card-edit" className="card-button">
              Edit
            </CardEdit>
            <CardDelete id="card-delete" className="card-button">
              Delete
            </CardDelete>
          </UserCardButtons>
        </UserCardButtonsContainer>

        <h5>{u.name}</h5>
        <h1>{u.title}</h1>
        <p>{u.years} years</p>
      </UserCard>
    );
  }

  return (
    <section style={{ width: '80%', margin: '0 auto' }}>
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
