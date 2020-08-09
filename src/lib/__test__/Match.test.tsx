import React from "react";
import { render } from "@testing-library/react";
import { Match } from "../Match";

describe("Match", () => {
    it("should return null when there is no children", () => {
        const { container } = render(<Match when={true}>{}</Match>);
        expect(container.firstChild).toBeNull();
    });

    it("should return the children passed into it", () => {
        const text = "Hello World";
        const { getByText } = render(<Match when={true}>{text}</Match>);
        expect(getByText(text)).toBeInTheDocument();
    });

    it("should return the children passed into it when they are a render prop", () => {
        const text = "Hello World";
        const { getByText } = render(<Match when={text}>{value => value}</Match>);
        expect(getByText(text)).toBeInTheDocument();
    });
});
