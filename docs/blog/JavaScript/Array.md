## Description描述

略。



## Constructor构造函数

### Array()



## Static properties静态属性

### Array.from()

```javascript
Array.from(arrayLike[,mapFn[,this.Arg]])
```



### Array.isArray()

```js
Array.isArray(Array.prototype); //true
Array.isArray(new Uint8Array(32)); //false
```

> 在检查 Array 实例时，使用 Array.isArray 优先于 instanceof，因为它可以通过 iframe 工作。



### Array.of()

```js
Array.of(7); // [7]
Array(7); // array of 7 empty slots

Array.of(1, 2, 3); // [1, 2, 3]
Array(1, 2, 3);    // [1, 2, 3]
```



## Instance properties 实例属性

### Array.prototype.length

Length 属性的值是一个带正号的整数，其值小于2的32次方(2 ^ 32)。



## Instance methods 实例方法

### Array.prototype.at()

```js
const array1 = [5, 12, 8, 130, 44];
array1.at(-2) //130
array1[-2] //undefind
```



### Array.prototype.concat()

合并多个数组。不改变原数组，返回新数组。

引用保留。

```js
const num1 = [[1]];
const num2 = [2, [3]];
const numbers = num1.concat(num2);

console.log(numbers); // results in [[1], 2, [3]]

// modify the first element of num1
num1[0].push(4);

console.log(numbers); // results in [[1, 4], 2, [3]]
```



### Array.prototype.copyWithin()

浅复制数组的一部分到同一个数组中的另一个位置，并返回它，不会改变原数组的长度。

```js
array.copyWithin(target,(start = 0),(end = this.length))
```



### Array.prototype.entries()

返回一个新的 Array Iterator 对象，该对象包含数组中每个索引的键/值对。

```js
const a = ["a", "b", "c"];

for (const [index, element] of a.entries()) {
  console.log(index, element);
}

// 0 'a'
// 1 'b'
// 2 'c'
```



### Array.prototype.every()

测试数组中的所有元素是否通过由提供的函数实现的测试。它返回一个布尔值。

```js
array.every(function(currentValue,index,arr),thisArg)
```

> 注意: 对空数组调用此方法对于任何情况都将返回 true！
>
> 动态改变元素会影响callbackFn调用



### Array.prototype.fill()

用一个静态值填充数组从开始索引到终止索引内所有元素，不包括终止索引。

返回修改后数组。

mutator方法：修改原数组

```js
arr.fill(value,(start = 0),(end = this.length))
```

> 如果第一个参数是一个对象，数组中的每个槽将引用该对象。



### Array.prototype.filter()

返回一个新数组，其包含通过所提供函数实现的测试的所有元素.

不会改变调用它的数组。

```js
let newArray = array.filter(function(currentValue, index, arr), thisArg)
```

> 动态改变元素会影响callbackFn调用



### Array.prototype.find()

返回提供的数组中满足提供的测试函数的第一个元素。如果没有值满足测试函数，则返回 undefined。

```js
let ele = array.find(function(element, index, arr), thisArg)
```

> 动态改变元素会影响callbackFn调用



### Array.prototype.findIndex()

返回数组中满足提供的测试函数的第一个元素的索引。否则，它返回 -1。

```js
let eleIndex = array.findIndex(function(element, index, arr), thisArg)
```

> 动态改变元素会影响callbackFn调用



### Array.prototype.flat()

返回一个包含所有子数组元素的新数组，递归地连接到该数组中，直到指定的深度。

```js
arr.flat((depth = 1))
```

1. ```js
   arr.flat(Infinity) //多层嵌套转一维
   ```

2. flat可以删除数组中空槽。



Alternatives替代品:

```js
const arr = [1, 2, [3, 4]];

arr.flat();
arr.reduce((acc, val) => acc.concat(val), []);
// [1, 2, 3, 4]

const flattened = arr => [].concat(...arr);
// ======
const arr = [1, 2, [3, 4, [5, 6]]];

function flatDeep(arr, d = 1) {
   return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
                : arr.slice();
};

flatDeep(arr, Infinity);
// [1, 2, 3, 4, 5, 6]

```



### Array.prototype.flatMap()

将给定的回调函数应用于调用数组的每个元素，然后将结果平坦化一个级别，从而返回一个新数组。

> 映射期间添加删除不会影响



### Array.prototype.forEach()

返回值 undefined

```js
array.forEach(function(element,index,arr),thisArg)
```

> 动态改变元素会影响callbackFn调用
>
> 空值会被跳过



### Array.prptprype.includes()

确定数组在其条目中是否包含某个值，并酌情返回 true 或 false。

```js
arr.includes(searchElement,fromIndex = 0)
```

区分类型，但是零的值都被认为是相等的。

比较字符串和字符时，includes ()区分大小写。

如果fromIndex 大于或等于数组的长度，返回false。不会搜索该数组。



### Array.prototype.indexOf()

返回数组中可以找到给定元素的第一个索引，如果不存在，则返回 -1。

```js
array.indexOf(serchElement, fromIndex = 0)
```

indexOf()不能识别`NaN`



### Array.prototype.lastIndexOf()

方法返回给定元素可以在数组中找到的最后一个索引，如果不存在则返回 -1。向后搜索数组，从 fromIndex 开始。

```js
arr.lastIndexOf(serchElement, fromIndex = arr.length - 1)
```



### Array.prototype.join()

通过连接数组(或类似数组的对象)中的所有元素，以逗号或指定的分隔符字符串分隔，创建并返回一个新字符串。如果数组只有一个项，则不使用分隔符返回该项。

```js
arr.join(separator = ',')
```



### Array.prototype.keys()

返回一个新的 Array Iterator 对象，该对象包含数组中每个索引的键。

```js
//键迭代器不忽略漏洞
const arr = ['a', , 'c'];
const sparseKeys = Object.keys(arr);
const denseKeys = [...arr.keys()];
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys);  // [0, 1, 2]
```



### Array.prototype.map()

返回一个新数组，其中填充了对调用数组中的每个元素调用提供的函数的结果。

```js
let newArray = array.map(function(currentValue, index, arr), thisArg)
```



### Array.prototype.pop()

从数组中删除最后一个元素并返回该元素。此方法更改数组的长度。

```js
arr.pop();
// 当数组为空返回undefined
```



### Array.prttotype.push()

将一个或多个元素添加到数组末尾，并返回数组的新长度。

```js
arr.push(element1,...,elementN)
```



### Array.prototype.reduce()

对数组中的每一个元素执行一个由你提供的**reducer**函数（升序执行），将其结果汇总为单个返回值。

```js
arr.reduce((function(previousValue, currentValue, currentIndex, array), initialValue)
```



### Array.prototype.reduceRight()

从右向左累加，同上。



### Array.prototype.reverse()

就地反转数组。并返回该数组。

```js
arr.reverse()
```



### Array.prototype.shift()

从数组中删除**第一个**元素并返回被删除的元素。此方法更改数组的长度。

```js
arr.shift()
```

如果数组为空返回undefined



### Array.prototype.slice()

返回一个新的数组，由`begin`和`end`决定的原数组的**浅拷贝**（包括begin，不包括end）。

```js
arr.slice([begin = 0 [,end = arr.length]])
```



### Array.prototype.some()

测试数组中是否至少有一个元素通过由提供的函数实现的测试。返回一个Boolean类型的值，不修改数组。。

```js
array.some(function(currentValue, index ,arr),thisArg)
```



### Array.prototype.sort()

对数组的元素进行排序并返回已排序的数组。默认的排序顺序是升序，构建在将元素转换为字符串之后，然后比较它们的 utf-16代码单位值序列。

```js
arr.sort([compareFunction])
```

> 自第10版(或 EcmaScript 2019)以来，规范规定 arry.prototype.sort 是稳定的。



### Array.prototype.splice()

通过删除或替换现有元素和/或添加新元素来更改数组的内容。并以数组的形式返回被修改的内容。

```js
array.splice(start,deleteCount,item1,...,itemX)
```



### Array.prototype.toLocaleString()

返回一个表示数组元素的字符串。元素使用 toLocaleString 方法转换为 String，这些 String 由特定于语言环境的 String (例如逗号“ ,”)分隔。

```js
arr.toLocaleString([locales][, options]);
```

Examples:

```js
const prices = ['￥7', 500, 8123, 12];
prices.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' });

// "￥7,￥500,￥8,123,￥12"
```



### Array.prototype.toString()

返回表示指定数组及其元素的字符串。

```JS
arr.toString()
```



### Array.prototype.unshift()

将一个或多个元素添加到数组的开头，并返回数组的新长度。

```js
arr.unshift(element1,...,elementN)
```



### Array.prototype.values()

返回一个新的数组迭代器对象，其中包含数组中每个索引的值。

> 数组迭代器对象是一个使用或临时对象
>
> ```js
> const arr = ['a', 'b', 'c', 'd', 'e'];
> const iterator = arr.values();
> for (let letter of iterator) {
>   console.log(letter);
> } //"a" "b" "c" "d" "e"
> for (let letter of iterator) {
>   console.log(letter);
> } // undefined
> ```

> 如果数组中的值改变了，那么数组迭代器对象值也会改变。
