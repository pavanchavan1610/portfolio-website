
import './App.css';
import Header from './Components/Header/header'
import Footer from './Components/Footer/footer'
import Home from './Pages/Index/Index'
import Porfolio from './Pages/Portfolio/portfolio'
import Contact from './Pages/Contact/contact'
import {Routes, Route, HashRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <HashRouter>
        <Header />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/portfolio' element={<Porfolio />} />
          <Route path='/contact' element={<Contact />} />

        </Routes>

      </HashRouter>
      <Footer />
    </div>
  );

}

export default App;
