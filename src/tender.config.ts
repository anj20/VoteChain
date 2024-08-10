import { defineChain } from 'viem'

const TENDERLY_VIRTUAL_MAINNET_RPC="https://virtual.mainnet.rpc.tenderly.co/8ac1d167-7959-4a5e-96cc-031996e4759a"
export const vMainnet = defineChain({
  id: 73571,
  name: 'Virtual Ethereum Mainnet',
  nativeCurrency: { name: 'vEther', symbol: 'vETH', decimals: 18 },
  rpcUrls: {
    default: { http: [TENDERLY_VIRTUAL_MAINNET_RPC!] }
  },
  blockExplorers: {
    default: {
      name: 'Tenderly Explorer',
      url: 'https://dashboard.tenderly.co/explorer/vnet/47cdac98-cda3-431a-8fce-9f31037a3d0c'
    }
  },
  contracts: {
    ensRegistry: {
      address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e'
    },
    ensUniversalResolver: {
      address: '0xE4Acdd618deED4e6d2f03b9bf62dc6118FC9A4da',
      blockCreated: 16773775
    },
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 14353601
    }
  }
})