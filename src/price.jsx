// src/Price.js
import product from './product';

const Price = () => {
  return <h4>Prix: ${product.price.toFixed(2)}</h4>;
};

export default Price;
