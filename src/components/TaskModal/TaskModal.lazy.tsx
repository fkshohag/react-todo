import React, { lazy, Suspense } from 'react';

const LazyTaskModal = lazy(() => import('./TaskModal'));

const TaskModal = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyTaskModal {...props} />
  </Suspense>
);

export default TaskModal;
