/* 
    loops become useless to us, so we need to find a way of repeating actions
    and processing streams of data as they come in without using loops.
*/
[1, 2, 3].forEach((x) => console.log(x));
[1, 2, 3].map((x) => x + 1); // dont change original array, create whole new array
