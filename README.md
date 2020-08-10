# React Control Flow
React control flow is a series of control flow components to make writing jsx in react more declarative.

Written in typescript but usable for all react projects.

Ive always found the way you write conditional elements and loops more syntax heavy than necessary.
```tsx
// loop
items.map((item, index) => (
    <div key={index}>
        <h2>{item.title}</h2>
        {
            // conditionally show element
            item.data
                ? <Component data={item.data} />
                : <p>Loading ...</p>
        }
    </div>
))

// OR if theres more than one case
items.map((item, index) => (
    <div key={index}>
        <h2>{item.title}</h2>
        {
            // IIFIE to have switch inline
            (() => {
                switch (item.type) {
                case 'error':
                    return <Error />;
                case 'offer':
                    return <Offer />;
                case 'success':
                    return <Success />;
                case 'warning':
                    return <Warning />;
                default:
                    return null;
                }
            })()
        }
    </div>
))
```

The components in this library make these cases cleaner to write in JSX for React.

```tsx
<For each={items}>
    {(item, index) => (
        <div key={index}>
            <h2>{item.title}</h2>
            <Show when={item.data} fallback={<p>Loading ...</p>}>
                <Component data={item.data} />
            </Show>
        </div>
    )}
</For>

// OR if theres more than one case
<For each={items}>
    {(item, index) => (
        <div key={index}>
            <h2>{item.title}</h2>
            <Switch on={item.type}>
                <Match when='error'>
                    <Error />
                </Match>
                <Match when='offer'>
                    <Offer />
                </Match>
                <Match when='success'>
                    <Success />
                </Match>
                <Match when='warning'>
                    <Warning />
                </Match>
            </Switch>
        </div>
    )}
</For>
```

While the LOC has increased, the readability is significantly higher.

The examples above are small as they are but you can esily see this stuff get out of hand

## Developers


### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

This is for the _Kitchen Sink_ example page to ensure the components work in a browser environment

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the Library using babel and produces the Typescript Types.

