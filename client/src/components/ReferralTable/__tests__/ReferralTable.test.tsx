import React from "react";
import { render } from "@testing-library/react";
import { ReferralTable } from "../ReferralTable";

describe("<ReferralTable>", () => {
    test("should match the snapshot", () => {
        const { container } = render(
            <ReferralTable
                referrals={[
                    {
                        id: 3,
                        email: "email",
                        givenName: "givenName",
                        surname: "surname",
                        phoneNumber: "phoneNumber",
                    },
                ]}
                onReferralDeleteClick={jest.fn}
                onReferralEditClick={jest.fn}
            />
        );

        expect(container).toMatchSnapshot();
    });
});
