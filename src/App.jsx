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

function App() {
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
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
