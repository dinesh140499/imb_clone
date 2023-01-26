import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Header from './components/Header'
import Home from './components/Home.jsx'
import Populor from './components/Populor.jsx'
import TopRated from './components/TopRated.jsx'
import UpComing from './components/UpComing.jsx'
import Footer from './components/Footer.jsx'




import './App.scss';
import './Header.scss';
import './Colors.scss';
import './Carousel_Poster.scss';
import './Footer.scss';




function App() {
 

  return (
    <Router>
      <Header />
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route exact path='/populor' element={<Populor/>}></Route>
        <Route exact path='/top_rated' element={<TopRated/>}></Route>
        <Route exact path='/upcoming' element={<UpComing/>}></Route>
        <Route exact path='*' element={<Home/>}></Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
