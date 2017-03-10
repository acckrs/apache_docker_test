function logEach(array) {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

function forEach(array, action) {
    for (var i = 0; i < array.length; i++) {
        action(array[i]);
    }
}

function greaterThan(n) {
    return function(m) {
        return m > n;
    };
}
var greaterThan10 = greaterThan(10);
console.log("Testing function greaterThan()...\n  The output is:  " + greaterThan10(11));


function noisey(f) {
    return function(arg) {
        console.log("Calling with ", arg);
        var val = f(arg);
        console.log("Called with", arg, "- got", val);
        return val;
    }
}
noisey(Boolean)(0);

function unless(test, then) {
    if (!test) then();
}

function repeat(times, body) {
    for (var i = 0; i < times; i++) body(i);
}

repeat(5, function(n) {
    unless(n % 2, function() {
        console.log(n + ' is even');
    })
});

var testArr = [1, 2, 3, 4, 5],
    sum = 0;
var testObj = {
    prop1: "value1",
    props2: {
        prop2: "value2",
        prop3: "value3"
    }
};


/*
forEach(testArr, function(number) {
    sum += number;
});
console.log(sum);*/