import React from 'react';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home'
import Private from './pages/Private'

function App() {
  return (
    <div className="App">
     <header>
     <h1>hello</h1>
      <nav>
       <Link to='/' >Home</Link>
       <Link to='/private'>Login</Link>
      </nav>
     </header>
     {/*quebra tematica de linha*/}
     <hr />
     <Routes>
       <Route path="/" element={<Home />}/>
       <Route path="/private" element={<Private />}/>
     </Routes>
     </div>
  );
}

export default App;
