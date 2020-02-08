import React from 'react';

import { Container, Logo, Title, Subtitle } from './styles';

const Welcome = () => {
  return (
    <Container>
      <Logo />
      <Title>Mantenha seu celular conectado</Title>
      <Subtitle>
        O WhatsApp conecta ao seu telefone para sincronizar suas mensagens. Para reduzir o uso de dados, conecte seu
        telefone a uma rede Wi-Fi.
      </Subtitle>
    </Container>
  );
};

export { Welcome };
