import {createSchema} from "@ponder/core";

export default createSchema((p) => ({
    CookieJarTypes: p.createEnum(["AllowList", "ERC20", "ERC721", "Hats", "MolochDAO", "Open"]),
    CookieJarFactory: p.createTable({
        id: p.string(),
        owner: p.string().optional(),
    }),
    CookieJars: p.createTable({
        id: p.string(),
        name: p.string().optional(),
        address: p.string().optional(),
        owner: p.string().optional(),
        type: p.enum("CookieJarTypes"),
        metadata: p.json().optional(),
        periodLength: p.bigint().optional(),
        cookieAmount: p.bigint().optional(),
        cookieToken: p.string().optional(),
        details: p.json().optional(),
    }),
}));
