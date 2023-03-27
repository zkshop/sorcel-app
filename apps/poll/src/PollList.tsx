import { Flex } from '@3shop/ui';
import { Poll } from './Poll';
import { Link } from 'react-router-dom';

export const PollList = () => (
  <Flex flexDirection="row" flexWrap="wrap" gap={2}>
    <Link to="/choices/0000">
      <Poll id="0000" title="Poll 1" />
    </Link>
    <Link to="/choices/0001">
      <Poll id="0001" title="Poll 2" />
    </Link>
  </Flex>
);
