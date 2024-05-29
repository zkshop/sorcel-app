import { useEffect, useState } from "react";
import { Base } from "../base";

export type useFilterQueryResult<T> = {
  data?: T,
  loading: boolean,
  error: unknown
}


export const useFilterQuery = <T, K>( filter: K, query?: (filter: K) => T,ready?: boolean): useFilterQueryResult<T> => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(undefined);
  const [data, setData] = useState<T | undefined>(undefined);

  async function runQuery() {
    try {
      const queryResult = await query!(filter);
      setData(queryResult);
    } catch(e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!query || (ready != undefined && ready == false))
      return ;
    runQuery();
  }, [query, ready]);

  return {
    loading,
    data,
    error
  }
}