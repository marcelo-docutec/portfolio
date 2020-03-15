import React from 'react';
import Button from 'components/commons/Button';
import Navbar from 'components/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div>Home</div>
      <Button href="/as" Button color="primary" variant="contained">
        See projects
      </Button>
    </div>
  );
};

export default Home;
