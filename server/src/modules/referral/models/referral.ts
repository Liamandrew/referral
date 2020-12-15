import { knex } from "../../../db";

interface DatabaseReferral {
    id: number;
    given_name: string;
    surname: string;
    email: string;
    phone_number: string;
}

interface ReferralPropertiesType {
    id: number;
    givenName: string;
    surname: string;
    email: string;
    phoneNumber: string;
}

export class Referral implements ReferralPropertiesType {
    id: number;
    givenName: string;
    surname: string;
    email: string;
    phoneNumber: string;

    static tableName = "referrals";

    constructor(referralProperties: ReferralPropertiesType) {
        this.id = referralProperties.id;
        this.givenName = referralProperties.givenName;
        this.surname = referralProperties.surname;
        this.email = referralProperties.email;
        this.phoneNumber = referralProperties.phoneNumber;
    }

    static findById = async (id: string): Promise<DatabaseReferral> =>
        await knex(Referral.tableName).first("*").where("id", id);

    static findAll = async (): Promise<DatabaseReferral[]> =>
        await knex(Referral.tableName);

    static create = async (
        referralProperties: Omit<ReferralPropertiesType, "id">
    ): Promise<DatabaseReferral> => {
        try {
            const [referral] = await knex(Referral.tableName)
                .insert({
                    given_name: referralProperties.givenName,
                    surname: referralProperties.surname,
                    email: referralProperties.email,
                    phone_number: referralProperties.phoneNumber,
                })
                .returning("*");

            return referral as DatabaseReferral;
        } catch (error) {
            throw error;
        }
    };
}
