import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

import User from '../User/user.jsx';
import Edit from '../Edit/edit.jsx';
import CreateUser from '../Modal/createUser';

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

  const [creating, setCreating] = useState(false);

  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    console.log(currentUser);
  }, [currentUser]);

  function NoUsers() {
    return (
      <NoUsersSection
        className="no-users"
        style={{
          width: '100%',
          height: 600,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <AddDeveloper />
      </NoUsersSection>
    );
  }

  function findUser(id) {
    const user = allUsers.filter((user) => user.id === id);
    return user ? user : 'User not found.';
  }

  function updateUser(id, payload) {
    setUser((devs) =>
      devs.map((user) => {
        if (user.id === id) {
          user = payload;
        }
        return user;
      })
    );
  }

  function cUser(id, payload) {
    setUser((devs) =>
      devs.map((user) => {
        if (user.id !== id) {
          user = payload;
        }
        return user;
      })
    );
  

  function AddDeveloper() {
    return (
      <AddADeveloper className="add-a-developer-box">
        <p className="linear-pink-purple" style={{ fontSize: '4em' }}>
          Add A Developer
        </p>
        <p
          onClick={() => createUser(u)}
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
      <section
        className="card-container"
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          width: 600,
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

        {/* Creating  component */}
        {creating && (
          <CreateEdit
            u={currentUser}
            setCreating={setCreating}
            creating={creating}
            createUser={cUser}
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
