import React from "react";

export interface ForProps<T> {
    each: T[];
    fallback?: JSX.Element;
    children: (item: T, index: number) => JSX.Element;
}

/**
 * Iterates through a list and renders an element for each item.
 * Optionally accepts a fallback to show if the array is empty.
 *
 * @example
 * // simple foreach
 * const items = ['foo', 'bar', 'baz'];
 * <For each={items}>
 *     {(item, index) => <p key={index}>{item}</p>}
 * </For>
 *
 * // with Fallback
 * const [items, setItems] = useState([]);
 * useEffect(() => {
 *     getItemsAsync(setItems);
 * }, []);
 * <For each={items} fallback={<div>Loading...</div>}>
 *     {(item, index) => <p key={index}>{item}</p>}
 * </For>
 * @param props
 * @param props.each The list of items to iterate through
 * @param props.fallback The fallback element to render
 * @param props.children The child element to render for each item in `props.each`
 */
function For<T>(props: ForProps<T>): React.FunctionComponentElement<ForProps<T>> | null {
    // TODO: what to do if each is not an array?
    // if each isnt an array return null
    if (!Array.isArray(props.each)) {
        console.error(
            "Non array passed into For.props.each",
            props.each,
            new Error().stack
        );
        return null;
    }
    // if we have a fallback and we dont have anything in the array, render the fallback
    if (props.fallback && props.each.length < 1) {
        return props.fallback;
    }
    // return renderProp mapped for each child
    return <>{props.each.map((item, index) => props.children(item, index))}</>;
}

export { For };
