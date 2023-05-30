import { Link } from 'react-router-dom';

export const Poll = () => (
  <div>
    <h1>Poll</h1>

    <Link to="poll/add">+ New Poll</Link>
  </div>
);
