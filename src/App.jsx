import React from 'react';
import Router from './components/Router';
import NavBar from './components/NavBar';
import { useLocation } from 'react-router-dom';

const App = () => {
  const location = useLocation();

  // Check if current route is `/video`
  const hideNavBar = location.pathname === "/video";

  return (
    <div>
      {!hideNavBar && <NavBar />}
      <Router />
    </div>
  );
};

export default App;
