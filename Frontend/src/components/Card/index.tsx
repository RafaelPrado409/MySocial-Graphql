import React from 'react';
import './styles';
import { Container, Content, InfoList } from './styles';

interface UserProps {
  name: string;
  age: number;
  eyeColor: string;
  company: string;
  email: string;
  picture: string;
}

const Card: React.FC<UserProps> = (props) => {
  return (
    <Container>
      <Content>
        <InfoList>
          <img src={props.picture} />
          <li>
            <span>Name: {props.name}</span>
          </li>
          <li>
            <span>Age: {props.age}</span>
          </li>
          <li>
            <span>EyeColor: {props.eyeColor}</span>
          </li>
          <li>
            <span>Company: {props.company}</span>
          </li>
          <li>
            <span>Email: {props.email}</span>
          </li>
        </InfoList>
      </Content>
    </Container>
  );
};

export default Card;