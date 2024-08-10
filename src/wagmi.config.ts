import { cookieStorage, createConfig, createStorage, http } from '@wagmi/core'
import { mainnet } from '@wagmi/core/chains'
import { vMainnet } from '@/tender.config'
import { injected } from '@wagmi/core'
 
// Get projectId at https://cloud.walletconnect.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID
 
if (!projectId) throw new Error('Project ID is not defined')
 
// Create wagmiConfig
export const config = createConfig({
  chains: [mainnet, vMainnet],
  connectors: [
    injected()
  ],
  ssr: true,
  transports: {
    [mainnet.id]: http('https://mainnet.gateway.tenderly.co/'),
    [vMainnet.id]: http(process.env.TENDERLY_VIRTUAL_MAINNET_RPC!)
  },
  storage: createStorage({
    storage: cookieStorage
  }),
})