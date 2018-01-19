const timer = (i) => {
    setTimeout(() => {
        console.log(i);
    },2000);
}

const cycle = () => {
    for(let i = 0 ; i < 10 ;i++) {
        timer(i);
    }
}

const test = () =>{
    for(let i = 0 ; i < 10 ;i++) {
        setTimeout(() => {
            console.log(i);
        },2000);
    }
    console.log(i);//i is not defined
}

function test2() {
    for(let i = 0; i< 6 ;i++) {
        debugger;
        setTimeout(function aaa() {
            console.log(i);
        },2000);
    }
}

function test3() {
    for(var i = 0; i< 6 ;i++) {
        setTimeout(function aaa() {
            console.log(i);
        },2000);
    }
}

const test4 = () => {
    for(var i = 0; i< 6 ;i++) {
        setTimeout(function aaa() {
            console.log(i);
        },2000);
    }
}

const test5 = () => {
    for(var i = 0 ; i < 6 ; i++) {
        (function(i) {
            setTimeout(function aaa () {
                console.log(i);
            },2000);
        })(i);
    }
}

function showBiBao() {
    for (var i = 0; i < 5; i++) {
      setTimeout( function timer() {
          console.log(i);//5
      }, 1000 );
    }
    console.log(i)//5
}

const test6 = () => {
    let k = 10;

    const test7 = (t) => {
        return k+t;
    }

    k = 20;

    return test7;
}

const test8 = () => {
    const k = {a:'111'};

    const test9 = (b) => {
        return Object.assign({},k,b);
    }

    return test9;

}

const test10 = () => {
    const k = 1;

    const test = (fn) => {
        fn(k);
    }

    return test;
}


//值传递，引用传递
const test11 = () => {
    const k = {a:1,b:2}
    const t = 2;

    const test = (fn) => {
        fn(k,t);
    }

    return test;
}


const aaa  = test11();

aaa((c,t) => {
    console.log(c,t);
})

aaa((c,t) => {
    c.c = 3;
    //测试第二次使用test11的时候，k是否会变。
    //
    t = 10;
    console.log(c,t);
});

aaa((c,t) => {
    console.log(c,t);
})






const q = test6();

const res = q(20);

console.log(res);



// 会输出什么
showBiBao()
test2();
test3();

cycle();
test();


//经典的闭包问题，因为let是有块作用域的，所以这里居然是正常输出。。
//它是for循环结束了之后才执行setTimeout的。那么用let是如何存起i 变量的呢？？
//每次循环都是一个新的块= =。（就是说每次都需要重新声明赋值
//上面代码中，变量i是let声明的，当前的i只在本轮循环有效，所以每一次循环的i其实都是一个新的变量，所以最后输出的是6。你可能会问，如果每一轮循环的变量i都是重新声明的，那它怎么知道上一轮循环的值，从而计算出本轮循环的值？这是因为 JavaScript 引擎内部会记住上一轮循环的值，初始化本轮的变量i时，就在上一轮循环的基础上进行计算。
//http://es6.ruanyifeng.com/#docs/let