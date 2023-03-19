import { useEffect, useState } from 'react';
import { Product } from '../../app/models/Product'
import ProductList from './ProductList';

function Catalog() {
  const [products, setProducts] = useState<Product[]>()

  useEffect(() => {
    fetch('http://localhost:5000/api/store')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  if (!products) return null;

  return (
    <>
      <ProductList products={products} />
    </>
  )
}

export default Catalog
