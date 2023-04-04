import { RouterProvider } from 'react-router-dom';
import { useGetNFTs } from './hooks/useGetNFTs';
import { router } from './Router';

function App() {
  useGetNFTs();

  return <RouterProvider router={router} />;
}

export default App;
