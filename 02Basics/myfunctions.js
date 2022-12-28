"use strict";
exports.__esModule = true;
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
addTwo(5);
getUpper('four');
signUpUser('Billy', 'Billy@popcorn.com', true);
loginUser('Hale', 'hale@hale.com');
// function getValue(myVal: number){
//     if(myVal > 5) {
//         return true
//     }
//     return "200 OK"
// }
var getHello = function (s) {
    return '';
};
// typescript automaticly reconizes a change when you comment one out
var heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3]
heros.map(function (hero) {
    return "hero is " + hero;
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
