import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ReferralTable } from "../../components/ReferralTable";
import {
    getAllReferralsAction,
    ReferralReducerState,
} from "../../state/referralSlice";
import style from "./ReferralList.module.css";

const ReferralList: React.FC = () => {
    const dispatch = useDispatch();
    const referrals = useSelector(
        (state: ReferralReducerState) => state.referrals
    );

    useEffect(() => {
        dispatch(getAllReferralsAction());
    }, []);

    return (
        <div className={style.frame}>
            <ReferralTable
                referrals={referrals}
                onReferralEditClick={console.log}
                onReferralDeleteClick={console.log}
            />
        </div>
    );
};

export { ReferralList };
