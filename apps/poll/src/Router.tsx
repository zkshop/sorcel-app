import { createMemoryRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { Choices } from './Choices';
import Layout from './Layout';
import { PollList } from './PollList';

const router = createMemoryRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<PollList />} />
      <Route path="/choices/:id" element={<Choices />} />
    </Route>,
  ),
);

export { router };
