import { Router } from "express";
import { ReferralRouter } from "./modules/referral";

export const rootRouter = Router({ mergeParams: true });

rootRouter.use("/api/referrals", ReferralRouter);
