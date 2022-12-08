import { Route, Routes as ReactRouterRoutes } from 'react-router-dom';
import { GeneralContainer } from '../modules/General/GeneralContainer';
import { Home } from '../pages';

const Routes = () => (
  <ReactRouterRoutes>
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="/general" element={<GeneralContainer />} />
    </Route>
  </ReactRouterRoutes>
);

export default Routes;
