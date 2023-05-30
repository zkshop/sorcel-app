import { Route, Routes } from 'react-router-dom';
import { AddPoll } from '../pages/AddPoll';

export const PollRoutes = () => (
  <Routes>
    <Route path="/">
      <Route path="add" element={<AddPoll />} />
      <Route path="*" element={<>Not Found Page</>} />
    </Route>
  </Routes>
);
