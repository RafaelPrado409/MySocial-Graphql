import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import  Carousel  from 'react-elastic-carousel';

import { useQuery, } from '@apollo/client';
import { MY_QUERY } from '../../services/Queries';

import Header from '../../components/Header';
import Card from '../../components/Card';

import { Container } from '../Home/styles';

type User = {
  _id: string;
  picture: string;
  age: number;
  eyeColor: string;
  name: string;
  company: string;
  email: string;
}

type List = {
  list: User[];
}

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
  { width: 850, itemsToShow: 3 },
  { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
  { width: 1450, itemsToShow: 5 },
  { width: 1750, itemsToShow: 6 },
];


function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const { loading, error, data } = useQuery<List>(MY_QUERY, {
    fetchPolicy: 'cache-and-network'
  });
  const list = data?.list;
  
  useEffect(() => {
    if (data) {
      setUsers(list!);
    }
  }, [data, list]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  return (
    <div>
      <Header />
      <Container>
        <Carousel isRTL={false} breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={3000}>{
          users.map((user: User) => (
            <Link to={`/profile/${user._id}`}>
              <Card
                name={user.name}
                age={user.age}
                eyeColor={user.eyeColor}
                company={user.company}
                email={user.email}
                picture={user.picture}
                />
            </Link>
          ))}
          </Carousel>
        </Container>
    </div>
  )
}

export default Home;