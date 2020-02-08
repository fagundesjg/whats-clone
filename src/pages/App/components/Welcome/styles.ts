import styled from 'styled-components';

import { images } from '../../../../assets';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 9;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;

  & > :not(:last-child) {
    margin-bottom: 20px;
  }
`;

const Logo = styled.img.attrs({
  src: images.connect,
})`
  width: 20vw;
  height: 20vw;
`;

const Title = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 2em;
  color: #969696;
`;

const Subtitle = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1em;
  line-height: 1.4em;
  color: #969696;
  margin: 0 10vw;
  text-align: center;
`;

export { Container, Logo, Title, Subtitle };
