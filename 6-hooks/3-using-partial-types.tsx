const [state, setState] = React.useState({
    foo: 1,
    bar: 2,
}); // state's type inferred to be {foo: number, bar: number}

// NOTE: stale state merging is not actually encouraged in React.useState
// we are just demonstrating how to use Partial here
const partialStateUpdate = (obj: Partial<typeof state>) =>
    setState({ ...state, ...obj });

// later on...
partialStateUpdate({ foo: 2 }); // this works