import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'MadridNFTHub',
  tokenName: 'Madrid NFT Hub',
  tokenSymbol: 'MNFT',
  hiddenMetadataUri: 'ipfs://QmPQAW5XjAFtas42NTHqYFxDS1cBN39G7tWgynjHe7yz15/hidden.json',
  maxSupply: 1000,
  whitelistSale: {
    price: 0.03,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.05,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.07,
    maxMintAmountPerTx: 5,
  },
  contractAddress: "0x3d16670741efEe366f30392cFfcC8D939DD60a86",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
