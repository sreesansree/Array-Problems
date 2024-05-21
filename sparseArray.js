
/* 
   ------------
 | SPARSE ARRAY |
   ------------
   A sparse array is an array in which the majority of elements have not been assigned values, 
   typically containing a large number of undefined or empty elements */


const sparseArray = [];
sparseArray[1] = 'apple';
sparseArray[3] = 'orange';
sparseArray[6] = 'banana';

console.log(sparseArray);
console.log(sparseArray.length);

// Output: [ <1 empty item>, 'apple', <1 empty item>, 'orange', <2 empty items>, 'banana' ]


