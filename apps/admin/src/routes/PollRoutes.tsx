import { Route, Routes } from 'react-router-dom';
import { AddPollContainer } from '../pages/AddPollContainer';
import { EditPoll } from '../pages/EditPoll';

export const PollRoutes = () => (
  <Routes>
    <Route path="/">
      <Route path="add" element={<AddPollContainer />} />
      <Route path="edit/:id" element={<EditPoll />} />
      <Route path="*" element={<>Not Found Page</>} />
    </Route>
  </Routes>
);
