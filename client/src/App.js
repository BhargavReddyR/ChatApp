import React from 'react';
import {Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ChatPage from './components/ChatPage';

const App = () => {
  return (
    <Routes>  
        <Route path='' element={<HomePage />}></Route>
        <Route path='/Chat' element={<ChatPage />}></Route>      
    </Routes>
  );
};

export default App;

