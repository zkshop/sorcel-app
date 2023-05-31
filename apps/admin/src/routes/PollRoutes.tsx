import { Route, Routes } from 'react-router-dom';
import { AddPollContainer } from '../pages/AddPollContainer';

export const PollRoutes = () => (
  <Routes>
    <Route path="/">
      <Route path="add" element={<AddPollContainer />} />
      <Route path="*" element={<>Not Found Page</>} />
    </Route>
  </Routes>
);
