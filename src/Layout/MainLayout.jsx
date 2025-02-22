import React from 'react'
import Products from '../pages/admin/Products'
import ProductForm from '../pages/admin/ProductForm'
import SharedLayout from '../SharedLayout/SharedLayout'
import { Home } from '../pages/user/Home'
import ProductDetails from '../pages/admin/ProductDetails'
import NotFound from '../pages/admin/NotFound'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegisterPage from '../components/user/Register'
import Login from '../components/user/Login'
import AllProducts from '../pages/user/AllProducts'
import Cart from '../pages/user/Cart'
import UserProductDetails from '../pages/user/ProductDetails'
import OrderShipped from '../pages/user/OrderShipped'
import AboutUs from '../pages/user/AboutUs'
import ContactUs from '../pages/user/ContactUs'

export default function MainLayout() {

  return (
    <>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<SharedLayout />} >
              <Route index element={<Home />} />
              <Route  path='products' element={<Products />} />
              <Route path='products/:id' element={<ProductDetails />} />
              <Route path='products/:id/edit' element={<ProductForm />} />
              <Route path='*' element={<NotFound /> } />

              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home/all products" element={<AllProducts />} />
              <Route path="/shopsizzle/cart" element={<Cart />} />
              <Route path="/shopsizzle/shipped" element={<OrderShipped />} />
              <Route path="/shopsizzle/about us" element={<AboutUs />} />
              <Route path="/shopsizzle/contact us" element={<ContactUs />} />
              <Route path="/shopsizzle/products/:id" element={<UserProductDetails />} />
              <Route path='/shopsizzle/*' element={<NotFound /> } />


              </Route>
            </Routes>
          </BrowserRouter>

          
    </>
  )
    
}
