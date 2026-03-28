import { Route, Routes } from 'react-router';
import { Layout } from '../Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index Component={Layout} />
      </Route>
    </Routes>
  );
};
