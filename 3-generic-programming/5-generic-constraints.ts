class Person {
    firstName: string;
    lastName: string;

    constructor(fname:string,  lname:string) {
        this.firstName = fname;
        this.lastName = lname;
    }
}

function display<T extends Person>(per: T): void {
    console.log(`${ per.firstName} ${per.lastName}` );
}
var per = new Person("Bill", "Gates");
display(per); //Output: Bill Gates

display("Bill Gates");//Compiler Error