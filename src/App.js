import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';

import Bootstrap from './component/bootstrap'
import Category from './component/category'


function App() {
  return (
    <div>
      {/* <h1>Product</h1> */}
      <Routes>
        <Route path='/' element={<Bootstrap />} />
        <Route path="/productdeatails" element={<Category />} />
      </Routes>
    </div>
    
     
      
  );
}

export default App;
