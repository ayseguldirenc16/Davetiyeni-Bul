import './App.css';
import Footer from './body/Footer';
import Head from './body/Head';
import Header from './body/Header';
import ProductOfTheMonth from './body/ProductOfTheMonth';
import ProductSelectionTable from './body/ProductSelectionTable';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SSS from './body/pages/SSS';
import Product from './body/pages/Product';
import About from './body/pages/About';
import Content from './body/pages/Content';
import InvitationFonts from './body/pages/InvitationFonts';
import InvitationWords from './body/pages/InvitationWords';

import OrderTracking from './body/pages/OrderTracking';
import Login from './body/pages/Login';
import Uyelik from './body/pages/Uyelik';
// import { useEffect } from 'react';

function App() {
//   useEffect(() => {
//     alert("Sayfamıza hoş geldiniz!");
// }, []);
  return (
    <>
      <BrowserRouter>
        <Head />
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <ProductOfTheMonth />
              <ProductSelectionTable />
            </>
          } />
          <Route path="/About" element={<About />} />
          <Route path="/Campaigns" element={<Product />} />
          <Route path="/Content" element={<Content />} />
          <Route path="/SSS" element={<SSS />} />
          <Route path="/invitationFonts" element={<InvitationFonts />} />
          <Route path="/invitationWords" element={<InvitationWords />} />
          <Route path="/OrderTracking" element={<OrderTracking/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Uyelik" element={<Uyelik/>} />
        
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
