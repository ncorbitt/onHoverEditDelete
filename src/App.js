import React, { useState, useEffect } from 'react';
import './style.css';
import styled from 'styled-components';

import Header from './components/Header/header.jsx';
import Users from './components/Users/users.jsx';

const AppContainer = styled.section``;

export default function App() {
  return (
    <AppContainer className="app">
      <Header title="My Developers" />
      <Users />
    </AppContainer>
  );
}
