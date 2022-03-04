import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export function useFunctions() {
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

  useEffect(() => {}, [allUsers]);

  this.allUsers = allUsers;
  this.setUser = setUser;

  this.findUser = function findUser(id) {
    console.log('FIND USER', id, allUsers);
    const user = allUsers.filter((user) => user.id === id);

    if (user) {
      console.log('user', user);
      return user;
    } else {
      return 'User not found.';
    }
  };

  this.updateUser = function updateUser(id) {
    console.log('UPDATE USER');
    let _user = findUser(id);
    let user = _user[0];
    console.log(user);
  };
}
