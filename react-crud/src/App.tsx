import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/nav';
import Menu from './components/menu';
import Products from './admin/Products';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './main/Main';
import ProductCreate from './components/ProductCreate';
import ProductEdit from './components/ProductEdit';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="container-fluid">
        <BrowserRouter>
          <div className="row">
            <Menu />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/admin/products' element={<Products />} />
                <Route path='/admin/products/create' element={<ProductCreate />} />
                <Route path='/admin/products/:id/edit' element={<ProductEdit />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>

      </div>
      <script src="/docs/5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>

      <script src="https://cdn.jsdelivr.net/npm/chart.js@4.3.2/dist/chart.umd.js" integrity="sha384-eI7PSr3L1XLISH8JdDII5YN/njoSsxfbrkCTnJrzXt+ENP5MOVBxD+l6sEG4zoLp" crossOrigin="anonymous"></script><script src="dashboard.js"></script>
    </div>
  );
}

export default App;
