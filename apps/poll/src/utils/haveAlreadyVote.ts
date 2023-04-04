export const haveAlreadyVote = (voters: string[], address?: string) =>
  address ? voters.includes(address) : false;
