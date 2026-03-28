import { Route, Routes } from 'react-router';
import { Layout } from '../Layout/Layout';
import { ProductPage } from '../../pages/ProductsPage/ProductsPage';
import { MainPage } from '../../pages/MainPage/MainPage';
import { ProductPageItem } from '../../pages/ProductPageItem/ProductPageItem';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="products" element={<ProductPage />} />
        <Route path="/products/:id" element={<ProductPageItem />} />
      </Route>
    </Routes>
  );
};
