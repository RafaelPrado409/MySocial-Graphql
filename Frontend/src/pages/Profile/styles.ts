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
  
  .arrow-left {
    background: blueviolet;
    border: 5px;
    outline: none;
    box-shadow: inset 0 0 1px 1px lightgrey;
    border-radius: 5px;
    :hover {
      cursor: pointer;
      transition: 90ms;
      border-radius: 50%;
    }
  }

  @media(max-width: 900px) {
    p {
    font: 20px 'Nunito', sans-serif;
    font-weight: bold;
    color: black;
    margin-left: -10px;
  }
  
  .arrow-left {
    background: blueviolet;
    border: 5px;
    outline: none;
    box-shadow: inset 0 0 1px 1px lightgrey;
    :hover {
      cursor: pointer;
      transition: 90ms;
      border-radius: 40%;
    }
  }

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
    margin-top: 18px;
    margin-left: -30px;
    list-style: none;
    li {
      padding: 1px 0;
      margin-top: 30px;
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

@media(max-width: 900px) {
  margin: 0 auto;
  display: flex;
  align-items: center;
  margin-left: -10px;

img {
  max-width: 120px;
  margin-top: 40px;
  border-radius: 20px;
}

ul {
  margin-top: 22px;
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
      margin-top: 20px;
      color: black;
      white-space: nowrap;
      font: 15px 'Roboto', sans-serif;
    }
  }
}
}
`;
export const FriendContainer = styled.div`
  padding: 0 100px;

  .rec.rec-arrow {
    border-radius: 0;
  }

  .rec.rec-arrow:hover {
      border-radius: 50%;
  }

  .rec.rec-arrow:disabled {
      visibility: hidden;
  }

  .rec-carousel-item:focus {
      outline: none;
      box-shadow: inset 0 0 1px 1px lightgrey;
  }

  @media(max-width: 900px) {
    padding: 0 30px;

  .rec.rec-arrow {
    border-radius: 0;
  }

  .rec.rec-arrow:hover {
      border-radius: 50%;
  }

  .rec.rec-arrow:disabled {
      visibility: hidden;
  }

  .rec-carousel-item:focus {
      outline: none;
      box-shadow: inset 0 0 1px 1px lightgrey;
  }
  }
`;
