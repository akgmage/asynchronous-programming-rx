/* 
    loops become useless to us, so we need to find a way of repeating actions
    and processing streams of data as they come in without using loops.
*/
[1, 2, 3].forEach((x) => console.log(x));
// outputs : 1 2 3

/* 
    Map : if you wanna transform every item in a collection and put it into a new collection then use map
    dont change original array, create whole new array
*/
[1, 2, 3].map((x) => x + 1);
// outputs : [2, 3, 4]

/* 
    Filter : apply a function to every item in the array, difference is this function is a test function,
    instead of transforming the value its going to apply a test to every single value, and only if the 
    value passes the test, will it make it to the new collection

*/
[1, 2, 3].filter((x) => x > 1);
// outputs : [2, 3]
