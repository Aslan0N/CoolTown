import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import About from '../Pages/About/About'
import Products from '../Pages/Products/Products'
import Pages from '../Pages/Pages/Pages'
import Gallery from '../Pages/Gallery/Gallery'
import Contact from '../Pages/Contact/Contact'
import Header from '../Common/Header'
import Blog from '../Pages/Blog/Blog'

const AppRouter = () => {
  return (
    <>
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/products' element={<Products/>}/>
                <Route path='/pages' element={<Pages/>}/>
                <Route path='/blog' element={<Blog/>}/>
                <Route path='/gallery' element={<Gallery/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default AppRouter