import React from 'react';
import Button from 'components/atoms/Button';

const Home = () => {
  return (
    <div>
      <div>Home</div>
      <Button href="/as" Button color="primary" variant="contained">
        See projects
      </Button>
    </div>
  );
};

export default Home;
