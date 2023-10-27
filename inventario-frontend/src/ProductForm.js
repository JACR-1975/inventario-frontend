import React, { useState } from 'react';

function ProductForm() {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí debes enviar los datos del nuevo producto al servidor o realizar la acción necesaria.
    // Por ejemplo, puedes enviar los datos al servidor con Axios.
    console.log('Nombre:', productName);
    console.log('Descripción:', productDescription);
  };

  return (
    <div>
      <h2>Formulario de Producto</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre del Producto:
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </label>
        <label>
          Descripción del Producto:
          <textarea
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          />
        </label>
        <button type="submit">Agregar Producto</button>
      </form>
    </div>
  );
}

export default ProductForm;
