import { RateLimiter } from "limiter";


export const limiter:RateLimiter = new RateLimiter({
    tokensPerInterval: 5,
    interval: "minute",
    fireImmediately: true,
});