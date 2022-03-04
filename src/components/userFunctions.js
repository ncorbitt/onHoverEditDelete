// import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export function UserFunctions() {
  this.allUsers = [
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
  ];
}

UserFunctions.prototype.findUser = function (id) {
  console.log('FIND USER');
  const user = this.allUsers.filter((user) => user.id === id);
  if (user) {
    console.log(user);

    return user;
  } else {
    return 'User not found.';
  }
};

UserFunctions.prototype.updateUser = function (id) {
  console.log('UPDATE USER', id, this.allUsers, this.findUser(id));
  let _user = this.findUser(id);
  let user = _user[0];
  console.log(user);
};
