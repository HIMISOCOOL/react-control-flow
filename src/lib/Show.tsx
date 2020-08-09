import React from "react";

export interface ShowProps<T> {
    when: T | false;
    fallback?: React.ReactNode;
    children: React.ReactNode | ((item: T) => React.ReactNode);
}

/**
 * Conditionally renders an element.
 * Optionally accepts a fallback to show if the condition is false.
 * For simple conditions use a boolean.
 *
 * @example
 * // imagine this is a conplex condition
 * const condition = foo && bar;
 * <Show when={condition}>
 *     <p>Hello World</p>
 * </Show>
 *
 * // with Fallback
 * const [user, setUser] = useState(null);
 * useEffect(() => {
 *     getUserAsync(setUser);
 * }, []);
 * <Show when={user} fallback={<div>Loading...</div>}>
 *     {(loadedUer) => <p>{loadedUser.firstName}</p>}
 * </Show>
 *
 * @param props
 * @param props.when The condition to check
 * @param props.fallback The fallback element to render
 * @param props.children The child element to render if the condition is true
 */
function Show<T>(props: ShowProps<T>) {
    // if there is a fallback and the when condition is false
    if (props.fallback && !props.when) {
        return props.fallback;
    }
    // else if the when condition is false dont show it
    if (!props.when) {
        return null;
    }
    // if children is a function provide it the render prop
    if (typeof props.children === "function") {
        return props.children(props.when);
    }
    // otherwise return children
    return props.children;
}

export { Show };
