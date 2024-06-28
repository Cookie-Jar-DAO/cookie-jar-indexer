import { createConfig } from "@ponder/core";
import { http } from "viem";

import { CookieJarFactoryAbi } from "./abis/CookieJarFactoryAbi";

export default createConfig({
  networks: {
    sepolia: {
      chainId: 11155111,
      transport: http(process.env.PONDER_RPC_URL_11155111),
    },
  },
  contracts: {
    CookieJarFactory: {
      abi: CookieJarFactoryAbi,
      address: "0xa4bd15948b9caffd8de8a2be59893f2395c9c780",
      network: "sepolia",
      startBlock: 6038640,
    },
  },
});
