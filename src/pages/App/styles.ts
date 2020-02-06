import styled from 'styled-components';
import { colors } from '../../styles';

const Container = styled.div`
  min-height: 100vh;
  background-color: ${colors.whiteSmoke};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Navbar = styled.div`
  background-color: ${colors.green};
  min-height: 127px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const Content = styled.div`
  position: absolute;
  display: flex;
  top: 2%;
  bottom: 2%;
  left: 12%;
  right: 12%;
  background-color: ${colors.smoke};
  -webkit-box-shadow: 10px 10px 34px -32px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 34px -32px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 34px -32px rgba(0, 0, 0, 0.75);

  @media (max-width: 1440px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

export { Container, Navbar, Content };
