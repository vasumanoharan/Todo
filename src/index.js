import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './Login';
import Signup from './signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Success from './sucess';
import Apptodo from './App todo';

function App(prop) {
  var [users, setUsers] = useState([
    {
      uname: 'vasu',
      upswd: '123'
    }
  ])
  return (
    <div>
      <BrowserRouter>
      <h1>welcome</h1>
        <Routes>
          <Route path='/' element={<Login users={users} setUsers={setUsers} />}></Route>
          <Route path='/signup' element={<Signup users={users} setUsers={setUsers}  />}></Route>
          <Route path='/success' element={<Success />}></Route>
          <Route path='/apptodo' element={<Apptodo></Apptodo>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);