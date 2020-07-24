import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background-image: url('/images/main.jpg');
  background-size: cover;
  background-position: center center;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 4rem;
  color: #000000;
`;

export default () => {
  return (
    <Container>
      <Title>환경 모니터링 App</Title>
    </Container>
  );
};
