// console.log('hi');


// for (let i = 0; i < 100; i++) {		
//     const a = 'test';
//     if (a.length === i){
//     console.log(`${i+1} powtorzenie`);		
//     }		
// }

// let a = 1;
// console.log(a++);
// console.log(a--);
// console.log(a--);
// console.log(a);

// 1
// 2
// 1
// 0



// let b = 2;
// console.log(++b);
// console.log(--b);
// console.log(b);

// 3
// 2
// 2


// const elements = ['x', 'y', 'z'];		
// for (let i = 0; i < elements.length; i++) {		
// console.log(`na miejscu ${i} jest ${elements[i]}`);		
// }		

// na miejscu 0 jest x
// na miejscu 1 jest y
// na miejscu 2 jest z


// const faces = ['smile', 'cry', 'sad', 'ble']

// for (let i = 0; i < faces.length; i++) {
//     console.log(`i = ${i + 1}`);
//     console.log(`element ${i + 1}: ${faces[i]}`);
// }

// let a = 10;

// while (a > 0) {
//     a--;
//     console.log(a);
// }



// let n = 3;

// while (n < 9) {
//     console.log(n);
//     n = n + 3;
//     console.log(n);
// }
// console.log(n);

// let n = 9;
// do {
//     console.log(n);
//     n = n + 3;
// } while (n < 9);
// console.log(n);

// let a = 5;
// do {
//     console.log(a);
//     a = a + 3;
// } while (a < 9);
// console.log(a);


// const person = {
//     name: 'maciek',
//     age: 31
// }
// for (let propertyName in person) {
//     console.log(`${propertyName}: ${person[propertyName]}`);
// }


const elements = ['x', 'y', 'z'];
for (let element of elements) {
    console.log(element);
}	