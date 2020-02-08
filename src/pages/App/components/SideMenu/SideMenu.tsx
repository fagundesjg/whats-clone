import React from 'react';

import { ISideMenu } from './types';
import { withSideMenu } from './withSideMenu';
import { Container, Header, Avatar, Search, HeaderActions } from './styles';
import { MdMoreVert, MdChat } from 'react-icons/md';

const SideMenuComponent = (props: ISideMenu) => {
  return (
    <Container>
      <Header>
        <Avatar />
        <HeaderActions>
          <MdChat size={22} />
          <MdMoreVert size={22} />
        </HeaderActions>
      </Header>
      <Search>
        <input name="search" placeholder="Procurar ou começar uma nova conversa" />
      </Search>
    </Container>
  );
};

const SideMenu = withSideMenu(SideMenuComponent);

export { SideMenu };
