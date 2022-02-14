import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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

function Home() {
  const { loading, error, data } = useQuery<List>(MY_QUERY, {
    fetchPolicy: 'cache-and-network'
  });
  const [users, setUsers] = useState<User[]>([]);
  const { list } = data!;
  
  useEffect(() => {
    if (data) {
      setUsers(list);
    }
  }, [data, list]);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  return (
    <div>
      <Header />
      <Container> {
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
      </Container>
    </div>
  )
}

export default Home;