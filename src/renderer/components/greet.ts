function sealed(target: Function, key: string, index: number):any {
    // Ensure use of decorator
    //console.log(target, key, index);
}

export class Greeter {
    constructor(
        @sealed private readonly name: string,
        @sealed private readonly lastName: string
    ) {

    }

    greet = () => {
        var div = document.createElement('div');
        document.body.appendChild(div);
        div.innerHTML = `Hello ${this.name} ${this.lastName}`;
    }
}