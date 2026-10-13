import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import AddProduct from './Pages/AddProduct';
import EditProduct from './Pages/EditProduct';
const App = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Signup/>}>Signup</Route>
        <Route path='/login' element={<Login/>}>Login</Route>
        <Route path='/dashboard' element={<Dashboard/>}>Dashboard</Route>
        <Route path='/addproduct' element={<AddProduct/>}>AddProduct</Route>
        <Route path='/edit/:id' element={<EditProduct/>}>Edit Product</Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
