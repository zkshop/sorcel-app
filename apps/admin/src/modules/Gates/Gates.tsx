import { useGetGates_V2Query } from '@3shop/apollo';
import type { Nullable } from '@3shop/types';

import { Header, Box, Button, Table, Link, Spinner } from '@3shop/ui';
import { GateListItem } from './GateListItem';

const GATES_ATTRIBUTES = ['name', 'perk'];

export type GateItemType = {
  name: string;
  id: string;
  exclusive_access: boolean;
  discount?: Nullable<number>;
};

export const Gates = () => {
  const { data, loading } = useGetGates_V2Query();

  if (loading) return <Spinner />;

  if (!data) return <>Error</>;

  return (
    <Box>
      <Header title="Gates">
        <Link href="/app/gate/add">
          <Button>+ New Gate</Button>
        </Link>
      </Header>

      <Table data={data.gates} heads={GATES_ATTRIBUTES} renderRow={GateListItem} />
    </Box>
  );
};
