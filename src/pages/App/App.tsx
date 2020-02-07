import React from 'react';

import { Container, Navbar, Content } from './styles';
import { Chat, SideMenu } from './components';

const App = () => {
  return (
    <Container>
      <Navbar />
      <Content>
        <SideMenu />
        <Chat />
      </Content>
    </Container>
  );
};

export { App };
