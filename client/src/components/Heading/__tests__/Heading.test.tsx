import React from "react";
import { render } from "@testing-library/react";
import { Heading } from "../Heading";

describe("<Heading>", () => {
    test("should match snapshot", () => {
        const { container } = render(<Heading>text</Heading>);

        expect(container).toMatchSnapshot();
    });
});
