// import { Route, Routes } from 'react-router';
// import Homepage from './pages/Homepage';
// import About from './pages/About';
// import Products from './pages/Products';

// const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Homepage />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/products" element={<Products />} />
//     </Routes>
//   );
// };

// export default App;

import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Products from './pages/Products';
import NotFound from './pages/NotFound';
import ProductDetail from './pages/ProductDetail';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
const router = createBrowserRouter([
  { path: '/', element: <Homepage /> },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/products',
    element: <Products />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
  {
    path: '/products/:id',
    element: <ProductDetail />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;