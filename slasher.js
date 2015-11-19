// Bonfire: Slasher Flick
// Author: @praxitelis
// Challenge: http://www.freecodecamp.com/challenges/bonfire-slasher-flick?solution=function%20slasher(arr%2C%20howMany)%20%7B%0A%20%20%20%20%2F%2F%20it%20doesn%27t%20always%20pay%20to%20be%20first%0A%20%20%20%20%0A%20%20%20%20%22use%20strict%22%3B%0A%0A%20%20%20%20var%20array%3B%0A%20%20%20%20%0A%20%20%20%20array%20%3D%20arr.slice(howMany%2C%20arr.length)%3B%0A%0A%20%20%20%20return%20array%3B%0A%7D%0A%0Aslasher(%5B1%2C%202%2C%203%5D%2C%202)%3B%0A
// Learn to Code at Free Code Camp (www.freecodecamp.com)

function slasher(arr, howMany) {
    // it doesn't always pay to be first
    
    "use strict";

    var array;
    
    array = arr.slice(howMany, arr.length);

    return array;
}

slasher([1, 2, 3], 2);