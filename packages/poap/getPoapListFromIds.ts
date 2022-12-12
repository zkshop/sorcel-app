import { getPOAPFromId } from './getPoapFromId';
import type { Poap } from './Poap';

export const getPOAPListFromIds = async (ids: string[]) => {
  function getAllRequest() {
    const calls: Promise<Poap>[] = [];
    for (const id of ids) {
      calls.push(getPOAPFromId(id));
    }
    return calls;
  }
  const result: any[] = [];

  await Promise.all(getAllRequest()).then((responseList) =>
    responseList.map((data) => result.push(data)),
  );

  return result;
};
