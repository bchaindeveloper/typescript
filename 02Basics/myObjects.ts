// const User = {
//     name: "Billy",
//     email: "billy@pop.com",
//     isActive: true
// }

// function createUser({name: string, isPaid: boolean}){

// }

// let newUser = {name: "Billy", isPaid: false, email: "billy@pop.com"}

// createUser(newUser)


// function createCourse():{name: string, price: number}{
//     return {name: "reactjs", price: 250}
// }

// type User = {
//     name: string,
//     email: string,
//     isActive: bool
// }
// // This allows you to declare with bool instad of boolean
// type bool = boolean

// function createUser(user: User): User {
//     return {name: "", email: "", isActive: true}
// }

// createUser({name: "", email: "", isActive: true})

type User = {
    readonly _id: string
    name: string,
    email: string,
    isActive: boolean,
    credcardDetails?: number
}

let myUser: User = {
    _id: '1234',
    name: "h",
    email: "h@history.com",
    isActive: false
}

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

myUser.email = "h@gmail.com"
// myUser._id = "asa"

export {}