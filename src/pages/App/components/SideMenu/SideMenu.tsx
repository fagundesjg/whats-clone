import React from 'react';

import { ISideMenu } from './types';
import { withSideMenu } from './withSideMenu';
import { Container, Header, Avatar } from './styles';
import { MdMoreVert } from 'react-icons/md';

const SideMenuComponent = (props: ISideMenu) => {
  return (
    <Container>
      <Header>
        <Avatar />
        <MdMoreVert size={22} />
      </Header>
    </Container>
  );
};

const SideMenu = withSideMenu(SideMenuComponent);

export { SideMenu };
