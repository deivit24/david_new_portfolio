import React from 'react';
import Nav from './Nav';
import Hello from '../src/Components/Hello/Hello';
import Bio from '../src/Components/Bio/Bio';
import Know from '../src/Components/Knowledge/Know';
import Work from '../src/Components/Work/Work';
import Contact from '../src/Components/Contact/Contact';
import '../src/App.css/main.css';

function App() {
  return (
    <div>
      <Nav />
      <Hello />
      <Bio />
      <Know />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
