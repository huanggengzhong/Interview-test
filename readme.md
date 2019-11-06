#### 一.预解析
##### 预解析的规律:
1.把变量的声明提升到当前作用域的最前面,只会提升变量的声明,不会提升赋值;
2.把函数的声明提升到当前作用域的最前面,只会提升函数的声明,不会提升调用;
3.在同一级作用域里存在变量声明和函数声明,优先会提升变量声明;

演示代码1:

```js
var a = 25;
function abc (){
  alert(a);//undefined
  var a = 10;
}
abc();
console.log(a);//25
function a() {
  console.log('aaaaa');//没有调用,不会执行
}
var a = 1;
console.log(a);//1
```

预解析会变为:

```js
var a;
function abc (){
  var a;
  alert(a);//undefined
  a = 10;
}
function a() {
  console.log('aaaaa');//没有调用,不会打印
}
a = 25;
abc();
console.log(a);//25
a = 1;
console.log(a);//1
```

演示代码2:(涉及多个赋值的拆解)

```js
f1();
console.log(c);
console.log(b);
console.log(a);
function f1() {
  var a = b = c = 9;
  console.log(a);
  console.log(b);
  console.log(c);
}
```

预解析后变为:

```js
function f1() {
  //注意多个赋值拆解规律:变量声明第一,最后赋值第二,依次后往前的规律赋值
  var a;
  c=9;
  b=c;
  a=b;

  console.log(a);//9
  console.log(b);//9
  console.log(c);//9
}
f1();
console.log(c);//9
console.log(b);//9
console.log(a);//只有局部f1里才有,全局里没有,直接报错
```

#### 二.对象

##### 1.创建对象的常见四种方法

字面量方法:

```js
    var person = {
        name: "小明",
        age: 18,
        sayHi: function () {
            console.log("hi");
        }
    }
    console.log(person);
```
new Object()创建方法:

```js
  var person =new Object();
    person.name="小明";
    person.age=18;
    person.sayHi=function(){
        console.log("hi");
        
    }
    console.log(person);
```

工厂模式创建对象方法:(是new Object()创建的升级,实际是封装函数后将对象返回出来)

```js
 function createPerson(name,age,logData){
        var person =new Object();
        person.name=name;
        person.age=age;
        person.sayHi=function(){
            console.log(logData);  
        }
        return person;
    }
    var person=createPerson('小明',18,"hi")
    console.log(person);
```
构造函数方法:
```js
    function Person(name,age,logData){
        
        this.name=name;
        this.age=age;
        this.sayHi=function(){
            console.log(logData);  
        }
        console.log(this);//this是对象本身
    }
    var person=new Person('小明',18,"hi")
    console.log(person);
```

构造函数写法两个注意点:

a.函数首字母要大写;

b.要使用new关键字;



##### 2.构造函数new关键字做的四件事

提示:结合工厂函数和构造函数对比发现

a.new会在内存中用new Object()方法创建一个新的空对象;

b.new会让this指向这个心的空对象;

c.执行构造函数,给这个新的空对象添加属性和方法;

d.最后,new会将有值的新对象进行返回;