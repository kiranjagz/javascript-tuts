import { add, helloBob } from './second.js';

let result = helloBob();
alert(result);

let p = document.getElementById('display');
p.innerText = result;

let btn = document.getElementById('btn').addEventListener('click', () => {
    console.log(add(12, 45));
});

function myFunction() {
    console.log(add(12, 3));
}