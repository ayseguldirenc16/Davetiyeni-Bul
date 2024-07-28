
import './App.css'
import Footer from './body/Footer'
import Head from './body/Head'
import Header from './body/Header'
import ProductOfTheMonth from './body/ProductOfTheMonth'
import ProductSelectionTable from './body/ProductSelectionTable'

function App() {
  

  return (
    <>
      <Head/>
 
        <Header/>
        <ProductSelectionTable/> 
       <ProductOfTheMonth/>
      <Footer/>
    </>
  )
}

export default App
