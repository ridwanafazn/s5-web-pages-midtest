import logo from './logo.png';
import './App.css';
import NavbarCmp from './Components/Navbar';
import MainComp from './Components/MainContent';
import FooterCmp from './Components/Footer';

function App() {
  return (
    <div>
      <NavbarCmp></NavbarCmp>
      <MainComp></MainComp>
      <FooterCmp></FooterCmp>
    </div>
  );
}

export default App;
