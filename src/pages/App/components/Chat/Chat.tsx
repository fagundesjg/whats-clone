import React from 'react';

import { Container } from './styles';
import { withChat } from './withChat';
import { IChat } from './types';

const ChatComponent = (props: IChat) => {
  return <Container></Container>;
};

const Chat = withChat(ChatComponent);

export { Chat };
