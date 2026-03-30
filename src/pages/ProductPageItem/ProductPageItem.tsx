import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import type { ProductType } from '../../types/productType/productType';
import { fetchProductById } from '../../services/productService';
import css from './ProductPageItem.module.css';
import {
  ErrorState,
  LoadingState,
} from '../../components/QueryState/QueryState';

export const ProductPageItem = () => {
  const { id } = useParams();
  const {
    data: product,
    isError,
    isLoading,
  } = useQuery<ProductType>({
    queryKey: ['product'],
    queryFn: () => fetchProductById(Number(id)),
    enabled: !!id,
  });
  return (
    <>
      {isError && <ErrorState />}
      {isLoading && <LoadingState />}
      {!isLoading && product && (
        <div className={css.container}>
          <p>{product.title}</p>
          <img
            className={css.img}
            src={product?.images[0]}
            alt={product.title}
          />
          <p>Description: {product.description}</p>
        </div>
      )}
    </>
  );
};
