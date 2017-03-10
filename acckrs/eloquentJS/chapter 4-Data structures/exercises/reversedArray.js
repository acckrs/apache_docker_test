function reverseArray(arr) {
    revArr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        revArr.push(arr[i]);
    }

    return revArr;
}

function reverseArrayInPlace(arrayValue){
    len=arrayValue.length-1;
    for (var i=0;i<=len/2;i++){
        var inter;
        inter=arrayValue[i];
        arrayValue[i]=arrayValue[len-i];
        arrayValue[len-i]=inter;

    }
return arrayValue;

}

var arrayValue=["a","b","c","d"];
console.log(arrayValue);
console.log(reverseArrayInPlace(arrayValue));
console.log(arrayValue);
//console.log(reverseArray(arrayValue));