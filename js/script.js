// Task 1
const letterArr = ['a', 'b', 'c', 'd'];

// console.log(`${letterArr[0]}+${letterArr[1]},${letterArr[2]}+${letterArr[3]}`);
// console.log(letterArr.shift() +  '+' + letterArr.splice(0, 1, 'b') + ',' + letterArr.splice(1, 1, 'c') + '+' + letterArr.pop());
// console.log(letterArr.shift() +  '+' + letterArr.splice(0, 1) + ',' + letterArr.splice(0, 1) + '+' + letterArr.pop());
// console.log(letterArr.shift() +  '+' + letterArr.shift() + ',' + letterArr.shift() + '+' + letterArr.shift());

const halfOfLetterArr = letterArr.splice(2, 2);
const joiner = arr => arr.join('+'); 
const str = `${joiner(letterArr)},${joiner(halfOfLetterArr)}`;
console.log(str);

// Task 2
const numArr = [2, 5, 3, 9];

// const result = (numArr.shift() * numArr.shift()) + (numArr.shift() * numArr.shift());
// console.log(result);

const halfOfnumArr = numArr.splice(2, 2);

const multiplyer = function(arr) {
    const mult = arr.reduce((currentItem, item) => currentItem * item);
    return mult;
}

const result = multiplyer(numArr) + multiplyer(halfOfnumArr);
console.log(result);

// Task 3
const subArr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
const numberFour = subArr.flat(2).find(item => item === 4);
console.log(numberFour);

// Task 4
const someObj = {
    js: ['jQuery', 'Angular'], 
    php: 'hello', 
    css: 'world'
};

const someStr = someObj.js.splice(0, 1).join('');
console.log(someStr);

// Task 5
const foo = function(symb, amount) {
    const arr = [];

    for(i = 0; i < amount; i++) {
        arr.push(symb)
        symb += symb[0];
    }

    return arr;
} 
console.log(foo('x', 5));

// Task 6
const foo2 = function(amount) {
    const arr = [];

    for(i = 1; i <= amount; i++) {
        let str = '';

        for(j = 0; j < i; j++) {
            str += i;
        }
        arr.push(str);
    } 

    return arr;
}
console.log(foo2(5));


// Task 7
const arrayFill = function(elem, amounthOfElem) {
    const newArr = [];

    for(let i = 0; i < amounthOfElem; i++) {
        newArr.push(elem);
    }

    return newArr;
}
console.log(arrayFill('x', 5));

// Task 8 
const randomArr = [0, 3, -4, 1, 3, 2, 2, 1, 6, 1, 8];

function getLengthSumMoreTen(arr) {
    const sumMoreTenArr = [];
    let sum = 0;
    
    for(let item of arr) {
        sum += item;
        sum <= 10 ? sumMoreTenArr.push(item) : sumMoreTenArr;
    }

    return sumMoreTenArr.length + 1;
}

const result2 = getLengthSumMoreTen(randomArr);
console.log(result2);

// Task 9
const orderedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getReverseArray(array) {
    let revArr = [];

    for(let i = array.length - 1; i >= 0; i--) {
        revArr.push(array[i]);
    }

    return revArr;
}

console.log(getReverseArray(orderedArr));

// Task 10
const multiArr = [[1, 2, 3], [4, 5], [6]];
const sumOfElem = multiArr.flat(Infinity).reduce((currentElem, item) => item + currentElem);
console.log(sumOfElem);

// Task 11
const superMultiArr =  [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

const getSimpleArr = function(arr) {
    let result = [];

    for(let elem of arr) {

        if(Array.isArray(elem)) {
            result = result.concat(getSimpleArr(elem));
        } else {
            result.push(elem);
        }
    }

    return result;
}

const simpleArr = getSimpleArr(superMultiArr);
const sum = simpleArr.reduce((currentValue, item) => currentValue + item);

console.log(sum);