// src/Image.js
import product from './product';

const Image = () => {
  return <img src={product.imageUrl} alt={product.name} style={{ width: "150px", height: "150px" }} />;
};

export default Image;