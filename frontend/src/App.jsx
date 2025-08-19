import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import MenPage from './pages/MenPage';
import StylistPage from './pages/StylistPage';
import WomenPage from './pages/WomenPage';
import ShopPage from './pages/ShopePage';

function App() {


  return (
     <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<StylistPage />} />
          <Route path="/men" element={<MenPage />} />
          <Route path="/women" element={<WomenPage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
