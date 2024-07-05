import React, { Suspense } from 'react';
const SearchForm = React.lazy(() => import('../components/SearchForm'));

const Home = () => (
  <div>
    <h1>Welcome to Finedconnect</h1>
    <Suspense fallback={<div>Loading...</div>}>
      <SearchForm />
    </Suspense>
  </div>
);