import styled from 'styled-components';

export const Container = styled.div `
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@800&display=swap');
padding: 0 30px;

 p {
    font: 40px 'Nunito', sans-serif;
    font-weight: bold;
    color: black;
    margin-left: -10px;
  }
`;

export const Content = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  margin-left: -10px;

img {
  max-width: 150px;
  margin-top: 40px;
  border-radius: 20px;
}

ul {
  margin-top: -20px;
  margin-left: -30px;
  list-style: none;
  li {
    padding: 1px 0;
    margin-top: 1px;
    margin-right: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    span {
      color: black;
      white-space: nowrap;
      font: 18px 'Roboto', sans-serif;
    }
  }
}
`;
export const FriendContainer = styled.div`
display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
`;
