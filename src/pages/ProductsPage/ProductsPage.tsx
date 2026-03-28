import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../../services/productService';
import type { productType } from '../../types/productType/productType';
import { Link } from 'react-router';
export const ProductPage = () => {
  const {
    data: products,
    isError,
    isLoading,
  } = useQuery<productType[]>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });
  return (
    <>
      {isError && <h2>Something went wrong</h2>}
      {isLoading && <h2>Loading...</h2>}
      {!isLoading && products && products.length > 0 && (
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <Link to={`${product.id}`}>
                <p>{product.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
