import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import UserPage from './components/UserPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<LoginPage />}></Route>
          <Route path='userDetails' element={<UserPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
