import React from 'react';
import './App.css';
import Header from './components/header/header.component';
import Main from './components/main/main.component';
import { Container } from '@material-ui/core';

function App() {
  return (
    <Container>
      <Header />
      <Main />
    </Container>
  );
}

export default App;
