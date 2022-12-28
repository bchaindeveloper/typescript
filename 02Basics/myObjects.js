"use strict";
exports.__esModule = true;
var User = {
    name: "Billy",
    email: "billy@pop.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "Billy", isPaid: false, email: "billy@pop.com" };
createUser(newUser);
function createCourse() {
    return { name: "reactjs", price: 250 };
}
