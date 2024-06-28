import {createConfig} from "@ponder/core";
import {http, parseAbiItem} from "viem";

import {CookieJarFactoryAbi} from "./abis/CookieJarFactoryAbi";
import {CookieJarAbi} from "./abis/CookieJarAbi";

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
            address: "0x2f98e26f53D80315d70f6D4Cc76C21dfd2BF8F40",
            network: "sepolia",
            startBlock: 6192904,
        },
        CookieJar: {
            abi: CookieJarAbi,
            network: "sepolia",
            factory: {
                // The address of the factory contract that creates instances of this child contract.
                address: "0x2f98e26f53D80315d70f6D4Cc76C21dfd2BF8F40",
                // The event emitted by the factory that announces a new instance of this child contract.
                event: parseAbiItem("event SummonCookieJar(address cookieJar, bytes initializer, string details)"),
                // The name of the parameter that contains the address of the new child contract.
                parameter: "cookieJar",
            },
            startBlock: 6192904,
        }
    },
});
