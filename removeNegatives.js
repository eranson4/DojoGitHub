// Debug the following code that removes negative values from an array

/*
function removeNegatives(arr) {
    for(var i=0; i<=arr.length; i++) {
        if(arr[i] =< 0) {
            arr[j] = arr.pop();
            i--;
        }
    }
    return array;
}

export function main() {
  var result = removeNegatives([3, 7, -23, 0, 2.5, -4]);
  console.log(result);
}
*/

// Debugged
function removeNegatives(arr) {
    var result = [];
    for(var i = 0; i <= arr.length-1; i++) {
        if(arr[i] >= 0) {
            result.push(arr[i]);
        }
    }
    return result;
}

var result = removeNegatives([3, 7, -23, 0, 2.5, -4]);
console.log(result);