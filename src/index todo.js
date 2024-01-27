import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Route,Routes,BrowserRouter} from 'react-router-dom' 
import Login from './Component/frontpage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <App />
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </BrowserRouter>
  </div>

);


