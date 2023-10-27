import React from 'react';
import { Link } from 'react-router-dom';

function ProductList() {
  // Aquí debes obtener y mostrar la lista de productos
  const products = [
    { id: 1, name: 'Producto A' },
    { id: 2, name: 'Producto B' },
    { id: 3, name: 'Producto C' },
  ];

  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/productos/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/productos/nuevo">Agregar Nuevo Producto</Link>
    </div>
  );
}

export default ProductList;
