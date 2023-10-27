import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css'; // Importa tu archivo CSS personalizado

import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import ProductForm from './ProductForm';

function App() {
  return (
    <Router>
      <div className="container">
        <h1 className="mt-4">Inventario de Productos</h1>
        
        <nav>
          <ul>
            <li>
              <Link to="/productos">Lista de Productos</Link>
            </li>
            <li>
              <Link to="/productos/nuevo">Agregar Nuevo Producto</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/productos" component={ProductList} />
          <Route path="/productos/nuevo" component={ProductForm} />
          <Route path="/productos/:id" component={ProductDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
