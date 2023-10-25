import React from 'react';
import NavbarDiv from './Components/Navbar';
import HeaderDiv from './Components/Header';
import MainDiv from './Components/MainContent';
import FormDiv from './Components/FormField';
import FooterDiv from './Components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <NavbarDiv></NavbarDiv>
      <HeaderDiv></HeaderDiv>
      <MainDiv></MainDiv>
      <FormDiv></FormDiv>
      <FooterDiv></FooterDiv>
    </div>
  );
}

export default App;
