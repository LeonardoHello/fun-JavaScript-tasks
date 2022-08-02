const { log } = require('console');
const { performance } = require('perf_hooks');

function isDivBy4(a) {
    if (a % 4 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isDivBy4(9));


function keepItQUiet(a) {
    return a.toLowerCase() + "..."
}
console.log(keepItQUiet("Shhh"));


function isLong(a) {
    if (a.length > 5) {
        return true;
    } else {
        return false;
    }
}
console.log(isLong("Leo"));


function half(a) {
    return a/2;
}
console.log(half(43));


function endsWithT(a) {
    if ((a[a.length - 1] === "t") || (a[a.length - 1] === "T")) {
        return true;
    } else {
        return false;
    }
}
console.log(endsWithT("adamt"));


function average(a, b, c) {
    if ((c>a && a>b) || (b>a && a>c)) {
        return a;
    } else if ((a>b && b>c) || (c>b && b>a)) {
        return b;
    } else if ((a>c && c>b) || (b>c && c>a)) {
        return c;
    } else {
        return "No average";
    }
}
console.log(average(2, 4, 4));


function startsWithR(a) {
    if ((a.charAt(0) === "R") || (a.charAt(0) === "r")) {
        return true;
    } else {
        return false;
    }
}
console.log(startsWithR("Leonardo"));


function parity(a) {
    if (a % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(parity(4214215));


function longer(a, b) {
    if (a.length > b.length) {
        return a + " is longer";
    } else if (b.length > a.length) {
        return b + " is longer";
    } else {
        return a;
    }
}
console.log(longer("Leonardo", "Antonio"));


function oneOrNone(a, b) {
    if ((a == true && b == false) || (a == false && b == true)) {
        return true;
    } else {
        return false;
    }
}
console.log(oneOrNone(false, true));


function endsInLy(a) {
    if (a.lastIndexOf("ly") === (a.length - 2)) {
        return true;
    } else {
        return false;
    }
}
console.log(endsInLy("Leonardoly"));


function funnySound(a, b) {
    let c = a.slice(0, 3) + (b.slice(0, 3)).toLowerCase();
    return c;
}
console.log(funnySound("Leonardo", "Antonio"));


function stringSize(a) {
    if (a.length < 5) {
        return "small";
    } else if (a.length === 5) {
        return "medium";
    } else {
        return "big";
    }
}
console.log(stringSize("Leona"));


function wackyWord(a, b) {
    return a.slice(0, 3) + (b.slice(b.length-2).toLowerCase());
}
console.log(wackyWord("Leonardo", "Antonio"));


function divisible(a, b) {
    if (a % b === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(divisible(21, 7));


function caseChanger(a, b) {
    if (a === true) {
        return b.toUpperCase();
    } else if (a === false) {
        return b.charAt(0) + b.slice(0).toLowerCase();
    } else if (b === true) {
        return a.toUpperCase();
    } else if (b === false) {
        return a.charAt(0) + a.slice(1).toLowerCase();
    }
}
console.log(caseChanger("leonardo", false));


function inRange(min, max, n) {
    if (n > min && n < max) {
        return true;
    } else {
        return false;
    }
}
console.log(inRange(50, 100, 55));


function averageOfFour(a, b, c, d) {
    const arr = [a, b, c, d];
    return (a + b + c + d) / arr.length;
}
console.log(averageOfFour(4, 10, 13, 16));


function larger(a, b) {
    if (a === b) {
        return "even";
    } else if (a > b){
        return a;
    } else {
        return b;
    }
}
console.log(larger(33, 33));


function contains(a, b) {
    if (a.toLowerCase().indexOf(b.toLowerCase()) > 0) {
        return true;
    } else {
        return false;
    }
}
console.log(contains("Leonardo", "Nar"));


function oneToFour() {
    for (let i = 1; i < 5; i++) {
        console.log(i);
    }
}
oneToFour();


function countUp(max) {
    for (let i = 1; i <= max; i++) {
        console.log(i);
    }
}
countUp(5);


function minToMax(min, max) {
    for (min; min <= max; min++) {
        console.log(min);
    }
}
minToMax(31, 40);


function stringIterate(a) {
    for (let i = 0; i < a.length; i++) {
        console.log(a.charAt(i));;
    }
}
stringIterate("Leonardo");


function evens(max) {
    for (let i = 2; i <= max; i += 2) {
        console.log(i);;
    }
}
evens(19);


function fiveMultiplesOf(a) {
    for (let i = 1; i <= 5; i++) {
        console.log(a * i);;
    }
}
fiveMultiplesOf(7);


function sumUpTo(max) {
    let sum = 0;
    for (let i = 1; i <= max; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumUpTo(4));


function noOhs(a) {
    for (let i = 0; i < a.length; i++) {
        if (a.charAt(i) !== "o") {
            console.log(a.charAt(i));
        }
    }
}
noOhs("Leonardo")


function oddSUm(max) {
    let sum = 0;
    for (let i = 1; i <= max; i+=2) {
        sum+=i;
    }
    return sum;
}
console.log(oddSUm(5));


function stringRepeater(str, num) {
    let sum = "";
    for (let i = 0; i < num; i++) {
        sum+=str;
    }
    return sum;
}
console.log(stringRepeater("Leonardo", 2));


function productUpTo(max) {
    let sum = 1;
    for (let i = 1; i <= max; i++) {
        sum*=i;
    }
    return sum;
}
console.log(productUpTo(5));


function divByEither(num1, num2, max) {
    for (let i = 1; i < max; i++) {
        if (i % num1 === 0) {
            console.log(i);
        }
        if ((i % num2 === 0) && (i % num1 !== 0)) {
            console.log(i);
        }
    }
}
divByEither(3, 4, 16);


function divisibleRange(min, max, num) {
    for (let i = min; i <= max; i++) {
        if (i % num === 0) {
            console.log(i);
        }
    }
}
divisibleRange(17, 40, 9);


function reverseIterate(a) {
    for (let i = a.length; i >= 0 ; i--) {
        console.log(a.charAt(i));
    }
}
reverseIterate("Leonardo");


function removeCapitals(a) {
    console.log(a.toLowerCase());
}
removeCapitals("LeonArDo");


function raisePower(base, exponent) {
    let sum = 1;
    for (let i = 0; i < exponent; i++) {
        sum*=base;
    }
    return sum;
}
console.log(raisePower(5, 3));


let string = "";
function censorE(a) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] === "e") {
            string+="*";
        } else {
            string+=a[i];
        }
    }
    return string;
}
console.log(censorE("Leonardo"));


function fizzBuzz(max) {
    for (let i = 1; i <= max; i++) {
        if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
            console.log(i);
        }
    }
}
fizzBuzz(18);


function total(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum+=arr[i];
    }
    return sum;
}
console.log(total([-5, 7, 4, 6]));


function stayPositive(arr) {
    for (let i = (arr.length - 1); i >= 0 ; i--) {
        if (arr[i] < 0) {
            arr.splice(i, 1)
        }
    }
    return arr;
}
console.log(stayPositive([10, -4, 3, 6]));


function bleepVowels(a) {
    let newString = "";
    for (let i = 0; i < a.length; i++) {
        if ((a[i] === "a") || (a[i] === "e") || (a[i] === "i") || (a[i] === "o") || (a[i] === "u")) {
            newString+="*";
        } else {
            newString+=a[i]
        }
    }
    return newString;
}
console.log(bleepVowels("Leonardo"));


function filterLongWords(arr) {
    let newArr = [];
    for (let i =  0; i < arr.length; i++) {
        if (arr[i].length < 5) {
            newArr.push(arr[i])
        }
    }
    return newArr;
}
console.log(filterLongWords(["Leonardo", "Alen", "Antonio", "David", "Ana", "Noa"]));


function numOdds(arr) {
    for (let i = arr.length; i >= 0; i--) {
        if (arr[i] % 2 === 0) {
            arr.splice(i, 1)
        }
    }
    return arr.length;
}
console.log(numOdds([100, 40, 4]));


function stringsToLengths(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i].length);
    }
    return newArr;
}
console.log(stringsToLengths(["on", "off", "handmade"]));


function divisors(a) {
    let arr = []
    for (let i = 0; i <= a; i++) {
        if (a % i === 0) {
            arr.push(i);
        }
    }
    return arr;
}
console.log(divisors(24));


function makeAcronym(a) {
    let newStr = "";
    for (let i = 0; i < a.length; i++) {
        if (a[i] === a[0]) {
            newStr+=a[i].toUpperCase()
        } else if (a[i] === " ") {
            newStr+=a[i+1].toUpperCase()
        }
    }
    return newStr;
}
console.log(makeAcronym("don't over think stuff"));


function reverseArray(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.unshift(arr[i])
    }
    return newArr;
}
console.log(reverseArray([5, 2, 7, 24]));


function chooseDivisibles(numbers, target) {
    for (let i = numbers.length; i >= 0 ; i--) {
        if (numbers[i] % target !== 0) {
            numbers.splice(i, 1);
        }
    }
    return numbers;
}
console.log(chooseDivisibles([4, 25, 1000], 10));


function maximum(arr) {
    if (arr.length === 0) {
        return null
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[0] < arr[i]) {
            arr[0] = arr[i]
        }
    }
    return arr[0];
}
console.log(maximum([5, 6, 5, 2, 12, 15, 21, 1, 5, 5, 3]));


function wordCount(sentence, targetWords) {
    const newSentence = sentence.split(" ");
    let num = 0;
    for (let i = 0; i < newSentence.length; i++) {
        if (targetWords.includes(newSentence[i])) {
            num++;
        }
    }
    return num;
}
console.log(wordCount("can I have that can", ["can", "I"]));


function lengthiestWord(a) {
    let b = a.split(" ");
    let max = b[0]
    for (let i = 1; i < b.length; i++){
        if (max.length <= b[i].length) {
            max = b[i];
        }
    }
    return max;
}
console.log(lengthiestWord("down the rabbit hole"));


function alternatingCaps(a) {
    let b = a.split(" ");
    let c = [];
    for (let i = 0; i < b.length; i++) {
        if (i % 2 !== 0 && i > 0) {
            c.push(b[i].toUpperCase())
        } else {
            c.push(b[i].toLowerCase())
        }
    }
    return c.join(" ")
}
console.log(alternatingCaps("What did ThEy EAT before?"));


function numberRange(min, max, step) {
    const nums = [];
    for (let i = min; i <= max; i+=step) {
        nums.push(i)
    }
    return nums;
}
console.log(numberRange(8, 35, 6));


function removeShortWords(a) {
    let b = a.split(" ");
    for (let i = b.length - 1; i >= 0; i--) {
        if (b[i].length < 4) {
            b.splice(i, 1)
        }
    }
    return b.join(" ")
}
console.log(removeShortWords("run faster that way"));


function commonElements(a, b) {
    for (let i = 0; i < a.length; i++) {
        if (b.includes(a[i])) {

        } else {
            a.splice(i, 1);
        }
    }
    return a;
}
console.log(commonElements(["a", "c", "d", "b"], ["b", "a", "y"]));


function pairPrint(a) {
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length; j++) {
            if (a[i] !== a[j] && i < j) {
                console.log(a[i] + " - " + a[j]);
            }
        }
    }
}
pairPrint(["apple", "banana", "clementine"]);


function printCombinations(a, b) {
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            console.log(a[i] + " " + b[j]);
        }
    }
}
printCombinations(["gray", "cream", "cyan"], ["shirt", "flannel"]);


function twoSum(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (i < j && i !== j && numbers[i] + numbers[j] === target) {
                return true;
            }
        }
    }
    return false;
}
console.log(twoSum([6, 5, 1, 4, 2, 3], 5));


function print2d(a) {
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
            console.log(a[i][j]);
        }
    }
}
print2d([[9, 3, 4], [11], [42, 100]]);


function makeMatrix(m, n, value) {
    const arr = [];
    for (let i = 0; i < m; i++) {
        arr.push([]);
        for (let j = 0; j < n; j++) {
            arr[i].push(value)
        }
    }
    return arr;
}
console.log(makeMatrix(3, 4, "Hello"));


function totalProduct(arr) {
    let num = 1;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            num*=arr[i][j];
        }
    }
    return num;
}
console.log(totalProduct([[4, 6], [2, 3], [1, 2]]))


function twoSumPairs(numbers, target) {
    const arr = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i+1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target && numbers[i] !== numbers[j]) {
                arr.push([numbers[i], numbers[j]]);
            }
        }
    }
    return arr;
}
console.log(twoSumPairs([3, 9, 8], 10));


function zipper(arr1, arr2) {
    const newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        newArr.push([arr1[i], arr2[i]])
    }
    return newArr;
}
console.log(zipper(["whisper", "talk", "shout"], ["quiet", "normal", "loud"]));


function removeDupes(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i])
        }
    }
    return newArr;
}
console.log(removeDupes([42, 5, 7, 42, 7, 3, 7, 7]));


function removeVowels(a) {
    let b = "";
    for (let i = 0; i < a.length; i++) {
        if (a[i] === "a" || a[i] === "e" || a[i] === "i" || a[i] === "o" || a[i] === "u") {

        } else {
            b+= a[i];
        }
    }
    return b;
}
console.log(removeVowels("cellar door"));


function spam(arr) {
    let a = "";
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i][1]; j++) {
            a += " " + arr[i][0]
        }
    }
    return a.slice(1);
}
console.log(spam([["cat", 1], ["dog", 2], ["bird", 4]]));


function removeFirstVowel(a) {
    let b = "";
    const vowels = "aeiou";
    const c = [];
    for (let i = 0; i < a.length; i++) {
        if (vowels.includes(a[i]) && c.length === 0) {
            c.push("stop");
        } else {
            b+= a[i];
        }
    }
    return b;
}
console.log(removeFirstVowel("juice"));


function shortenLongWords(a) {
    let b = a.split(" ");
    const vowels = "aeiou";
    let c;
    for (let i = 0; i < b.length; i++) {
        if (b[i].length > 4) {
            c = b[i].slice(0)
            b.splice(i, 1, "")
            for (let j = 0; j < c.length; j++) {
                if (!vowels.includes(c[j])) {
                    b[i]+=c[j]
                }
            }
        }
    }
    return b.join(" ");
}
console.log(shortenLongWords("ballerina, you must have seen her"));


let collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold"
    }
};
function updateRecords(id, prop, value) {
    if (value === "") {
        delete collection[id][prop];
    } else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value)
    } else {
        collection[id][prop] = value;
    }
    return collection;
}
console.log(updateRecords("5439", "album", ""));


let contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994732684",
        "likes": ["Hogwartz", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristina",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];
function lookUpProfile(name, prop) {
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i]["firstName"] === name) {
            return contacts[i][prop];
        } else if (contacts[i][prop] === undefined) {
            return "No such property";
        }
    }
    return "No such contact"
}
console.log(lookUpProfile("Harry", "likes"));


function secondsConverter(min) {
    return min * 60;
}
console.log(secondsConverter(3));


//https://edabit.com/challenge/YMWDcSuYwYvve3HZj
function calculateFuel(n) {
    if (n <= 0) {
        return "Not possibruu";
    } else if (n < 10) {
        return 100;
    }
    return n * 10;
}
console.log(calculateFuel(0.1));


//https://edabit.com/challenge/GLbuMfTtDWwDv2F73
function countTrue(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr.length === 0) {
            return 0;
        } else if (arr[i] === true) {
            sum++;
        }
    }
    return sum;
}
console.log(countTrue([true, true, false, true]));


//https://edabit.com/challenge/6R6gReGTGwzpwuffD
function sevenBoom(arr) {
	for (let i = 0; i < arr.length; i++) {
        if (arr[i].toString().search(7) >= 0) {
            return "Boom!";
        }
    }
    return "there is no 7 in the array";
}
console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]));


//https://edabit.com/challenge/b7iHQDw72zzkmgCun
function countBoomerangs(arr) {
    let sum = 0;
	for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i+2] && arr[i+1] !== arr[i]) {
            sum++;
        }
    }
    return sum;
}
console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1]));


//https://edabit.com/challenge/r6TSNwkLZ2DgsoKiH
function oddishOrEvenish(num) {
    const newNum = num.toString().split("");
    let sum = 0;
    for (let i = 0; i < newNum.length; i++) {
        sum += Number.parseInt(newNum[i])
    }
    return sum % 2 === 0 ? "Evenish" : "Oddish";
}
console.log(oddishOrEvenish(33));


//https://edabit.com/challenge/yXSTvCNen2DQHyrh6
let newArr;
function getLength(arr) {
	for (let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i]) || arr[i].length === 1) {
            newArr = arr.flat();
            getLength(newArr);
        }
    }
    return newArr ? newArr.length : arr.length;
}
console.log(getLength([2]));

let newArray;
function getLengtha(arr) {
    if (arr.filter(isNaN).length > 0) {
        newArray = arr.flat();
        getLengtha(newArray);
    }
    return newArray ? newArray.length : arr.length;
}
console.log(getLengtha([2]));


//https://edabit.com/challenge/NcQg8tCkMecNpjwXc
function balanced(arr) {
	let stSum = 0;
    let ndSum = 0;
    let stHalf = arr.slice(0, arr.length/2);
    let ndHalf = arr.slice(arr.length/2);
    for (let i = 0; i < stHalf.length; i++) {
        stSum += stHalf[i];
        ndSum += ndHalf[i];
    }
    if (stSum > ndSum) {
        return stHalf.concat(stHalf);
    } else if (stSum < ndSum) {
        return ndHalf.concat(ndHalf);
    } else {
        return arr;
    }
}
console.log(balanced([1, 2, 4, 6, 3, 1]));


//https://edabit.com/challenge/yQGTggivy7eadXwBN
function missing(arr1, arr2) {
    let ndArr1 = arr1;
	for (let i = ndArr1.length; i >= 0; i--) {
        if (arr2.includes(ndArr1[i])) {
            for (let j = arr2.length; j >= 0; j--) {
                if (arr2[j] === ndArr1[i]) {
                    arr2.splice(j, 1)
                    ndArr1.splice(i, 1);
                }
            }
        }
    }
    return ndArr1[0];
}
console.log(missing([1, 2, 3, 4, 5, 6, 7, 8], [1, 3, 4, 5, 6, 7, 8]));


//https://edabit.com/challenge/eCPim4XcssdZdvs32
function numInStr(arr) {
    const newArr = [];
	for (let i = arr.length-1; i >= 0; i--) {
        for (let j = 0; j < arr[i].length; j++) {
            if (Number.isInteger(parseInt(arr[i][j]))) {
                newArr.unshift(arr[i]);
                arr.splice(i, 1, "Deleted");
            }
        }
    }
    return newArr;
}
console.log(numInStr(['abc', 'ab10c',  'a10bc', 'bcd']));


//https://edabit.com/challenge/NfBqxaDu4KoxAysWF
function doubleSwap(str, c1, c2) {
	let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === c1) {
            newStr+=c2;
        } else if (str[i] === c2) {
            newStr+=c1;
        } else {
            newStr+=str[i];
        }
    }
    return newStr;
}
console.log(doubleSwap("128 895 556 788 999", "8", "9"));


//https://edabit.com/challenge/7pkKPYtTJzpxRMckZ
function isPositiveDominant(arr) {
    let positiveCounter = 0;
    let negaticeCounter = 0;
    const newArr = [];
	for (let i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] > 0) {
            positiveCounter++;
        } else if (newArr[i] < 0) {
            negaticeCounter++;
        }
    }
    if (positiveCounter > negaticeCounter) {
        return true;
    } else {
        return false;
    }
}
console.log((isPositiveDominant([1, 1, 1, 1, -3, -4]), false));


//https://edabit.com/challenge/5eCqrJ7ByYCweDbHg
const MOVES = ["Shimmy", "Shake", "Pirouette", "Slide", "Box Step", "Headspin", "Dosado", "Pop", "Lock", "Arabesque"];
function danceConvert(pin) {
    const theMOVES = [];
    for (let i = 0; i < pin.length; i++) {
        if (parseInt(pin[i]) + i > 9) {
            let bigNum = (parseInt(pin[i]) + i).toString();
            bigNum = bigNum[bigNum.length-1]
            theMOVES.push(MOVES[parseInt(bigNum)]);
        } else {
            theMOVES.push(MOVES[parseInt(pin[i]) + i]);
        }
    }
    return theMOVES;
}
console.log(danceConvert("9999"));


//https://edabit.com/challenge/jRSST87NjECBzbwzL
function getTotalPrice(groceries) {
    let sum = 0;
	for (let i = 0; i < groceries.length; i++) {
        sum += groceries[i].quantity * groceries[i].price;
    }
    let stringSum = sum.toString()
    if (stringSum.includes(".")) {
        for (let i = 0; i < stringSum.length; i++) {
            if (stringSum[i] === ".") {
                stringSum = stringSum.slice(0, i+2)
            }
        }
    }
    return sum = parseFloat(stringSum);
}
console.log(getTotalPrice([{product: "Milk", quantity: 1, price: 1.50 }]));


//https://edabit.com/challenge/Mwryyhy2e8Gk9yrCh
function countNumberOfOccurrences(obj) {
    let newObj = {};
	const values = Object.values(obj);
    for (let i = 0; i < values.length; i++) {
        if (!Object.keys(newObj).includes(values[i])) {
            newObj[values[i]] = 0;
        }
        if (newObj.hasOwnProperty(values[i])) {
            newObj[values[i]]++;
        }
    }
    return newObj;
}
console.log(countNumberOfOccurrences({ a: "sleazball", b: "pervert", c: "pervert", d: "pervert" }));


//https://edabit.com/challenge/yYfQoo6rkMezauG77
function reverseOdd(str) {
	let splitStr = str.split(" ");
    for (let i = 0; i < splitStr.length; i++) {
        if (splitStr[i].length % 2 !== 0) {
            let emptyStr = splitStr[i];
            splitStr[i] = "";
            for (let j = emptyStr.length - 1; j >= 0; j--) {
                splitStr[i] += emptyStr[j];
            }
        }
    }
    return splitStr.join(" ");
}
console.log(reverseOdd("Leonardo uči programirati JavaScript."));


//https://edabit.com/challenge/xrsiqZKrMoT2skt9i
function signAll(obj, name) {
    let objProp = Object.keys(obj);
    if (obj.hasOwnProperty("signature")) {
        obj["signature"] = name;
    }
    for (let i = 0; i < objProp.length; i++) {
        if (obj[objProp[i]].hasOwnProperty("signature")) {
            obj[objProp[i]]["signature"] = name;
        }
    }
    return obj;
}
console.log(signAll({bathroom: {stereo: 220, signature: ""}, cellar: {mirror: 10, broom: 90, signature: ""}, signature: ""}, "Leonardo"));


//https://edabit.com/challenge/NXTrfGBXTKg3Z9jkz
function isPandigital(num) {
    const numbers = "0123456789";
	for (let i = 0; i < numbers.length; i++) {
        if (!num.toString().includes(numbers[i].toString())) {
            return "Integer is not pandigital";
        }
    }
    return "Integer is pandigital";
}
console.log(isPandigital(768431605430));


//https://edabit.com/challenge/paMpZoEJ6gr4feMS3
function getVodkaBottle(obj, num) {
    objKeys = Object.keys(obj);
    for (let i = 0; i < objKeys.length; i++) {
        if (obj[objKeys[i]] === num && objKeys[i].includes("Rammstein")) {
            return objKeys[i];
        }
    }
	return "No luck.";
}
console.log(getVodkaBottle({absinth: 100, whiskey: 100, "Rammstein A": 100, "Rammstein B": 50}, 100));


//https://edabit.com/challenge/uScx6aGXmNu27NYWz
function getFrequencies(arr) {
    let obj = {};
	for (let i = 0; i < arr.length; i++) {
        if (!Object.keys(obj).includes(arr[i].toString())) {
            obj[arr[i]] = 0;
        }
        if (obj.hasOwnProperty(arr[i])) {
            obj[arr[i]]++;
        }
    }
    return obj;
}
console.log(getFrequencies([1, 2, 3, 3, 2]));


//https://edabit.com/challenge/ujzhzyvGoASKxSAib
const sortedArray = [];
function sort(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === min) {
            sortedArray.push(min);
            arr.splice(i, 1);
            sort(arr);
        }
    }
    return sortedArray;
}
function chosenWine(wines) {
    if (wines.length === 0) {
        return null;
    } else if (wines.length === 1) {
        return wines[0]["name"];
    }
    let winePrices = [];
    for (let i = 0; i < wines.length; i++) {
        winePrices.push(wines[i]["price"]);
    }
    winePrices = sort(winePrices);
    for (let i = 0; i < wines.length; i++) {
        if (wines[i]["price"] === winePrices[1]) {
            return wines[i]["name"];
        }
    }
}
console.log(chosenWine([{name: "Wine A", price: 8.99}, {name: "Wine 389", price: 109.99}, {name: "Wine 44", price: 38.44}, {name: "Wine 72", price: 22.77}]));


//https://edabit.com/challenge/5S5HBQW6zZp8eH3eL
function uncensor(str, vowels) {
    let newStr = "";
	for (let i = 0; i < str.length; i++) {
        if (str[i] === "*") {
            newStr+=vowels[0];
            vowels = vowels.slice(1)
        } else {
            newStr+=str[i];
        }
    }
    return newStr;
}
console.log(uncensor('Wh*r* d*d my v*w*ls g*?', 'eeioeo'));


//https://edabit.com/challenge/jtAvQyyDpFA2EaCcj
function commonElements(arr1, arr2) {
    const arr3 = [];
	for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            arr3.push(arr1[i])
        }
    }
    return arr3;
}
console.log(commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]));


//https://edabit.com/challenge/edP3JPvJHGigcYhQX
function fatPrime(a, b) {
    let arr = [];
    let newArr = [];
    for (let i = a; i <= b; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j !== 0) {
                arr.push(j);
            }
        }
        if (arr.length === i-2) {
            newArr.push(i);
        }
        arr = [];
    }
    return newArr[newArr.length-1];
}
console.log(fatPrime(3, 50));


//https://edabit.com/challenge/aMyRSjKakeDauFfkX
function firstRepeat(chars) {
    let newChars = "";
    for (let i = 0; i < chars.length; i++) {
        if (newChars.includes(chars[i])) {
            return chars[i];
        }
        newChars+=chars[i];
    }
    return -1;
}
console.log((firstRepeat("Saruman")));


//https://edabit.com/challenge/38Ctuc4jKhExdE6uQ
let newwArr = [];
function sortArray(arr) {
    let min = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        } else if (i === arr.length-1) {
            newwArr.push(min);
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === min) {
            arr.splice(i, 1);
        }
    }
    if (arr.length > 0) {
        sortArray(arr);
    }
    return newwArr;
}
console.log(sortArray([2, -5, 1, 4, 7, 8, 2, -5, 22, 14]));


//https://edabit.com/challenge/vbf2iSSP4dnJ8PQq7
function rowSum(n) {
    let sum = 0;
    let newSum = 0;
	for (let i = n; i >= 0; i--) {
         sum+=i;
    }
    for (let i = sum; i > sum-n ; i--) {
        newSum+=i;
    }
    return newSum;
}
console.log(rowSum(4));


//https://edabit.com/challenge/vGg5Q5WGHw5fNgwr7
function digitalClock(seconds) {
    if (seconds >= 86400) {
        seconds%=86400;
    }
    let h = Math.floor(seconds/3600);
    let sec = seconds%3600%60;
    let min = (seconds%3600 - sec) / 60;
    if (h < 10) {
        h = "0" + h;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }
    if (min < 10) {
        min = "0" + min;
    }
    return h + ":" + min + ":" + sec;
}
console.log(digitalClock(86399));


//https://edabit.com/challenge/f3Lc7Z5dK3p8dahoz
function canConcatenate(arr, target) {
	for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "object") {
            arr = arr.flat();
            canConcatenate(arr, target);
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (!target.includes(arr[i]) || arr.length !== target.length) {
            return false;
        }
    }
    return true;
}
console.log(canConcatenate([[2, 1, 3], [5, 4, 7, 6]], [7, 6, 5, 4, 3, 2, 1]));


//https://edabit.com/challenge/8a2J9T4FM5fgSwn4w
function sumMissingNumbers(arr) {
    let min = arr[0],
    max = arr[0];
    let sum = 0;
	for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i]
        }
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    for (let i = min; i <= max; i++) {
        if (!arr.includes(i)) {
            sum+=i
        }
    }
    return sum;
}
console.log(sumMissingNumbers([7, 8, 9, 10]));


//https://edabit.com/challenge/diTZjq3pdnwMt6BNN
function elasticize(word) {
    let newWord = "";
    let reversedWord = "";
    for (let i = word.length-1; i >= 0 ; i--) {
        reversedWord+=word[i];
    }
	for (let i = 0; i < Math.ceil(word.length/2); i++) {
        newWord+=word[i].repeat(i+1)
    }
    for (let i = Math.floor(reversedWord.length/2)-1; i >= 0 ; i--) {
        newWord+=reversedWord[i].repeat(i+1)
        //Mogao sam i bez reverseWord-a tako da iteracija počne od druge polovice sa i+Math.floor(word.length/2)
    }
    return newWord;
}
console.log(elasticize("ROTATOR"));


//https://edabit.com/challenge/t6HFLEYD2e7ePxAu5
function missingLetter(str) {
	let alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < alphabet.length; i++) {
        for (let j = i+1; j < alphabet.length; j++) {
            if (str[0] === alphabet[i] && str[str.length-1] === alphabet[j]) {
                alphabet = alphabet.slice(i, j+1);
            }
        }
    }
    for (let i = 0; i < alphabet.length; i++) {
        if (!str.includes(alphabet[i])) {
            return alphabet[i];
        }
    }
    return "No missing letter";
}
console.log(missingLetter("mnopqs"));


//https://edabit.com/challenge/wYdQGudMRdzME5B7m
function leader(arr) {
    const newArr = [];
	for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                break;
            } else if (arr[i] > arr[j]) {
                if (j === arr.length-1) {
                    newArr.push(arr[i]);
                }
                continue;
            }
        }
    }
    newArr.push(arr[arr.length-1]);
    return newArr;
}
console.log(leader([2, 3, 20, 15, 8, 3]));


//https://edabit.com/challenge/ccZBsRp6pX869gyqx
function encrypt(word) {
	let reversedWord = "";
    let newReversedWord = "";
    for (let i = word.length-1; i >= 0; i--) {
        reversedWord+=word[i];
    }
    for (let i = 0; i < reversedWord.length; i++) {
        if (reversedWord[i] === "a") {
            newReversedWord+=0;
        } else if (reversedWord[i] === "e") {
            newReversedWord+=1;
        } else if (reversedWord[i] === "i") {
            newReversedWord+=2;
        } else if (reversedWord[i] === "o") {
            newReversedWord+=2;
        } else if (reversedWord[i] === "u") {
            newReversedWord+=3;
        } else {
            newReversedWord+=reversedWord[i];
        }
    }
    return newReversedWord+="aca";
}

console.log(encrypt("banana"));


//https://edabit.com/challenge/XoBFQ9CJDBFEKEAj9
function leftRotations(str) {
    const arr = [];
    arr.push(str);
    for (let i = 1; i < str.length; i++) {
        arr.push(arr[arr.length-1].slice(1));
        arr[arr.length-1]+=arr[arr.length-2][0];
    }
    return arr;
}
function rightRotations(str) {
	const arr = [];
    arr.push(str);
    for (let i = 1; i < str.length; i++) {
        arr.push(arr[arr.length-1].slice(0, arr[arr.length-1].length-1));
        arr[arr.length-1] = arr[arr.length-2][arr[arr.length-2].length-1] + arr[arr.length-1];
    }
    return arr;
}
console.log(leftRotations("leo"));
console.log(rightRotations("leo"));


//https://edabit.com/challenge/jtvCv6cjHorKpmyFc
function calculateScore(games) {
    let abigail = 0;
    let benson = 0;
    for (let i = 0; i < games.length; i++) {
        if (((games[i][0] !== "R") && (games[i][0]!== "P") && (games[i][0]!== "S")) || ((games[i][1] !== "R") && (games[i][1]!== "P") && (games[i][1]!== "S"))) {
            return "One of the players haven't followed the rules";
        } else if (games[i][0] === games[i][1]) {
            continue;
        } else if ((games[i][0] === "R" && games[i][1] === "S") || (games[i][0] === "P" && games[i][1] === "R") || (games[i][0] === "S" && games[i][1] === "P")) {
            abigail++;
        } else {
            benson++;
        }
    }
    if (abigail > benson) {
        return "Abigail wins " + abigail + "/" + benson;
    } else if (benson > abigail) {
        return "Benson wins " + benson + "/" + abigail;
    } else {
        return "Abigail and Benson have tied " + abigail + "/" + benson;
    }
}
console.log(calculateScore([['R', 'P'], ['R', 'S'], ['S', 'P']]));


//https://edabit.com/challenge/QfYTCdtcZ4TST4JTx
function interview(arr, tot) {
	if (arr.length < 8 || tot > 120) {
        return "disqualified a";
    } else if ((arr[0] > 5 || arr[1] > 5) || (arr[2] > 10 || arr[3] > 10) || (arr[4] > 15 || arr[5] > 15) || (arr[6] > 20 || arr[7] > 20)) {
        return "disqualified b";
    }
    return "qualified";
};
console.log(interview([5, 5, 10, 10, 15, 15, 20, 20], 120));


//https://edabit.com/challenge/PgkSgWqNZBwXTFgby
let newStr55 = "";
function superReducedString(str) {
	for (let i = 0; i < str.length; i++) {
        if (i !== 0 && str[i-1] === str[i]) {
            newStr55 = str.slice(0, i-1) + str.slice(i+1);
            str = newStr55;
            i = 0;
        }
    }
    return newStr55;
}
console.log(superReducedString("zzzhhnnttti"));


//https://edabit.com/challenge/ABiF6EsqRYMvogcgp
function getHashTags(str) {
    const arr = str.split(' ');
    let longestWord = '';
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longestWord.length) {
            longestWord = arr[i];
        };
        if (i === arr.length-1 && result.length < 3) {
            result.push(`#${longestWord}`);
            arr.splice(arr.indexOf(longestWord), 1);
            i = -1;
            longestWord = '';
        };
    };
    return result;
};
console.log(getHashTags("Visualizing Science"));


//https://edabit.com/challenge/XR4suWJok9wdaNJ5j
function zeroesToEnd(a) {
	for (let i = a.length-1; i >= 0; i--) {
        if (a[i] === 0) {
            a.splice(i, 1);
            a.push(0)
        };
    };
    return a
};
console.log(zeroesToEnd([1, 2, 0, 0, 4, 0, 5]));


//https://edabit.com/challenge/vHvu4Wis8RhmQbwXm
let counter1 = 0;
function additivePersistence(n) {
	const nums = n.toString().split("");
    if (nums.length !== 1) {
        const num = nums.map(elem => parseInt(elem)).reduce((pV, cV) => pV + cV);
        counter1++;
        additivePersistence(num);
    }
    return counter1;
};
console.log(additivePersistence(123456));

let counter2 = 0;
function multiplicativePersistence(n) {
    const nums = n.toString().split("");
    if (nums.length !== 1) {
        const num = nums.map(elem => parseInt(elem)).reduce((pV, cV) => pV * cV);
        counter2++;
        multiplicativePersistence(num);
    };
    return counter2;
};
console.log(multiplicativePersistence(77));


//https://edabit.com/challenge/PYXbvQh9W3c9i72xx
const products = [
    { number: 1, price: 100, name: 'Orange juice' },
    { number: 2, price: 200, name: 'Soda' },
    { number: 3, price: 150, name: 'Chocolate snack' },
    { number: 4, price: 250, name: 'Cookies' },
    { number: 5, price: 180, name: 'Gummy bears' },
    { number: 6, price: 500, name: 'Condoms' },
    { number: 7, price: 120, name: 'Crackers' },
    { number: 8, price: 220, name: 'Potato chips' },
    { number: 9, price: 80,  name: 'Small snack' },
];
const change = [500, 200, 100, 50, 20, 10];
let totalChange = 0;
const changes = [];

function vendingMachine(products, money, productNumber) {
    const allProductNumbers = [];
    products.forEach(elem => allProductNumbers.push(elem.number));
    const productNumberValidity = allProductNumbers.some(elem => elem === productNumber);
    if (productNumberValidity) {
        for (let i = 0; i < products.length; i++) {
            if (products[i].number === productNumber && products[i].price > money) {
                return 'Not enough money for this product';
            } else if (products[i].number === productNumber &&  money >= products[i].price) {
                for (let j = 0; j < change.length; j++) {
                    if (money >= products[i].price + change[j] + totalChange) {
                        totalChange+=change[j];
                        changes.push(change[j]);
                        j--;
                    } else if (j === change.length-1) {
                        return { product: products[i].name, change: changes };
                    };
                };
            };
        };
    } else {
        return 'Enter a valid product number';
    };
}
console.log(vendingMachine(products, 500, 8));


//https://edabit.com/challenge/Kzmyf4pLx66ZRsnWk
let number;
let newNumber;
function sumDigProd(...nums) {
    if (nums.toString().length > 1) {
        number = nums.reduce((cV, pV) => cV + pV);
    }
    if (number > 9) {
        newNumber = number.toString().split('').map(elem => parseInt(elem)).reduce((cV, pV) => cV * pV);
        number = newNumber;
        sumDigProd(newNumber);
    };
    return newNumber;
};
console.log(sumDigProd(26, 497, 62, 841));


//https://edabit.com/challenge/8QTBwLzAdaM8wkrXu
function balance(word) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const values = new Map();
    let ifOdd = 0;
    word.length % 2 !== 0 ? ifOdd++ : null;
    alphabet.split('').forEach((elem, index) => values.set(elem, index+1));
    const leftHand = word.toLowerCase().substring(0, Math.floor(word.length/2));
    const rightHand = word.toLowerCase().substring(Math.floor(word.length/2 + ifOdd));
    const leftHandSum = Array.from(leftHand, elem => values.get(elem)).reduce((pV, cV) => pV + cV);
    const rightHandSum = Array.from(rightHand, elem => values.get(elem)).reduce((pV, cV) => pV + cV);
    return leftHandSum === rightHandSum ? true : false;
};
console.log(balance('disillusioned'));


//https://edabit.com/challenge/62BAcgsNSdwYmE9ty
function nearestVowel(s) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const vowels = 'aeiou';
    const leftHand = alphabet.split(s)[0].split('').reverse().join('');
    const rightHand = alphabet.split(s)[1];
    const LeftVowel = leftHand.split('').find(elem => vowels.includes(elem));
    const rightVowel = rightHand.split('').find(elem => vowels.includes(elem));
    return vowels.includes(s) ? s : leftHand.indexOf(LeftVowel) === rightHand.indexOf(rightVowel) ? LeftVowel : rightVowel;
};
console.log(nearestVowel('r'));


//https://edabit.com/challenge/LNJQxXMmpWM9fzm3X
function shiftSentence(str) {
    const arr = str.split(' ');
    let firstLetter = arr[arr.length-1][0];
    
    const arr2 = arr.map(elem => {
        const word = firstLetter + elem.slice(1)
        firstLetter = elem[0]
        return word;
    })
    return arr2;
}
console.log(shiftSentence('i am enevedable'));

//https://edabit.com/challenge/HQXJLmsGK9KiKmeDf
function repeat(str, nb) {
    const string = '';

    const newString = string.padStart(nb, str);
    return newString;
}
console.time('Execution Time');
repeat('-', 10000000);
console.timeEnd('Execution Time');