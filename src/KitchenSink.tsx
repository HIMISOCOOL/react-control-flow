import React from "react";
import { For, Show, Switch, Match } from "./lib";

const KitchenSink = () => {
    const items = ["Foo", "bar", "baz"];
    const complexItems = [
        { Hello: "world" },
        { Hello: "Foo" },
        { Hello: "GoodBye" },
    ];

    const fallback = <p>Loading ...</p>;
    const condition = items[0] && complexItems[1];

    return (
        <div>
            <For each={complexItems}>{(item) => <h1>{item.Hello}</h1>}</For>
            <For each={[]} fallback={fallback}>
                {(item) => <h1>{item}</h1>}
            </For>
            <Show when={condition}>
                <p>Hello World</p>
            </Show>
            <Show when={!condition} fallback={fallback}>
                <p>Hello World</p>
            </Show>

            <Switch on={items[0]}>
                <Match when={"foo"}>
                    <p>It was foo!</p>
                </Match>
                <Match when={"bar"}>
                    <p>It was bar!</p>
                </Match>
            </Switch>

            <Switch on={complexItems[1]} default={fallback}>
                <Match when={"foo"}>
                    <p>It was foo!</p>
                </Match>
                <Match when={"bar"}>
                    <p>It was bar!</p>
                </Match>
            </Switch>
        </div>
    );
};

export { KitchenSink };
