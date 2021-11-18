function displayType<T, U>(id:T, name:U): void {

    id.toString(); // OK for non strict mode
    name.toString(); // OK for non strict mode

    id.toFixed();  // Compiler Error: 'toFixed' does not exists on type 'T'
    name.toUpperCase(); // Compiler Error: 'toUpperCase' does not exists on type 'U'

    console.log(typeof(id) + ", " + typeof(name));
}

function displayNames<T>(names:T[]): void {
    console.log(names.join(", "));
}

displayNames<string>(["Steve", "Bill"]); // Steve, Bill