import React from "react";
import { render } from "@testing-library/react";
import { SubHeading } from "../SubHeading";

describe("<SubHeading>", () => {
    test("should match snapshot", () => {
        const { container } = render(<SubHeading>text</SubHeading>);

        expect(container).toMatchSnapshot();
    });
});
