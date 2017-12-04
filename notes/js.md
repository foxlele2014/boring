# javascript

## map function 

- map  Array.prototype.map()
- filter Array.prototype.filter()
- reduce Array.prototype.reduce()


## definition & syntax

- map

```javascript (type)
let newArr = oldArr.map((val,index,arr)=>{
	//return element to new array
})

eg:

const arr = [1,2,3,4];
let newArr = arr.map((val,index,item)=>{return val+1;});

//result:
(4) [2, 3, 4, 5]



newArr = arr.map((val,index,item)=>{console.log(item);});
VM220:1 (4) [1, 2, 3, 4]
VM220:1 (4) [1, 2, 3, 4]
VM220:1 (4) [1, 2, 3, 4]
VM220:1 (4) [1, 2, 3, 4]
(4) [undefined, undefined, undefined, undefined]

```

- filter

```javascript (type)
let newArr = oldArr.filter((val,index,arr)=>{
	//return true or false;
});

eg:

const arr = [1,2,3,4];
let newArr = arr.filter(val=>{return val%2 == 0;});
(2) [2, 4]

```

- reduce

```javascript (type)
let newArr = oldArr.reduce((acc,val,index,arr)=>{
	//acc 循环操作的中间量
	//initValue ,acc的初始值
},initValue);


eg:
const arr = [1,2,3,4];
let newArr = arr.reduce((acc,val,index,item)=>{return acc+val});
10

newArr = arr.reduce((acc,val,index,item)=>{console.log(acc); return acc+val});
VM886:1 1
VM886:1 3
VM886:1 6
10

newArr = arr.reduce((acc,val,index,item)=>{console.log(acc); return acc+val},100);
VM893:1 100
VM893:1 101
VM893:1 103
VM893:1 106
110

```

> [map function](https://codeburst.io/learn-understand-javascripts-map-function-ffc059264783)

> [filter function](https://codeburst.io/learn-understand-javascripts-filter-function-bde87bce206)

> [reduce function](https://codeburst.io/learn-understand-javascripts-reduce-function-b2b0406efbdc)



## Object
第一次使用`Object.keys`
遍历对象，并且获取到key


## Function











































