import { Statistics } from 'components/Statistics/Statistics';
import styled from '@emotion/styled';
import { useAuth } from 'hooks';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  padding: 60px 0;
  background-color: #32343b;
`;
const Title = styled.h3`
  font-size: 32px;
  font-style: italic;
`;
const Home = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      {isLoggedIn ? (
        <Statistics />
      ) : (
        <Container>
          <Title>Welcome, my good Wayfarer 👋</Title>
          <p>Register or Login to see your contacts.</p>
        </Container>
      )}
    </>
  );
};
export default Home;
