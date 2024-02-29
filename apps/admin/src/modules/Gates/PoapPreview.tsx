import { httpServerless } from '@3shop/http-serverless';
import type { Nullable } from '@3shop/types';
import { Image, Spinner } from '@3shop/ui';
import type { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

type Props = {
  id: number;
};

export const PoapPreview = ({ id }: Props) => {
  const [poap, setPoap] = useState<Nullable<AxiosResponse>>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    httpServerless
      .get(`api/shop/poap/events`, { params: { id } })
      .then((res) => setPoap(res.data))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Spinner />;
  if (!poap) return null;

  return <Image w={16} src={poap.data.image_url + '?size=small'} />;
};
