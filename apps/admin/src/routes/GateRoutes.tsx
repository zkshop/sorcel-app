import { Route, Routes } from 'react-router-dom';
import { AddGate, Gates } from '../modules/Gates';

export const GateRoutes = () => (
  <Routes>
    <Route path="/">
      <Route index element={<Gates />} />
      <Route path="add" element={<AddGate />} />
      <Route path="*" element={<>Not Found Page</>} />
    </Route>
  </Routes>
);
