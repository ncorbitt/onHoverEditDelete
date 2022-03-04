import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

import User from '../User/user.jsx';
import Edit from '../Edit/edit.jsx';

const AddADeveloper = styled.section`
  display: block;
`;

const NoUsersSection = styled.section``;

function Users() {
  // const [allUsers, setUser] = useState([
  //   {
  //     name: 'Etan Torbict',
  //     title: 'Full Stack Developer',
  //     years: 3,
  //     id: uuidv4(),
  //   },
  //   {
  //     name: 'Maryam Torbict',
  //     title: 'UI/UX Developer',
  //     years: 3,
  //     id: uuidv4(),
  //   },
  //   {
  //     name: 'Atyana Torbict',
  //     title: 'UI/UX Developer',
  //     years: 1,
  //     id: uuidv4(),
  //   },
  //   {
  //     name: 'Ban Torbict',
  //     title: 'Game Developer',
  //     years: 1,
  //     id: uuidv4(),
  //   },
  //   {
  //     name: 'Mac David',
  //     title: 'Game Developer',
  //     years: 2,
  //     id: uuidv4(),
  //   },
  // ]);

  const [allUsers, setUser] = useState([]);
  useEffect(() => {}, [allUsers]);

  const [editing, setEditing] = useState(false);
  // useEffect(() => console.log(`Editing: ${editing}`, [editing]));

  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    console.log(currentUser);
  }, [currentUser]);

  function NoUsers() {
    return (
      <NoUsersSection
        className="no-users"
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
        <AddDeveloper />
        {/* <h1 style={{ color: 'grey', fontSize: '7em', margin: 0 }}>NO USERS</h1>
        <p style={{ color: 'grey', fontSize: '3em' }}>Add some ...</p> */}
      </NoUsersSection>
    );
  }

  function findUser(id) {
    const user = allUsers.filter((user) => user.id === id);
    return user ? user : 'User not found.';
  }

  function updateUser(id, payload) {
    console.log('UPDATE USER', payload);

    setUser((devs) =>
      devs.map((user) => {
        if (user.id === id) {
          console.log('found', user);

          user = payload;

          console.log('New payload', user);
        }

        return user;
      })
    );
    console.log(allUsers);
  }

  function AddDeveloper() {
    return (
      <AddADeveloper className="add-a-developer-box">
        <p className="linear-pink-purple" style={{ fontSize: '2em' }}>
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
      </AddADeveloper>
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
      {/* Add a developer */}
      {/* {<AddDeveloper />} */}
      <section
        className="card-container"
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginBottom: 30,
          justifyContent: 'center',
        }}
      >
        {/* Edit component */}
        {editing && (
          <Edit
            u={currentUser}
            setEditing={setEditing}
            editing={editing}
            updateUser={updateUser}
          />
        )}

        {allUsers.length === 0 ? (
          <NoUsers />
        ) : (
          allUsers.map((user) => {
            return (
              <User
                u={user}
                setEditing={setEditing}
                allUsers={allUsers}
                setUser={setUser}
                setCurrentUser={setCurrentUser}
              />
            );
          })
        )}
      </section>
    </section>
  );
}

export default Users;
