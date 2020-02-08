import React from 'react';

import { Container, Navbar, Content } from './styles';
import { SideMenu, Welcome } from './components';

const App = () => {
  return (
    <Container>
      <Navbar />
      <Content>
        <SideMenu />
        <Welcome />
      </Content>
    </Container>
  );
};

export { App };
