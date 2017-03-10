function sum(rangeArr) {
    sum = 0;
    for (var i = 0; i < rangeArr.length; i++) {
        sum += rangeArr[i];
    }
    return sum;
}

function range(start, end, step) {
    var rangeArr = [];
    if (!step /*Ako nema koraka*/ ) {
        if (start <= end) {
            for (var i = start; i <= end; i++) {
                rangeArr.push(i);
            }
        } else {
            for (var i = start; i >= end; i--) {
                rangeArr.push(i);
            }
        }
    } else /*Ako ima koraka*/ {
        if (start <= end) { /*Ako je prvi broj manji*/
            if (step < 0) { /*Ako smo greskom stavili step da bude negativan*/
                for (var i = start; i <= end; i -= step) {
                    rangeArr.push(i);
                }
            } else { /*Ako je prvi broj veci*/
                for (var i = start; i <= end; i += step) {
                    rangeArr.push(i);
                }
            }
        } else {
            if (step < 0) {
                for (var i = start; i >= end; i += step) {
                    rangeArr.push(i);
                }
            } else {
                for (var i = start; i >= end; i -= step) {
                    rangeArr.push(i);
                }
            }
        }
    }


    return rangeArr;
}

console.log(sum(range(2, 4, -1)));