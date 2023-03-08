import styled from '@emotion/styled';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';

const Container = styled.div`
  margin: 0 auto;
  padding: 60px 15px;
`;
export const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={null}>
        <Container>
          <Outlet />
        </Container>
      </Suspense>
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
};
