import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import { Toaster } from 'react-hot-toast'; 

function App() {
  return (
    <BrowserRouter>
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 2000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />
      <Routes>
          <Route path="/" element={<LandingPage />} />
        <Route path="/tasks" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;