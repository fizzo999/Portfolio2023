import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import NewPortfolio from './components/NewPortfolio';
import RocketLoader from './components/RocketLoader';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>     
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/newportfolio" element={<NewPortfolio />} />
        <Route path="/rocketloader" element={<RocketLoader />} />
      </Route>
    </Routes>
  );
}

export default App;
