import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../../services/productService';
import type { productType } from '../../types/productType/productType';
export const ProductPage = () => {
  const {
    data: products,
    isError,
    isLoading,
  } = useQuery<productType[]>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  console.log(products);
  return (
    <>
      {isError && <h2>Something went wrong</h2>}
      {isLoading && <h2>Loading...</h2>}
      {!isLoading && products && products.length > 0 && (
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <p>{product.brand}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
