import React from "react";
import { render } from "@testing-library/react";
import { ReactComponent as CreateIcon } from "../../../assets/create-24px.svg";
import { IconButton } from "../IconButton";

describe("<IconButton>", () => {
    test("should match the snapshot", () => {
        const { container } = render(
            <IconButton>
                <CreateIcon />
            </IconButton>
        );

        expect(container).toMatchSnapshot();
    });
});
