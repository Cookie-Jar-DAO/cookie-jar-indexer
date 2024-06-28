import {ponder} from "@/generated";

ponder.on("CookieJarFactory:DonationReceived", async ({event, context}) => {
    console.log(event.args);
});

ponder.on(
    "CookieJarFactory:OwnershipTransferred",
    async ({event, context}) => {
        console.log(event.args);

        const {CookieJarFactory} = context.db;

        await CookieJarFactory.upsert({
            id: context.network.chainId.toString(),
            create: {
                owner: event.args.newOwner,
            },
            update: {
                owner: event.args.newOwner,
            },
        });
    },
);

ponder.on("CookieJarFactory:SummonCookieJar", async ({event, context}) => {
    console.log(event.args);

    const {CookieJars} = context.db;

    const token = await CookieJars.create({
        id: `${context.network.chainId}-${event.args.cookieJar}`,
        data: {
            address: event.args.cookieJar,
            details: JSON.parse(event.args.details),
        },
    });
});
