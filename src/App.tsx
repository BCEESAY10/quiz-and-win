import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useStore } from './store';
import Login from './components/Login';
import Register from './components/Register';
import Game from './components/Game';
import Layout from './components/Layout';

function App() {
  const isAuthenticated = useStore((state) => state.isAuthenticated);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={isAuthenticated ? <Navigate to="/game" /> : <Login />} />
          <Route path="register" element={<Register />} />
          <Route
            path="game"
            element={isAuthenticated ? <Game /> : <Navigate to="/" />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;