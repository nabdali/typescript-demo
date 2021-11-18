function displayType<T, U>(id:T, name:U): void {
    console.log(typeof(id) + ", " + typeof(name));
}

displayType<number, string>(1, "Steve"); // number, string


function displayTypeWithNoGenericType<T>(id:T, name:string): void {
    console.log(typeof(id) + ", " + typeof(name));
}

displayTypeWithNoGenericType<number>(1, "Steve"); // number, string