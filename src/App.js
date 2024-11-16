
import './App.css';
import Header from './Components/Header/header'
import Footer from './Components/Footer/footer'
import Home from './Pages/Index/Index'
import Porfolio from './Pages/Portfolio/portfolio'
import Contact from './Pages/Contact/contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/portfolio' element={<Porfolio />} />
          <Route path='/contact' element={<Contact />} />

        </Routes>

      </BrowserRouter>
      <Footer />
    </div>
  );

}

export default App;
