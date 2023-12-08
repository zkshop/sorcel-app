import { Route, Routes } from 'react-router-dom';
import { AddPollContainer } from '../pages/AddPollContainer';
import { EditPoll } from '../pages/EditPoll';
import { Poll } from '../pages/Poll';

export const PollRoutes = () => (
  <Routes>
    <Route path="/">
      <Route index element={<Poll />} />
      <Route path="add" element={<AddPollContainer />} />
      <Route path="edit/:id" element={<EditPoll />} />
      <Route path="*" element={<>Not Found Page</>} />
    </Route>
  </Routes>
);
