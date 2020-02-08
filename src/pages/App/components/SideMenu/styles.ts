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

const HeaderActions = styled.div`
  display: flex;
  & > * {
    cursor: pointer;
    &:hover {
      fill: ${colors.green};
    }
  }
  & > :not(:last-child) {
    margin: 0 10px;
  }
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
`;

const Search = styled.div`
  height: 50px;
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  input {
    flex: 1;
    height: 35px;
    border-radius: 20px;
    border: none;
    padding: 0 20px;
    font-size: 14px;
  }
`;

export { Container, Header, Avatar, Search, HeaderActions };
