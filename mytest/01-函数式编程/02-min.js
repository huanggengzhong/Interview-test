// let findMinArray = function (array) {
//     let minValue = array[0]
//     for (let index = 0; index < array.length; index++) {
//         if (minValue > array[index]) {
//             minValue = array[index]
//         }

//     }
//     return minValue;
// }
// console.log(findMinArray([8, 6, 4, 5, 9]));

const minValue = array => Math.min(...array)

minValue([8, 6, 4, 5, 9]);