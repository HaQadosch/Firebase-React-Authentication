import React from 'react';
import { authApp } from '../base';

export const Home = () => {
  return (
    <main>
      <h1>Home</h1>
      <button onClick={() => authApp.auth().signOut()}>Sign Out</button>
    </main>
  );
};

export default Home;
