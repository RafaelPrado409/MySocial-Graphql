import styled from 'styled-components';

export const Container = styled.div `
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
`;

export const Content = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 280px;
  height: 420px;
  margin: 50px auto;
  background: blueviolet;
  border-radius: 40px;
`;

export const InfoList = styled.ul`
  list-style: none;

  img {
    width: 280px;
    height: 280px;
    border-radius: 40px;
    margin-right: 40px;
    margin-top: -30px;
    border-end-end-radius: 0px;
    border-end-start-radius: 0px;
  }
  
  li {
    display: flex;
    justify-content: space-between;
    margin-left: 10px;
    span {
      margin-top: 5px;
      color: #fff;
      white-space: nowrap;
      font: 16px 'Roboto', sans-serif;
    }
  }
`;