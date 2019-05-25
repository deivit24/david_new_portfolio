import React from 'react';
import Nav from './Nav';
import Hello from '../src/Components/Hello/Hello';
import Bio from '../src/Components/Bio/Bio';
import Know from '../src/Components/Knowledge/Know';
import Work from '../src/Components/Work/Work';
import '../src/App.css/main.css';

function App() {
  return (
    <div>
      <Nav />
      <Hello />
      <Bio />
      <Know />
      <Work />
    </div>
  );
}

export default App;
