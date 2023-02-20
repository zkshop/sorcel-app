import { Route, Routes } from 'react-router-dom';
import { AddGate } from '../modules/Gates';

export const GateRoutes = () => (
  <Routes>
    <Route path="/">
      <Route path="add" element={<AddGate />} />
      <Route path="*" element={<>Not Found Page</>} />
    </Route>
  </Routes>
);
