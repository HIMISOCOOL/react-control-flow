import React from 'react';
import { render } from '@testing-library/react';
import { For } from "../For";

describe("For", () => {
    let list = ["foo", "bar", "baz"];
    it("Should log an error if props.each is an Object", () => {
        const aObject = { foo: "Foo", bar: "Bar", baz: "Baz" };
        const { container } = render(
            <For each={aObject as any}>
                {(item, index) => <p key={index}>{item as any}</p>}
            </For>
        )
        expect(container.firstChild).toBeNull();

    });

    it("Should log an error if props.each is a String", () => {
        const aString = "string";
        const { container } = render(
            <For each={aString as any}>
                {(item, index) => <p key={index}>{item as any}</p>}
            </For>
        )
        expect(container.firstChild).toBeNull();

    });

    it("Should log an error if props.each is a Number", () => {
        const aNumber = 123;
        const { container } = render(
            <For each={aNumber as any}>
                {(item, index) => <p key={index}>{item as any}</p>}
            </For>
        )
        expect(container.firstChild).toBeNull();

    });

    it("Should render each item of the array", () => {
        const { getByText } = render(
            <For each={list}>
                {(item, index) => <p key={index}>{item}</p>}
            </For>
        );
        list.forEach((item) => expect(getByText(item)).toBeInTheDocument());
    });

    it("Should render the fallback element when the array is empty", () => {
        const loading = 'Loading ...';
        const { getByText } = render(
            <For each={[]} fallback={<p>{loading}</p>}>
                {(item, index) => <p key={index}>{item}</p>}
            </For>
        );
        expect(getByText(loading)).toBeInTheDocument();
    });
});
