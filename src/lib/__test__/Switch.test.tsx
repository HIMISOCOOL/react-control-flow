import React from "react";
import { render } from "@testing-library/react";
import { Switch } from "../Switch";
import { Match } from "../Match";

describe("Show", () => {
    it("should return null when there are no matches", () => {
        const text = "Hello World";
        const barText = "It was bar!";
        const on: string = "foo";
        const { container, queryByText } = render(
            <Switch on={on}>
                <Match when={"bar"}>
                    <p>{text}</p>
                </Match>
                <Match when={"bar"}>
                    <p>{barText}</p>
                </Match>
            </Switch>
        );
        expect(queryByText(text)).not.toBeInTheDocument();
        expect(queryByText(barText)).not.toBeInTheDocument();
        expect(container.firstChild).toBeNull();
    });
    it("should return null when there are no children", () => {
        const on: string = "foo";
        const { container } = render(<Switch on={on}>{}</Switch>);
        expect(container.firstChild).toBeNull();
    });
    it("should return the default element when it is provided and there are no matches", () => {
        const defaultText = "I am the default element";
        const text = "Hello World";
        const barText = "It was bar!";
        const on: string = "foo";
        const { container, queryByText } = render(
            <Switch on={on} default={<p>{defaultText}</p>}>
                <Match when={"bar"}>
                    <p>{text}</p>
                </Match>
                <Match when={"bar"}>
                    <p>{barText}</p>
                </Match>
            </Switch>
        );
        expect(queryByText(text)).not.toBeInTheDocument();
        expect(queryByText(barText)).not.toBeInTheDocument();
        expect(container.firstChild).toBeDefined();
        expect(queryByText(defaultText)).toBeInTheDocument();
    });
    it("should return the matching `Match` element's children", () => {
        const text = "Hello World";
        const barText = "It was bar!";
        const on: string = "foo";
        const { container, queryByText } = render(
            <Switch on={on}>
                <Match when={"foo"}>
                    <p>{text}</p>
                </Match>
                <Match when={"bar"}>
                    <p>{barText}</p>
                </Match>
            </Switch>
        );
        expect(container.firstChild).toBeDefined();
        expect(queryByText(text)).toBeInTheDocument();
        expect(queryByText(barText)).not.toBeInTheDocument();
    });
    it("should return the first match when there are more than one match", () => {
        const text = "Hello World";
        const barText = "It was bar!";
        const on: string = "foo";
        const { container, queryByText } = render(
            <Switch on={on}>
                <Match when={"foo"}>
                    <p>{text}</p>
                </Match>
                <Match when={"foo"}>
                    <p>{barText}</p>
                </Match>
            </Switch>
        );
        expect(container.firstChild).toBeDefined();
        expect(queryByText(text)).toBeInTheDocument();
        expect(queryByText(barText)).not.toBeInTheDocument();
    });
});
