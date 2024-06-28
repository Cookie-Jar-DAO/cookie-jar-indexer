import { ponder } from "@/generated";

ponder.on("CookieJarFactory:DonationReceived", async ({ event, context }) => {
  console.log(event.args);
});

ponder.on(
  "CookieJarFactory:OwnershipTransferred",
  async ({ event, context }) => {
    console.log(event.args);
  },
);

ponder.on("CookieJarFactory:SummonCookieJar", async ({ event, context }) => {
  console.log(event.args);
});
