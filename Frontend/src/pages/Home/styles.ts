import styled from 'styled-components';

export const Container = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  padding: 0 30px;
  margin-top: 10rem;

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
`;