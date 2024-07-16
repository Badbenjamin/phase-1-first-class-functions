function receivesAFunction(callbackFunction) {
    callbackFunction();
}

function returnsANamedFunction() {
    function namedFunction() {}
    return namedFunction;
}

function returnsAnAnonymousFunction(){
    return () => {

    }
}

const sum = (num1, num2) => num1 + num2;

console.log(sum(2, 3));