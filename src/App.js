// import React, { useState } from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import Login from './Login';
// import Signup from './signup';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Signup from './signup';
// import Apptodo from './App todo';

// function App() {
//   var [users, setUsers] = useState([
//     {
//       uname: 'yosuva',
//       upswd: '123'
//     }
//   ])
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<Login users={users} />}></Route>
//           <Route path='/signup' element={<Signup />}></Route>
//           <Route path='/success' element={<Success />}></Route>
//           <Route path='/apptodo' element={<Apptodo></Apptodo>}></Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <App />
// );