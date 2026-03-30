import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../../services/productService';
import type { ProductType } from '../../types/productType/productType';
import {
  LoadingState,
  ErrorState,
} from '../../components/QueryState/QueryState';
import { Link } from 'react-router';
export const ProductPage = () => {
  const {
    data: products,
    isError,
    isLoading,
  } = useQuery<ProductType[]>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });
  return (
    <>
      {isError && <ErrorState />}
      {isLoading && <LoadingState />}
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
