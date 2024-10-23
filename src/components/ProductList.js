import React from 'react';
import Product from './Product';

export default function ProductList({ productList }) {
  return (
    <>
      {productList.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </>
  );
}
