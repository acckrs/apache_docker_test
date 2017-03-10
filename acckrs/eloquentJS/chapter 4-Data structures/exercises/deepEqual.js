function deepEqual(val1, val2) {
    if (typeof (val1) == typeof (val2)) {
        if (typeof (val1) === "object") {
            console.log("Objekti");
            var propsInA = 0,
                propsInB = 0;

            for (var prop in val1) {
                propsInA += 1;
            }
            for (var prop in val2) {
                propsInB += 1;
                if (!(prop in val1) || !(deepEqual(val1[prop], val2[prop])))
                    return false;
            }
            return propsInA === propsInB;

        } else //jeste objekat
            if (val1 === val2) {
                console.log("nije objekat");
                return true;
            } else {
                console.log("nije objekat");
                return false;
            }
    } else
        return false
}

var val1 = 4,
    val2 = 3;
var obj = {
    here: {
        is: "an"
    },
    object: 2
};
//console.log(deepEqual(val1, val2));
console.log(deepEqual(obj, obj));
// → true
/*console.log(deepEqual(obj, {
    here: 1,
    object: 2
}));
// → false
console.log(deepEqual(obj, {
    here: {
        is: "an"
    },
    object: 2
}));
// → true*/