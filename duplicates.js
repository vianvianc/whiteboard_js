//Remove duplicate members of an array

// Create an array to store values that have been parsed over at least once in a loop; "duplicates array"
/* Generate a loop that will go through all the elements in the array. Elements parsed through
   only once will be stored in the duplicates array. */
/* Loop will have conditional statement to return new array of elements only if they aren't within
duplicates array. */
// return unique elements array.
// Log unique elements



// Create an array to store values that have been parsed over at least once in a loop; "uniques array"
let uniqueArr = [];
/* Generate a loop that goes through all the elements in the array. Elements parsed through only once will be stored in the uniques array. */
function removeDuplicates(arr) {
    /* Loop will have conditional statement to return new array of elements only if they aren't within uniques array. */
    return arr.filter(function(element, index){
        if (uniqueArr.indexOf(element) == -1) {
            uniqueArr.push(element);
            return element;
        }
    });
}
comsole.log(removeDuplicates(["test", "test", true, 1,1,3,-7,10,5]));
