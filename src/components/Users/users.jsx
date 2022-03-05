import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

// Components
import User from '../User/user.jsx';
import Edit from '../Edit/edit.jsx';
import CreateUser from '../Modal/createUser.jsx';

// icons
import { PersonAddOutline } from '@styled-icons/evaicons-outline/PersonAddOutline';

// Styled components
const AddADeveloper = styled.section``;
const WhenWeHaveADeveloper = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  height: 64px;
  width: 100%;
  font-variant: petite-caps;
`;
// const WhenWeHaveADeveloper = styled.section`
//   font-variant: petite-caps;
// `;
const NoUserSection = styled.section``;
const CardMain = styled.section``;
const CardContainer = styled.section``;

/**
 * The actual function Users
 *
 *
 *
 */

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
  useEffect(() => {
    console.log('Users', allUsers);
  }, [allUsers]);

  const [editing, setEditing] = useState(false);
  // useEffect(() => console.log(`Editing: ${editing}`, [editing]));

  const [creating, setCreating] = useState(false);

  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => console.log(currentUser), [currentUser]);

  // Components
  function NoUsers() {
    return (
      <NoUserSection
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
      </NoUserSection>
    );
  }

  function AddDeveloper() {
    return (
      <AddADeveloper className="add-a-developer-box">
        <p
          className="linear-pink-purple"
          style={{
            fontSize: '4em',
          }}
        >
          <PersonAddOutline
            className="person-add-outline"
            size=""
            onClick={() => setCreating(true)}
            // onMouseEnter={(e) => (e.target.style.color = '#E900FF')}
            // onMouseLeave={(e) => (e.target.style.color = 'pink')}
          />
        </p>
      </AddADeveloper>
    );
  }

  function AddDeveloperWhenWeHaveDeveloper() {
    return (
      <WhenWeHaveADeveloper>
        <PersonAddOutline
          className="WhenWeHaveADeveloper"
          size=""
          onClick={() => setCreating(true)}
        />
      </WhenWeHaveADeveloper>
    );
  }

  function findUser(id) {
    const user = allUsers.filter((user) => user.id === id);
    return user ? user : 'User not found.';
  }

  // Functions ******

  // Update user
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

  // Create user
  function cUser(id, payload) {
    console.log('cUser', payload);

    setUser((users) => {
      return [...users, payload];
    });
  }

  return (
    <CardMain
      className="card-main"
      style={{
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '160px auto',
        fontFamily: 'Barlow Condensed',
        height: '65vh',
        position: 'relative',
        top: '100px',
      }}
    >
      <section
        className="weHaveADevSection"
        style={{
          position: 'fixed',
          width: '80%',
          height: 50,
          top: 115,
        }}
      >
        {allUsers.length > 0 && <AddDeveloperWhenWeHaveDeveloper />}
      </section>

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
        <CreateUser
          u={currentUser}
          setCreating={setCreating}
          creating={creating}
          createUser={cUser}
        />
      )}

      <CardContainer
        className="card-container"
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        {/* Render users/devs */}
        {allUsers.length === 0 ? (
          <NoUsers />
        ) : (
          allUsers.map((user) => {
            return (
              <User
                key={user.id}
                u={user}
                setEditing={setEditing}
                allUsers={allUsers}
                setUser={setUser}
                setCurrentUser={setCurrentUser}
              />
            );
          })
        )}
      </CardContainer>
    </CardMain>
  );
}

export default Users;
