import React from 'react';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import FadeIn from 'react-fade-in';
import AppBar from './AppBar';
import Demo from './Demo';
import Templates from './Templates';
import Footer from './Footer';

function App() {
  return (
    <Container maxWidth="md">
      <FadeIn>
        <AppBar />
        <Divider />
        <div id="demo" />
        <Demo />
        <Divider />
        <Templates />
        <Divider />
        <Footer />
      </FadeIn>
    </Container>
  );
}

export default App;
