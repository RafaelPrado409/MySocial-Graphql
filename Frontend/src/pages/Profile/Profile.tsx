//import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import Carousel from 'react-elastic-carousel';
import { FiChevronLeft } from "react-icons/fi";

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

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
  { width: 850, itemsToShow: 3 },
  { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
  { width: 1450, itemsToShow: 5 },
  { width: 1750, itemsToShow: 6 },
];

function Profile() {
  const [profile, setProfile] = useState<User>();
  const params = useParams<UserParams>();
  const { id } = params;
  
  const {loading, error, data } = useQuery(MY_USER_QUERY, {
    variables: { id }, 
    fetchPolicy: 'cache-and-network'
  });

  const user: User = data?.user;
  
  useEffect(() => {
    if (data) {
      setProfile(user);
    }
  }, [data, user]);
    
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;
  
  return (
    <div>
      <Header />
      <Container>
        <Content>
        <img src={profile?.picture} alt="User" />
        <ul>
          <li>
            <span>Name: {profile?.name}</span>
          </li>
          <li>
            <span>Age: {profile?.age}</span>
          </li>
          <li>
            <span>Email: {profile?.email}</span>
          </li>
          </ul>
        </Content>
        <p>Friends: </p>
        <FriendContainer>
          <Carousel isRTL={false} breakPoints={breakPoints}>{
            profile?.friends.map((friend: Friend) => (
              <Card
                name={friend.name}
                age={friend.age}
                eyeColor={friend.eyeColor}
                company={friend.company}
                email={friend.email}
                picture={friend.picture}
                />
             ))}
          </Carousel>
        </FriendContainer>
        <Link to="/">
          <button className='arrow-left' type='button'>
            <FiChevronLeft size={40} color="white" />
          </button>
        </Link>
      </Container>
    </div>
  )
}

export default Profile;