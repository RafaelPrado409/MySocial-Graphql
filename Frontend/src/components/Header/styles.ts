import styled from 'styled-components';

export const Container = styled.div `
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@800&display=swap');
  background: blueviolet;
  padding: 0 30px;
  border-radius: 15px;
`;

export const Content = styled.div `
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  margin-left: -10px;

  input {
    width: 27rem;
    height: 2.5rem;
    border-radius: 20px;
    margin-left: 30px;
    padding-left: 10px;
    border: 1px solid white;

  }

  button {
    background: transparent;
    border: 0;
    transition: filter 0.2s;
    display: flex;
    justify-content: center;
    margin-left: -35px;
    :hover {
            cursor: pointer;
        }
  }
  
  p {
    font-size: 40px;
    font: 35px 'Nunito', sans-serif;
    font-weight: bold;
    color: white;
  }

  nav {
    display: flex;
    align-items: center;
    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }
    a {
      font-weight: bold;
      color: #7159c1;
    }
  }
  aside {
    display: flex;
    align-items: center;
  }
`;