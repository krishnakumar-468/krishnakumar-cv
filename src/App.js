import React from 'react';
import './App.css';
import FooterHome from './Layout/FooterHome/FooterHome';
import Navbar from './Layout/Navbar/Navbar';

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <FooterHome></FooterHome>
    </React.Fragment>
  );
}

export default App;
