function sum(rangeArr) {
    sum = 0;
    for (var i = 0; i < rangeArr.length; i++) {
        sum += rangeArr[i];
    }
    return sum;
}

function range(start, end, step) {
    var rangeArr = [],
       

    if (start <= end) {
        for (var i = start; i <= end; i++) {
            rangeArr.push(i);
          
        }
    } else {
        for (var i = start; i >= end; i--) {
            rangeArr.push(i);
          
        }
    }



    return rangeArr;
}

console.log(sum(range(2, 4)));