//import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { useQuery } from '@apollo/client';
import { MY_USER_QUERY } from '../../services/Queries';

import Header from '../../components/Header';
import Card from '../../components/Card';

import { Container, Content, FriendContainer } from './styles'

type User = {
  picture: string;
  age: number;
  eyeColor: string;
  name: string;
  company: string;
  email: string;
  friends: Array<{
    picture: string;
    age: number;
    eyeColor: string;
    name: string;
    company: string;
    email: string;
  }>;
}

type Friend = {
  picture: string;
  age: number;
  eyeColor: string;
  name: string;
  company: string;
  email: string;
}

type UserParams = {
  id: string;
}

function Profile() {
  const params = useParams<UserParams>();
  const { id } = params;
  
  const { data } = useQuery(MY_USER_QUERY, {
    variables: { id }, 
    fetchPolicy: 'cache-and-network'
  });
  const { user } = data;
  const [profile, setProfile] = useState<User>();
  
  useEffect(() => {
    if (data) {
      setProfile(user);
    }
  }, [user, data]);
  
  return (
    <div>
      <Header />
      <Container>
        <Content>
        <img src={profile!.picture} alt="" />
        <ul>
          <li>
            <span>Name: {profile!.name}</span>
          </li>
          <li>
            <span>Age: {profile!.age}</span>
          </li>
          <li>
            <span>Email: {profile!.email}</span>
          </li>
          </ul>
        </Content>
        <p>Friends: </p>
        <FriendContainer> {
          profile!.friends.map((friend: Friend) => (
            <Card
              name={friend.name}
              age={friend.age}
              eyeColor={friend.eyeColor}
              company={friend.company}
              email={friend.email}
              picture={friend.picture}
            />
          ))
        }
        </FriendContainer>
      </Container>
    </div>
  )
}

export default Profile;