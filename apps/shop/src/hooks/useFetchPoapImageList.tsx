import type { GetProductsQuery } from '@3shop/apollo';
import { Segment_Type_Enum } from '@3shop/apollo';
import { useAppDispatch } from '@3shop/store';
import { fetchPOAPImageList } from '@3shop/store/slices/poapImageList';
import { flattenDeep } from 'lodash';

export const useFetchPoapImageList = () => {
  const dispatch = useAppDispatch();

  const getPoapImageList = (data: GetProductsQuery) => {
    dispatch(
      fetchPOAPImageList(
        flattenDeep(
          data.products.map((product) =>
            product.gate.map((gate) =>
              gate.segments
                .filter((segment) => segment.type === Segment_Type_Enum.Poap)
                .map((segment) => segment.poap_ids),
            ),
          ),
        ),
      ),
    );
  };

  return getPoapImageList;
};
