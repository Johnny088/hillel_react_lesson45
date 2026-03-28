import { Route, Routes } from 'react-router';
import { Layout } from '../Layout/Layout';
import { ProductPage } from '../../pages/ProductsPage/ProductsPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<p>Home</p>} />
        <Route path="products" element={<ProductPage />} />
      </Route>
    </Routes>
  );
};
