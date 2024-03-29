import { Switch, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Home from './Pages/Home';
import Footer from './components/Footer';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact';
// import About from './Pages/About';
import Dropdown from './components/Dropdown';
import NavBar from './components/NavBar';
// import Album from './components/Album';
// import Card from './components/Card';

function App() {
  const [isOpen, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!isOpen);
  };
  return (
    <div className='w-full overflow-hidden '>
      <NavBar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Gallery" component={Gallery} />
        {/* <Route path="/Gallery/Card" component={Card} /> */}
        {/* <Route path="/About" component={About} /> */}
        <Route path="/Contact" component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
