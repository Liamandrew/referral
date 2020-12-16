export interface Referral {
    id: number;
    givenName: string;
    surname: string;
    phoneNumber: string;
    email: string;
}

export type ReferralRequest = Omit<Referral, "id">;
