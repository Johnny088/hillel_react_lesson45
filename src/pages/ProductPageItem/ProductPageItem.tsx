import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import type { productType } from '../../types/productType/productType';
import { fetchProductById } from '../../services/productService';
import css from './ProductPageItem.module.css';

export const ProductPageItem = () => {
  const { id } = useParams();
  const {
    data: product,
    isError,
    isLoading,
  } = useQuery<productType>({
    queryKey: ['product'],
    queryFn: () => fetchProductById(id as productType['id']),
    enabled: !!id,
  });
  return (
    <>
      {isError && <h2>Something went wrong</h2>}
      {isLoading && <h2>Loading...</h2>}
      {!isLoading && product && (
        <div className={css.container}>
          <p>{product.title}</p>
          <img className={css.img} src={product.images[0]} alt="photo" />
          <p>Description: {product.description}</p>
        </div>
      )}
    </>
  );
};
