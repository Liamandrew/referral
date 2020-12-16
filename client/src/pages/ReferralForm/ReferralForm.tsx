import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Button } from "../../components/Button";
import { Heading } from "../../components/Heading";
import { SubHeading } from "../../components/SubHeading";
import { TextField } from "../../components/TextField";
import style from "./ReferralForm.module.css";
import { createReferralAction } from "../../state/referralSlice";

interface FormData {
    givenName: string;
    surname: string;
    email: string;
    phoneNumber: string;
    homeName: string;
    streetName: string;
    suburb: string;
    postcode: string;
    state: string;
    country: string;
}

const ReferralForm: React.FC = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, errors, reset } = useForm<FormData>({
        mode: "all",
    });

    const onSubmit = async ({
        givenName,
        surname,
        email,
        phoneNumber,
    }: FormData) => {
        dispatch(
            createReferralAction({
                givenName,
                surname,
                email,
                phoneNumber,
            })
        );
        reset();
    };

    return (
        <div className={style.frame}>
            <Heading>Referral Builder</Heading>
            <form onSubmit={handleSubmit(onSubmit)}>
                <SubHeading>Personal Details</SubHeading>
                <div className={style.personalDetailsContainer}>
                    <TextField
                        ref={register({ required: "Given name is required" })}
                        name="givenName"
                        label="Given Name"
                        error={errors?.givenName?.message}
                    />
                    <TextField
                        ref={register({ required: "Surname is required" })}
                        name="surname"
                        label="Surname"
                        error={errors?.surname?.message}
                    />
                    <TextField
                        ref={register({ required: "Email is required" })}
                        name="email"
                        label="Email"
                        error={errors?.email?.message}
                    />
                    <TextField
                        ref={register({ required: "Phone is required" })}
                        name="phoneNumber"
                        label="Phone"
                        error={errors?.phoneNumber?.message}
                    />
                </div>
                <SubHeading>Address</SubHeading>
                <div className={style.addressContainer}>
                    <TextField
                        ref={register}
                        name="homeName"
                        label="Home Name or #"
                    />
                    <TextField
                        ref={register}
                        name="streetName"
                        label="Street"
                    />
                    <TextField ref={register} name="suburb" label="Suburb" />
                    <TextField ref={register} name="state" label="State" />
                    <TextField
                        ref={register}
                        name="postcode"
                        label="Postcode"
                    />
                    <TextField ref={register} name="country" label="Country" />
                </div>
                <div className={style.buttonContainer}>
                    <Button variant="secondary" label="Upload Avatar" />
                    <Button
                        variant="primary"
                        type="submit"
                        label="Create Referral"
                    />
                </div>
            </form>
        </div>
    );
};

export { ReferralForm };
