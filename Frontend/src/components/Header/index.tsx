import React, { InputHTMLAttributes, useState } from 'react';
import './styles';
import { Container, Content } from './styles';
import { FiSearch } from 'react-icons/fi'

// interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
//   searchName: string;
// }

const Header: React.FC = () => {
  //const [searchName, setName] = useState('');

  return (
    <Container>
      <Content>
        <p>MySocial</p>
        <input
          // {...name}
          type="text"
          placeholder='Search'
          //value={searchName}
          // onChange = {(e) => {
          //   setName(e.target.value)
          // }}
        
        />
        <button type='button'>
          <FiSearch />
        </button>
      </Content>
    </Container>
  );
};

export default Header;