//Async: Now and later
/*function myNumber(number) {
    console.log(`My number is ${number}.`);
    return number;
}
myNumber(10);

function byFour(number) {
    let result = number * 4;
    console.log(result);
}
byFour(5);

let callSecondfunction = myNumber(10);

setTimeout(() => {
    byFour(callSecondfunction);
}, 2000);*/

/*
//Callbacks
function getWords() {
    console.log('Hi');
setTimeout(() => {
    console.log('Coding!');
}, 3000);
setTimeout(() => {
    console.log('Love');
}, 2000);
setTimeout(() => {
    console.log('I');
}, 1000);
setTimeout(() => {
    console.log('Everyone,');
}, 0);
}
getWords();
*/


/*
function countdown(num, callback) {
    for (let i = num; i >= 1; i--) {
        setTimeout(() => {
            console.log(i);
            if (i === 1) {
                return callback();
            }
        }, 1000);
    }
};
function finalCountDown() {
    console.log('Awesome!')
};
countdown(10, finalCountDown);*/


//Promises
var noMore = false;
let orderingChickenSandwich = new Promise(
    function (resolve, reject) {
        if (noMore !== true) {
            let food = {
                sandwich: 'chicken',
                veggies: 'lettuce'
            };
            resolve(food);
        } else {
            let err = new Error('No More!');
            reject(err);
        }
    }
);
var order = function () {
    orderingChickenSandwich
        .then(food => {
            console.log(food);
        })
        .catch(err => {
            console.log(err);
        });
}
order();




//Chaining Promises
let promiseChain = new Promise((resolve, reject) => {
    setTimeout(() => {
        let number = 1;
        resolve(number);
    }, 2000);
})
    .then((number) => {
        console.log(number);
        let number2 = number * 2;
        return number2;
    })
    .then((number2) => {
    console.log(number2);
    let number3 = number2 * 4;
    return number3;
})
    .then((number3) => {
    console.log(number3);
    let number4 = number3 * 6;
    console.log(number4);
});





/*let global = true;

let orderingChickenSandwhich = new Promise(function(resolve, reject) {
 
    if (global === true) {
        let these = {sandwhich: chichken, veggies: lettuce};
        resolve(these);
    } else {
        let err = new Error('Oops!');
        reject(err);
    }
});

function orderFood() {
    
}*/

