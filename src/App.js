import Navbar from './components/NavBar';
import { Switch, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Home from './Pages/Home';
import Footer from './components/Footer';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Dropdown from './components/Dropdown';

function App() {
  const [isOpen, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Gallery" component={Gallery} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
