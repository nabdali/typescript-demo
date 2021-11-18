const [state, setState] = React.useState({
    foo: 1,
    bar: 2,
}); // state's type inferred to be {foo: number, bar: number}

const someMethod = (obj: typeof state) => {
    // grabbing the type of state even though it was inferred
    // some code using obj
    setState(obj); // this works
};