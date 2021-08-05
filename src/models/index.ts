import { providers } from 'ethers';

export type ICurrentUser = {
  address: string;
  provider: providers.Web3Provider;
};
