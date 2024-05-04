//singleton



const mySym = Symbol("mykey1")
//object literals
const JsUser = {
    name: "Hitesh",
    "full_name" : "hitesh gill",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "peter@google.com",
    isLoggedin: false,
    lastLoginDays: ["Monday","Sunday"]
}

console.log(JsUser.email); //peter@google.com
console.log(JsUser["email"]) //peter@google.com

console.log(JsUser.full_name) //hitesh gill

console.log(JsUser[mySym]) //mykey1

JsUser.email = "peter@chatgpt.com" //value will changed
console.log(JsUser)
// Object.freeze(JsUser)
JsUser.email = "peter@email.com"
console.log(JsUser)


