class User {
    // unmarked is public 
    // public email: string
    // name: string
    private _courseCount = 1

    readonly city: string = "Kings"
    constructor(
        public email: string, 
        public name: string
        ){
    }

    private deleteToken(){
        console.log("Token deleted");
    }

    get getAppleEmail(): string{
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }
}

const Billy = new User("Billy@bob.com", "Billy")

// Billy.city = "Kings";