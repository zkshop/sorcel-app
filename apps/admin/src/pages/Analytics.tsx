import { Wallet_Connection_Log, useGetWalletConnectionLogByAppIdQuery } from '@3shop/apollo';
import { ReactNode, useEffect, useMemo, useState, useRef } from 'react';
import { Box, Button, HStack, Header, Table, Td, Tr } from '@3shop/ui';
import { DateTime } from 'luxon';
import {json2csv} from 'json-2-csv';

interface formatedLog {
  address: Wallet_Connection_Log['address'];
  year: number;
  month: string | null;
  time: string;
  rawTime: string;
}

export const Analytics = () => {
  const { data, loading, error } = useGetWalletConnectionLogByAppIdQuery({
    variables: {
      app_id: '5e174260-08bf-442b-89b3-b16cb90c5241',
    },
  });
  const [formatedLogs, setFormatedLogs] = useState<formatedLog[]>([]);
  const linkRef = useRef<HTMLAnchorElement>(null);

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = useMemo(() => Math.ceil(formatedLogs.length / itemsPerPage), [formatedLogs]);
  const paginated = useMemo(
    () => formatedLogs.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage),
    [formatedLogs, currentPage],
  );

  const pagination = (): ReactNode => {
    const startPage = Math.max(0, currentPage - 2);
    const endPage = Math.min(totalPages, startPage + 5);
    const pageButtons = Array.from({ length: endPage - startPage }, (_, index) => {
      const pageIndex = startPage + index;
      return (
        <Button
          variant={pageIndex === currentPage ? 'primary' : 'outlined'}
          size="sm"
          key={pageIndex}
          onClick={() => setCurrentPage(pageIndex)}
        >
          {pageIndex + 1}
        </Button>
      );
    });
    const firstPageButton = (
      <Button size="sm" onClick={() => setCurrentPage(0)} disabled={currentPage === 0}>
        First
      </Button>
    );

    const lastPageButton = (
      <Button
        size="sm"
        onClick={() => setCurrentPage(totalPages - 1)}
        disabled={currentPage === totalPages - 1}
      >
        Last
      </Button>
    );

    return (
      <HStack spacing="20px">
        {firstPageButton}
        {pageButtons}
        {lastPageButton}
      </HStack>
    );
  };

  useEffect(() => {
    let formatedResult: formatedLog[] = [];
    data?.wallet_connection_log.forEach((log) => {
      const dt = DateTime.fromISO(log.date);
      const parsedDate = {
        year: dt.year,
        month: dt.monthLong,
        time: dt.toFormat('hh:mm am'),
      };
      formatedResult = [
        ...formatedResult,
        {
          address: log.address,
          rawTime: log.date,
          ...parsedDate,
        },
      ];
    });
    setFormatedLogs(formatedResult);
  }, [data, loading]);

  const exportData = async () => {
    const csv = await json2csv(formatedLogs, {});
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    if (linkRef && linkRef.current) {
      linkRef.current.href = url;
      linkRef.current.download = 'data.csv';
      linkRef.current.click();
    }
  };

  return (
    <>
      <Box>
        <Header title="Analytics">
          <Button onClick={async () => await exportData()}>{'Export data'}</Button>
        </Header>
        <Box mt={4}>
          <Table
            data={paginated}
            heads={['Address', 'Year', 'Month', 'Time']}
            renderRow={({ address, year, month, time, index }) => (
              <Tr key={`formated-log-${index}`}>
                <Td>{address}</Td>
                <Td>{year}</Td>
                <Td>{month}</Td>
                <Td>{time}</Td>
              </Tr>
            )}
          />
        </Box>
        <HStack mt={4} justifyContent={'center'}>
          {pagination()}
        </HStack>
      </Box>
      <a ref={linkRef} style={{ display: 'none' }} />
    </>
  );
};
