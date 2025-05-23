import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import AddFlowerRoute from './AdminPanel/addFlowerRoute';
import FlowerDetails from './components/flowerDetails';
import AddFlowers from "./AdminPanel/addFlowers"

import './App.css';

function App() {
  return (
    <div className="App">
            <BrowserRouter>
        <AddFlowerRoute />
        <hr/>
        <div className='pages'>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/flowerDetails" element={<AddFlowers />} />
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
