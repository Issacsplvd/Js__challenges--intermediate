
// SOLUTION 1: FOR LOOPS
/*
function filterOutFalsy(arr){
    let newArr = []
    for(i=0; i< arr.length; i++){
            newArr.push(!!arr[i])
    }
    return newArr
}
console.log(filterOutFalsy(['Oranges', 'Apple', 'Bananas', 0, null, undefined]))
*/

// SOLUTION 2: ARR.FILTER

function convertToBoolean(arr){
    return arr.map(elem => !!elem)
}

console.log(convertToBoolean(['Bananas', '', undefined, null, 0, 'Orange']))

