interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    // startTrail: () => string
    startTrail(): string
    getCoupon(couponname: string, value: number): number
}

interface User {
    githubToken: string
}

interface Admin extends User{
    role: "admin" | "ta" | " Learner"
}

const billy: Admin = {dbId: 22, email: "billy@bob.com", userId: 222, githubToken: "github", role: "admin",
startTrail: () => {
    return "trail started"
},
getCoupon: (name: "Billy10", off: 10) => {
    return 10
}
}

billy.email = "billy@bob.com"