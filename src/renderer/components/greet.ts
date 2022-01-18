function sealed(target: Function, key: string, index: number):any {
    console.log(target, key, index);
}

export class Greeter {
    constructor(
        @sealed private readonly name: string,
        @sealed private readonly lastName: string
    ) {

    }

    greet():void {
        console.log(`Hello ${this.name} ${this.lastName}`);
    }
}