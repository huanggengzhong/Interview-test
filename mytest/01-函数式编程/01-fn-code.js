// 遍历数组并打印
// 1.遍历
let forEach = function (array, action) {
    for (let index = 0; index < array.length; index++) {
        action(array[index])
    }
}
// 2.打印

let logItem = function (item) {
    console.log(item)
}

// 3.使用
forEach([1, 2, 3, 5], logItem)

// let abc;
// abc = "abc" + 123;

const gogo = function (str) {
    return `hi${str}`;

}

let a = 32;
let str1 = 'jspang';
str = a === 32 ? "刘英" : "谢大脚";