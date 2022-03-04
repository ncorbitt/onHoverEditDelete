import React, { useState, useEffect } from 'react';

import Edit from '../Edit/edit.jsx';

import { PersonNote } from '@styled-icons/fluentui-system-filled/PersonNote';
import { PersonDelete } from '@styled-icons/fluentui-system-filled/PersonDelete';

import { PersonAddOutline } from '@styled-icons/evaicons-outline/PersonAddOutline';
import { PersonRemoveOutline } from '@styled-icons/evaicons-outline/PersonRemoveOutline';

import {
  CardEdit,
  UserCardButtonsContainer,
  UserCardButtons,
  UserCard,
  CardEdit,
  CardDelete,
} from './userComponents.js';

const colors = {
  black: '#000000',
  purple: '#5800FF',
  pink: '#E900FF',
  yellow: '#FFC600',
};

function User({ u, setEditing, allUsers, setCurrentUser }) {
  const hoveringStyles = {
    textShadow: `3px 3px 10px ${colors.pink}`,
  };

  // const [editing, setEditing] = useState(false);

  const [hovering, isHovering] = useState(false);
  useEffect(() => {}, [hovering]);

  function setHovering(value, u) {
    value === true ? isHovering(true) : isHovering(false);
  }

  function removeUser(id) {
    allUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  }

  function editUser(id) {
    let _user = allUsers.filter((user) => user.id === id);
    let user = _user[0];
    setEditing(true);
    setCurrentUser(user);
  }

  const CardEditFun = ({ name, user }) => {
    return (
      <CardEdit id="card-edit" className="card-button" title="edit">
        <PersonAddOutline
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
        <PersonRemoveOutline
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
        hovering
          ? { backgroundColor: colors.purple, color: 'white', zIndex: '1' }
          : {}
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

export default User;
