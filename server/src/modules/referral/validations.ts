import { body } from "express-validator";

export const createReferralRequestValidations = [
    body("givenName")
        .notEmpty()
        .withMessage("Is required")
        .isString()
        .withMessage("Must be a string"),
    body("surname")
        .notEmpty()
        .withMessage("Is required")
        .isString()
        .withMessage("Must be a string"),
    body("email").notEmpty().withMessage("Is required"),
    body("phoneNumber")
        .notEmpty()
        .withMessage("Is required")
        .isString()
        .withMessage("Must be a string"),
];
