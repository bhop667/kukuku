"use strict";
//alert('ti krutoi');

//const result = confirm("nazmi OK");
//console.log(result);

//const answer = +prompt ("Сколько раз ты кушаешь??", "");
//console.log((answer + 3));
//const category = "toys";
//console.log(`https://someurl.ru/${category}/5/4`);

//const user = 'Amir';

//alert(`zdarova ${user}`);

// let incr = 10,
// decr = 10;

// incr++;
// decr--;
// console.log(incr);
// console.log(decr);

// const a = true,
// b = false;
// console.log(a || b);

//const obj = [];

// let a = 2;
// let P = 4*a;
// console.log(P); 1 задача

// let a = 5;
// let S = a**2;
// console.log(S); 2 задача

// let a=4,
// b=4;
// let S = a*b;
// let P = 2*(a+b);
// console.log(S);
// console.log(P); 3 задача

// let d = 6;
// let pi = 3.14;
// let L = d*pi;
// console.log(L); 4 задача

// let a = 7;
// let V = a**3;
// let S = 6*a**2;
// console.log(V, S); 5 задача

// let a = 4,
//     b = 5,
//     c = 6;
// let V = a*b*c;
// let S = 2*(a*b+b*c+a*c);
// console.log(V, S); 6 задача

// let R = 7,
//     pi = 3.14;
// let S = pi*R**2,
//     L = 2*pi*R;
// console.log(S, L); 7 задача

// let a = 5,
//     b = 6;
// let c = (a+b)/2;
// console.log(c); 8 задача

// let a = 4,
//     b = 4;
// console.log(Math.sqrt(a*b)); 9 задача

// let a = 0,
//     b = 4;
// let c = Math.sqrt(a**2+b**2);
// let P = a+b+c;
// console.log(c, P); 12 задача

// let R1 = 7,
//     R2 = 5,
//     pi = 3.14;
// let S1 = pi*R1**2;
// let S2 = pi*R2**2;
// let S3 = S1-S2;
// console.log(S1, S2, S3); 13 задача

// let L = 6,
//     pi = 3.14;
// let R = L/2*pi;
// let S = pi*R**2;
// console.log(R, S); 14 задача

// let S = 8,
//     pi = 3.14;
// let D = Math.sqrt((4*S)/pi);
// let L = pi*D;
// console.log(D, L); 15 задача

// let x1 = 3,
//     x2 = 4,
//     y1 = 2,
//     y2 = 5;
// console.log(Math.sqrt((x2-x1)**2+(y2-y1)**2)); 20 заадча

// let x = 2;
// let y = 3*x**6-6*x**2-7;
// console.log(y);                                    26 задача


const numberOfFilms = +prompt ('сколько фильмов вы посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors:{},
    genres:[],
    privat: false
};

const a = prompt('Один из последних фильиов которое вы посмотрели?', '');
const b = prompt('И че, харош?', '');
const c = prompt('Один из последних фильиов которое вы посмотрели?', '');
const d = prompt('И че, харош?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);











