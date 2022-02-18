import React, { useContext } from 'react';
import './App.css';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home'
import Private from './pages/Private'
import { RequireAuth } from './contexts/auth/RequireAuth';
import { AuthContext } from './contexts/auth/AuthContext';

function App() {
  const auth = useContext(AuthContext)
  const navigate = useNavigate()
  const handleLogout = async () =>{
    await auth.signout()
    navigate('/')
    window.location.href = window.location.href
  }
  return (
    <div className="App">
     <header>
     <h1>LogSystem</h1>
      <nav>
       <Link to='/' >Home</Link>
       <Link to='/private'>Login</Link>
       {auth.user && <button onClick={handleLogout}>Sair</button>}
      </nav>
     </header>
     {/*quebra tematica de linha*/}
     <hr />
     <Routes>
       <Route path="/" element={<Home />}/>
       <Route path="/private" element={<RequireAuth><Private/></RequireAuth>}/>
     </Routes>
     </div>
  );
}

export default App;
