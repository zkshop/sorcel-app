import { Header, Box, Button, Table, Link } from '@3shop/ui';

const GATES_ATTRIBUTES = [''];

export const Gates = () => (
  <Box>
    <Header title="Gates">
      <Link href="/app/gate/add">
        <Button>+ New Gate</Button>
      </Link>
    </Header>

    <Table data={[]} heads={GATES_ATTRIBUTES} renderRow={() => <div />} />
  </Box>
);
