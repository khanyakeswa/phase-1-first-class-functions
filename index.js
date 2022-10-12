function receivesAFunction(func) {
    return func();
}

function returnsANamedFunction() {
    return function func() {};
}

function returnsAnAnonymousFunction() {
    return function () {};
}