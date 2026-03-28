import axios from 'axios';
import type { productType } from '../types/productType/productType';

const BaseURL: string = 'https://dummyjson.com/products';
const limit: number = 20;
interface Response {
  products: productType[];
}
interface ResponseById {
  products: productType;
}
export const fetchProducts = async () => {
  const { data } = await axios.get<Response>(BaseURL, {
    params: {
      limit,
    },
  });
  const newData = data.products;
  return newData;
};

export const fetchProductById = async (id: productType['id']) => {
  if (!id) return;
  const { data } = await axios.get<ResponseById>(`${BaseURL}/${id}`);
  console.log(data);
  return data;
};
