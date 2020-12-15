import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { Referral } from "./models/referral";

export const handleCreateReferral = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { body } = req;

        const referral = await Referral.create({
            givenName: body.givenName,
            surname: body.surname,
            email: body.email,
            phoneNumber: body.phoneNumber,
        });

        res.send({
            referral: new Referral({
                id: referral.id,
                givenName: referral.given_name,
                surname: referral.surname,
                email: referral.email,
                phoneNumber: referral.phone_number,
            }),
        });
    } catch (error) {
        res.status(500).send({
            message: "Server error when creating referral",
        });
    }
};

export const handleGetAllReferrals = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const referrals = await Referral.findAll();

        res.send({
            referrals: referrals.map(
                (referral) =>
                    new Referral({
                        id: referral.id,
                        givenName: referral.given_name,
                        surname: referral.surname,
                        email: referral.email,
                        phoneNumber: referral.phone_number,
                    })
            ),
        });
    } catch (error) {
        res.status(500).send({
            message: "Server error when getting referrals",
        });
    }
};
