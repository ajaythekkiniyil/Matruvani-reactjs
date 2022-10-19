import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import BlogContents from './components/Blogs/BlogContents';
import AllComponents from './components/AllComponents/AllComponents';
import Cart from './components/Cart/Cart';
import Error from './components/Error/Error'
import OrderSummary from './components/OrderSummary/OrderSummary';
import PaymentStatus from './components/PaymentStatus/PaymentStatus'

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<AllComponents />} />
            <Route path="/blogs/:slug" element={<BlogContents />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order-summary" element={<OrderSummary />} />
            <Route path="/payment-status" element={<PaymentStatus />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;