const User = {
    name: "Billy",
    email: "billy@pop.com",
    isActive: true
}

function createUser({name: string, isPaid: boolean}){

}

let newUser = {name: "Billy", isPaid: false, email: "billy@pop.com"}

createUser(newUser)


function createCourse():{name: string, price: number}{
    return {name: "reactjs", price: 250}
}

export {}