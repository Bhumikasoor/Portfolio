
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './pages/Header'
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import Home from './pages/Navigation/Home'
import About from './pages/Navigation/About'
import Product from './pages/Navigation/Product'
import Service from './pages/Navigation/Service'
import Contact from './pages/Navigation/Contact'


function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Routes>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Product' element={<Product/>}></Route>
        <Route path='/Service' element={<Service/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
