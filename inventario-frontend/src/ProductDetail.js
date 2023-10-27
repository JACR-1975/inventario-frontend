import React from 'react';

function ProductDetail({ match }) {
  // Aquí debes obtener los detalles del producto con ID igual a match.params.id
  const productId = match.params.id;
  const productDetails = {
    1: { name: 'Producto A', description: 'Descripción del Producto A' },
    2: { name: 'Producto B', description: 'Descripción del Producto B' },
    3: { name: 'Producto C', description: 'Descripción del Producto C' },
  };
  const product = productDetails[productId];

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div>
      <h2>Detalles del Producto</h2>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetail;
