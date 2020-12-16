import axios, { AxiosResponse } from "axios";
import { Referral, ReferralRequest } from "../types/referral";

const SERVER_URL = "http://localhost:5000";

interface CreateReferralResponse {
    referral: Referral;
}

export const createReferral = (
    referral: ReferralRequest
): Promise<AxiosResponse<CreateReferralResponse>> =>
    axios.post(`${SERVER_URL}/api/referrals`, {
        ...referral,
    });

interface GetAllReferralsResponse {
    referrals: Referral[];
}

export const getAllReferrals = (): Promise<
    AxiosResponse<GetAllReferralsResponse>
> => axios.get(`${SERVER_URL}/api/referrals`);
