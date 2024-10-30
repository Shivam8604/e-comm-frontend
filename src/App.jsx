/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './components/Navbar'
import Product from './components/Product';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import SearchItems from './components/SearchItems';
import Cart from './components/Cart';
import items from './components/Data';
import { useState } from 'react';


const App = () => {

  const [data, setData] = useState([...items])

  return (
    <div>
      <BrowserRouter>
        <Navbar setData={setData} />
        <Routes>
          <Route path='/' element={<Product items={data} />}></Route>
          <Route path='/product/:id' element={<ProductDetail/>}/>
          <Route path='/search/:term' element={<SearchItems/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
