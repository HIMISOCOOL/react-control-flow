import React from "react";

export interface MatchProps<T> {
    when: T | false;
    children: React.ReactNode | ((item: T) => React.ReactNode);
}

/**
 * A Match case specifically for use inside a Switch Element.
 * @param props
 * @param props.when The case for when this should show
 * @param props.children The child to render for this Match case
 */
function Match<T>(
    props: MatchProps<T>
) {
    // if there are no children render null
    if (props.children === undefined) {
        return null;
    }
    // if children is a function give it the render props
    if (props.when && typeof props.children === "function") {
        return props.children(props.when);
    }
    // otherwise return children
    return props.children;
}

export { Match };
