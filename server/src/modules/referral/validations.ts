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
    body("email")
        .notEmpty()
        .withMessage("Is required")
        .isEmail()
        .withMessage("Must be a valid email address"),
    body("phoneNumber")
        .notEmpty()
        .withMessage("Is required")
        .isString()
        .withMessage("Must be a string"),
];
