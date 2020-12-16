import {
    createSlice,
    PayloadAction,
    ThunkAction,
    Action,
} from "@reduxjs/toolkit";
import { createReferral, getAllReferrals } from "../api/referral";
import { Referral, ReferralRequest } from "../types/referral";

interface ReferralSlice {
    referrals: Referral[];
}

const {
    reducer,
    actions: { getAllReferralsSuccess, createReferralSuccess },
} = createSlice({
    name: "referral",
    initialState: { referrals: [] } as ReferralSlice,
    reducers: {
        getAllReferralsSuccess(state, action: PayloadAction<Referral[]>) {
            state.referrals = action.payload;
        },
        createReferralSuccess(state, action: PayloadAction<Referral>) {
            state.referrals = [...state.referrals, action.payload];
        },
    },
});

export type ReferralReducerState = ReturnType<typeof reducer>;

export type ReferralThunk = ThunkAction<
    void,
    ReferralReducerState,
    unknown,
    Action<string>
>;

export const getAllReferralsAction = (): ReferralThunk => async (dispatch) => {
    try {
        const response = await getAllReferrals();
        dispatch(getAllReferralsSuccess(response.data.referrals));
    } catch (err) {}
};

export const createReferralAction = (
    referral: ReferralRequest
): ReferralThunk => async (dispatch) => {
    try {
        const response = await createReferral(referral);
        dispatch(createReferralSuccess(response.data.referral));
    } catch (err) {}
};

export { reducer as referralReducer };
