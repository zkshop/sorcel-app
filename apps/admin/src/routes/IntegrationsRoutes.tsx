import { Route, Routes } from 'react-router-dom';
import { Integrations } from '../pages/Integrations';

export const IntegrationsRoutes = () => (
  <Routes>
    <Route path="/">
      <Route index element={<Integrations />} />
      <Route path="*" element={<>Not Found Page</>} />
    </Route>
  </Routes>
);
