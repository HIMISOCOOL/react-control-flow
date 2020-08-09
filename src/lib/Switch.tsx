import React, { useMemo } from "react";

export interface SwitchProps<T> {
    on: T;
    default?: React.ReactNode;
    children: React.ReactNode;
}

/**
 * Renders a Match element when it has the value of on.
 * Optionally accepts a default element to render.
 *
 * @example
 * const randomString = getRandomString();
 * <Switch on={randomString}>
 *     <Match when={'foo'}>
 *         <p>It was foo!</p>
 *     </Match>
 *     <Match when={'bar'}>
 *         <p>It was bar!</p>
 *     </Match>
 * </Switch>
 *
 * // with default element
 * const [item, setItem] = useState('');
 * useEffect(() => {
 *     getItemAsync(setItem);
 * }, []);
 * <Switch on={item} default={<div>Loading...</div>}>
 *     <Match when={'foo'}>
 *         <p>It was foo!</p>
 *     </Match>
 *     <Match when={'bar'}>
 *         <p>It was bar!</p>
 *     </Match>
 * </Switch>
 *
 * @param props
 */
function Switch<T>(
    props: SwitchProps<T>
): React.ReactElement<SwitchProps<T>, any> | null {
    const matches = useMemo(() => {
        return React.Children.toArray(props.children).filter(
            (child) =>
                React.isValidElement(child) && child.props.when === props.on
        );
    }, [props.children, props.on]);

    if (matches.length === 0 && props.default) {
        return props.default as React.ReactElement;
    }

    if (matches.length === 0) {
        return null;
    }

    if (matches.length > 1) {
        console.error(
            `<Switch /> on case matched multiple children: ${props.on}`
        );
    }

    return matches[0] as React.ReactElement;
}

export { Switch };
