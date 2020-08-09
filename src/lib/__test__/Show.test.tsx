import React from "react";
import { render } from "@testing-library/react";
import { Show } from "../Show";

describe("Show", () => {
    it("should return the `fallback` component when provided and `when` is false", () => {
        const fallback = "Hello World";
        const text = "foo";
        const { container, queryByText } = render(
            <Show when={false} fallback={<p>{fallback}</p>}>
                {text}
            </Show>
        );
        expect(container.firstChild).toBeDefined();
        expect(queryByText(fallback)).toBeInTheDocument();
        expect(queryByText(text)).not.toBeInTheDocument();
    });
    it("should return null when `when` is false", () => {
        const text = "Foo";
        const { container, queryByText } = render(
            <Show when={false}>
                <p>{text}</p>
            </Show>
        );
        expect(queryByText(text)).not.toBeInTheDocument();
        expect(container.firstChild).toBeNull();
    });
    it("should return the render prop when children is a function and `when` is true", () => {
        const value = { text: "Hello World" };
        const { container, queryByText } = render(
            <Show when={value}>{({ text }) => <p>{text}</p>}</Show>
        );
        expect(container.firstChild).toBeDefined();
        expect(queryByText(value.text)).toBeInTheDocument();
    });
    it("should return the children when `when` is true", () => {
        const show = true;
        const text = "Hello world";
        const { container, queryByText } = render(
            <Show when={show}>
                <p>{text}</p>
            </Show>
        );
        expect(container.firstChild).toBeDefined();
        expect(queryByText(text)).toBeInTheDocument();
    });
});
