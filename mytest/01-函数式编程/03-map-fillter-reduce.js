let daysWeek = [{
        name: 'Monday',
        value: '一'
    },
    {
        name: 'Tuesday',
        value: '二'
    },
    {
        name: 'Sunday',
        value: '日'
    }
]
// 过滤value值, 普通方法
// let weekValue = []
// daysWeek.forEach(element => {
//     weekValue.push(element.value)
// })
// console.log(weekValue) //["一","二","日"]
// console.log(daysWeek.map(v => v.value));

//fillter

let arr = [1, 2]
// 普通方法
// let fillterNumber = function (array) {
//     return array.filter(v => v > 0)
// }
// console.log(fillterNumber(arr)); //[1,2]
// console.log(fillterNumber(arr)); //[1,2]
// fillter方法

// let sum = function (array) {
//     return array.reduce((a, b) => a * b);
// }
// console.log(sum([1, 2]));

// 多个数组的合并:多个数组的合并,非常灵活

let mergeArray = (...array) => [].concat(...array);

console.log(mergeArray([1, 2, 3], [4, 5, 6], [7, 8, 9])); //[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]