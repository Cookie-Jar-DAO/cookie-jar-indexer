import { ponder } from "@/generated";

ponder.on("CookieJar:GiveCookie", async ({ event, context }) => {
  console.log(event.args);
});

