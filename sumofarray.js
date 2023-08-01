
function sumOfArray(arr){
    let sum=0;
    if(!Array.isArray(arr)){
        throw new Error(" Need array type")
    }
      for (let i = 0; i < arr.length; i++) {
            if (Number.isInteger(arr[i])) {
            sum += arr[i];
        }else{
            throw new Error("Array must contain only integers.")
        }
    }
    return sum;
}
const inputArray=[3,6,5,8,4]
const output=sumOfArray(inputArray)
console.log('sum of array -->',output)