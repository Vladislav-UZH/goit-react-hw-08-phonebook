import styled from '@emotion/styled';
import React from 'react';
import ContentLoader from 'react-content-loader';
const Container = styled.main`
  display: flex;
  justify-content: center;
`;
const SkeletonLoader = props => (
  <Container>
    <ContentLoader
      speed={2}
      width={600}
      height={500}
      viewBox="0 0 600 500"
      backgroundColor="#383942"
      foregroundColor="#808f9d"
      {...props}
    >
      <rect x="5" y="175" rx="2" ry="2" width="250" height="22" />
      <rect x="5" y="208" rx="2" ry="2" width="211" height="33" />
      <rect x="225" y="208" rx="2" ry="2" width="211" height="33" />
      <rect x="5" y="256" rx="2" ry="2" width="250" height="16" />
      <rect x="3" y="281" rx="2" ry="2" width="211" height="32" />
      <rect x="3" y="319" rx="2" ry="2" width="593" height="107" />
      <rect x="502" y="216" rx="2" ry="2" width="97" height="36" />
    </ContentLoader>
  </Container>
);

export default SkeletonLoader;
