//pretvori niz u listu
function arrayToList(arr) {
    var list = null;
    for (var i = arr.length - 1; i >= 0; i--) {
        list = {
            value: arr[i],
            rest: list
        };
    }
    return list;
};

//pretvori listu u niz
function listToArray(list) {
    var arr = [];
    for (var node = list; node; node = node.rest) {
        arr.push(node.value);
    }
    return arr;
}

//dodaj element u listu
function prepend(element, list) {
    return {
        value: element,
        rest: list
    };
}

//Pronadji n-ti element
function nth(list, n) {
    if (!list)
        return undefined;
    else if (n == 0)
        return list.value;
    else
        return nth(list.rest, n - 1);
}


var newList = {
    "value": 1,
    "rest": {
        "value": 2,
        "rest": {
            "value": 3,
            "rest": null
        }
    }
};
console.log(prepend(10, prepend(20, null)));
console.log(prepend(4, newList));


var testArr = [10, 20, 30];
console.log(arrayToList(testArr));
console.log(listToArray(arrayToList(testArr)));
console.log(nth(arrayToList([10, 20, 30]), 1));