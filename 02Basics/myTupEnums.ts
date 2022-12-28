// const user: (string | number)[] = [1, "ho"]
let tUser: [string, number, boolean]

tUser = ["ho", 131, true]

let rgb: [number, number, number] = [255, 123, 112]

type User = [number, string]

const newUser: User = [112, "example@google.com"]

newUser[1] = "ho.com"
// newUser.push(true)

export {}