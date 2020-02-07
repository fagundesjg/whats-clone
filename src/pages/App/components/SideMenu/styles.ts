import styled from 'styled-components';

import { sizes, colors } from '../../../../styles';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border-right: 1px solid #ccc;
  background-color: ${colors.white};
`;

const Header = styled.div`
  height: ${sizes.header}px;
  background-color: ${colors.smoke};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
`;

export { Container, Header, Avatar };
