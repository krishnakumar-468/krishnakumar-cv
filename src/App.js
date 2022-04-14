import React from 'react';
import './App.css';
import FooterHome from './Layout/FooterHome/FooterHome';
import Navbar from './Layout/Navbar/Navbar';
import Home from './Pages/Home/Home'

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Home></Home>
      <FooterHome></FooterHome>
    </React.Fragment>
  );
}

export default App;
