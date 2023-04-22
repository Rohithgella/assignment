import './App.css'
import Navbar from "./components/navbar/navbar"
import Intro from "./components/intro/intro"
import Service from './components/services/Service';
import Experience from './components/Experience/Experience';
import Works from './components/works/Works';
import Portfolio from './components/Portfolio/Portfolio'
import Testmonial from './components/Testmonial/Testmonial';
import Contact from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import { useContext } from 'react';
import { themeContext } from './Context';
function App() {
  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;
  return (
    <div className="App"
      style={{background:darkMode? 'black':'',color:darkMode?'white':''}}
    >
       <Navbar/>
       <Intro/>
       <Service/>
       <Experience/>
       <Works/>
       <Portfolio/>
       <Testmonial/>
       <Contact/>
       <Footer/>
    </div>
  );
}

export default App;
