import { ethers } from 'ethers';
import { ICurrentUser } from 'models';

declare var window: any;
type Wallet = 'metamask'; // for now

export async function connectToWallet(wallet: Wallet): Promise<ICurrentUser> {
  switch (wallet) {
    case 'metamask': {
      try {
        if (! window.ethereum) {
          throw new Error('Could not detect Metamask extension.');
        }

        const [address] = await window.ethereum.request({ method: 'eth_requestAccounts' })
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        return { address, provider };
      } catch (e) {
        console.log(e);
        throw new Error('There was a problem connecting to Metamask.');
      }
    }

    default:
      throw new Error('Unsupported wallet.');
  }

}
