import React, { useEffect, useState } from "react";
import { getAllReferrals } from "../../api/referral";
import { ReferralTable } from "../../components/ReferralTable";
import { Referral } from "../../types/referral";
import style from "./ReferralList.module.css";

const ReferralList: React.FC = () => {
    const [referrals, setReferrals] = useState<Referral[]>([]);

    const fetchReferrals = async () => {
        try {
            const { data } = await getAllReferrals();

            setReferrals(data.referrals);
        } catch (error) {}
    };

    useEffect(() => {
        fetchReferrals();
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
