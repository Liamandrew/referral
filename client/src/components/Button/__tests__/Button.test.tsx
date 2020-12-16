import React from "react";
import { render } from "@testing-library/react";
import { Button } from "../Button";

describe("<Button>", () => {
    test("variant primary should match snapshot", () => {
        const { container } = render(
            <Button variant="primary" label="label" />
        );

        expect(container).toMatchSnapshot();
    });

    test("variant secondary should match snapshot", () => {
        const { container } = render(
            <Button variant="secondary" label="label" />
        );

        expect(container).toMatchSnapshot();
    });
});
