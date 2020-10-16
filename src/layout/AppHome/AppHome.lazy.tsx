import React, { lazy, Suspense } from 'react';

const LazyAppHome = lazy(() => import('./AppHome'));

const AppHome = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyAppHome {...props} />
  </Suspense>
);

export default AppHome;
