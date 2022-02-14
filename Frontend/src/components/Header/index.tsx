import React from 'react';
import './styles';
import { Container, Content } from './styles';


const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <p>MySocial</p>
        <input type="text" placeholder='search'/>
      </Content>
    </Container>
  );
};

export default Header;