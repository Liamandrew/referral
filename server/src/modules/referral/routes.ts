import { Router } from "express";
import { handleCreateReferral, handleGetAllReferrals } from "./controller";
import { createReferralRequestValidations } from "./validations";

export const router = Router();

/**
 * /api/referrals
 */
router
    .route("/")
    .post(createReferralRequestValidations, handleCreateReferral)
    .get(handleGetAllReferrals);
