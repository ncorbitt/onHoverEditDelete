import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

import User from '../User/user.jsx';
import Edit from '../Edit/edit.jsx';
import { UserFunctions } from '../userFunctions';

const AddADeveloper = styled.section`
  display: none;
`;

function Users() {
  const ufun = UserFunctions();
  console.log(ufun);
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

  // const [allUsers, setUser] = useState([]);
  // useEffect(() => {}, [allUsers]);

  function setUser(id) {
    // update allUsers
    ufun.updateUser(id);
  }
  function allUsers() {
    return ufun.allUsers;
  }

  useEffect(() => console.log(ufun));

  const [editing, setEditing] = useState(true);
  useEffect(() => console.log(`Editing: ${editing}`, [editing]));

  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    console.log(currentUser);
  }, [currentUser]);

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
      <AddADeveloper className="add-a-developer-box">
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
      </AddADeveloper>

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
          <Edit u={currentUser} setEditing={setEditing} editing={editing} />
        )}

        {ufun.allUsers.length === 0 ? (
          <NoUsers />
        ) : (
          ufun.allUsers.map((user) => {
            return (
              <User
                u={user}
                setEditing={setEditing}
                allUsers={ufun.allUsers}
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
