import React from "react";
import { render } from "@testing-library/react";
import { TextField } from "../TextField";

describe("<TextField>", () => {
    test("should match snapshot in default state", () => {
        const { container } = render(<TextField label="label" />);

        expect(container).toMatchSnapshot();
    });

    test("should match snapshot in default state", () => {
        const { container, getByText } = render(
            <TextField label="label" error="there is an error" />
        );

        expect(getByText(/there is an error/i)).toBeInTheDocument();
        expect(container).toMatchSnapshot();
    });
});
