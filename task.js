//================================= DataType Tasks ========================================

// Task 1
// Create a variable name and store "Naveen".
// Print the value.

let name1 = "Praveen"
console.log(name1)  // "Praveen"

//-------------------------------------------------------------------

// Task 2
// Print the datatype of "JavaScript" using typeof.

console.log(typeof("JavaScript"))  // string

//-------------------------------------------------------------------

// Task 3
// Create a variable age = 22.
// Print the datatype.

let age = 22
console.log(typeof(age))  // number

//-------------------------------------------------------------------

// Task 4
// Create a boolean variable isStudent = true.
// Print the datatype.

let isStudent = true
console.log(typeof(isStudent))  // boolean

//-------------------------------------------------------------------

// Task 5
// Create a variable salary without assigning a value.
// Print the value.

let salary
console.log(salary)  // undefined

//-------------------------------------------------------------------

// ================================= Array Tasks ========================================

// Task 6
// Create an array fruits with 5 fruit names.
// Print the entire array.

let fruits = ["apple","banana","grape","orange","mango"]
console.log(fruits)  // (5) ['apple', 'banana', 'grape', 'orange', 'mango']

//-------------------------------------------------------------------

// Task 7
// Print the first element of the fruits array.

console.log(fruits[0])  // apple

//-------------------------------------------------------------------

// Task 8
// Print the third element of the array.

console.log(fruits[2])  // grape

//-------------------------------------------------------------------

// Task 9
// Print the last element using length.

console.log(fruits[fruits.length - 1])  // mango

//-------------------------------------------------------------------

// Task 10
// Create an array numbers = [10,20,30,40,50].
// Print the second and fourth elements.

console.log(fruits[1],fruits[3])  // banana orange

//-------------------------------------------------------------------

// ================================= Object Tasks ========================================

// Task 11
// Create an object person with properties:
// name
// age
// city
// Print the object.

let person = {
    name:"shiro",
    age:5,
    city:"chennai"
}

console.log(person)  // {name: 'shiro', age: 5, city: 'chennai'}

//-------------------------------------------------------------------

// Task 12
// Print the name from the person object.

console.log(person.name)  // shiro

//-------------------------------------------------------------------

// Task 13
// Add an array property skills inside person.
// Example:
// skills : ["HTML","CSS","JS"]
// Print the second skill.

person.skills=["HTML","CSS","JS"]
console.log(person.skills[1])  // CSS

//-------------------------------------------------------------------

// Task 14
// Create object carDetails
// brand
// model
// price
// Print the brand.

let carDetails = {
    brand:"ferrari",
    model:"f1",
    price:5000
}

console.log(carDetails.brand)  // ferrari

//-------------------------------------------------------------------

// Task 15
// Create object fruitCategory
// red:["apple","cherry"]
// yellow:["banana","mango"]
// green:["kiwi","grapes"]
// Print the first yellow fruit

let fruitCategory = {
    red:["apple","cherry"],
    yellow:["banana","mango"],
    green:["kiwi","grapes"]
}

console.log(fruitCategory.yellow[0])  //banana

//-------------------------------------------------------------------

// ================================= Arithmetic Operators ========================================

// Task 16
// Create variables
// let a = 8
// let b = 4
// Print the result of a + b.

let a = 8
let b = 4
console.log(a + b)  // 12

//-------------------------------------------------------------------

// Task 17
// Print the result of a - b.

console.log(a - b)  // 4

//-------------------------------------------------------------------

// Task 18
// Print the result of a * b.

console.log(a * b)  // 32

//-------------------------------------------------------------------

// Task 19
// Print the result of a / b.

console.log(a / b)  // 2

//-------------------------------------------------------------------

// Task 20
// Print the result of a % b

console.log(a % b)  // 0

//-------------------------------------------------------------------

// Exponential Operator

// Task 21
// Calculate 3 ** 2.

console.log(3 ** 2)  // 9

//-------------------------------------------------------------------

// Task 22
// Calculate 2 ** 4.

console.log(2 ** 4)  // 16 

//-------------------------------------------------------------------

// ================================= Increment / Decrement ========================================

// Task 23
// let num = 5
// num++
// Print the value.

let num = 5

num++

console.log(num)  // 6

//-------------------------------------------------------------------

// Task 24
// let num = 10
// num--
// Print the value.

let num1 = 10

num1--

console.log(num1)  // 9

//-------------------------------------------------------------------

// Task 25
// let x = 6
// let y = x++
// Print x and y.

let x = 6

let y = x++

console.log(x)  // 7
console.log(y)  // 6

//-------------------------------------------------------------------

// Task 26
// let a = 4
// let b = ++a
// Print both values.

let a1 = 4 

let b1 = ++a1

console.log(a1)  // 5

console.log(b1)  // 5

//-------------------------------------------------------------------

// ================================= Assignment Operators ========================================

// Task 27
// let value = 10
// value += 5
// Print the result.

let value = 10

value += 5

console.log(value)  // 15

//-------------------------------------------------------------------

// Task 28
// let value = 20
// value -= 3
// Print result.

let value1 = 20

value1 -= 3 

console.log(value1) // 17

//-------------------------------------------------------------------

// Task 29
// let value = 6
// value *= 2
// Print result.

let value3 = 6

value3 *= 2

console.log(value3) // 12

//-------------------------------------------------------------------

// Task 30
// let value = 20
// value %= 3
// Print result.

let value4 = 20

value4 %= 3 

console.log(value4) // 2

//-------------------------------------------------------------------

// ================================= Comparison Operators ========================================

// Task 31
// Print result of
// 10 == "10"

console.log(10 == "10") // true

//-------------------------------------------------------------------

// Task 32
// Print result of
// 10 === "10"

console.log(10 === "10") // false

//-------------------------------------------------------------------

// Task 33
// Print result of
// 15 > 20

console.log(15 > 20)  // false

//-------------------------------------------------------------------

// Task 34
// Print result of
// 5 <= 5

console.log(5 <= 5)  // true

//-------------------------------------------------------------------

// ================================= Logical Operators ========================================

// Task 35
// Print result of
// 10 > 5 && 5 > 2

console.log(10 > 5 && 5 > 2) // true

//-------------------------------------------------------------------

// Task 36
// Print result of
// 10 < 5 || 8 > 2

console.log(10 < 5 || 8 > 2) // true

//-------------------------------------------------------------------

// Task 37
// Print result of
// !(5 === "5")

console.log(!(5 === "5"))  // true

//-------------------------------------------------------------------

// ================================= Ternary Operator ========================================

// Task 38
// let age = 20
// Use ternary to print:
// "Adult"
// "Minor"

let age1 = 20

let ageCheck = age1 >= 18 ? "Adult" :  "Minor"

console.log(ageCheck)  // Adult

//-------------------------------------------------------------------

// Task 39
// let password = 1
// Use ternary to print
// "Login success"
// "Wrong password"


let password = 1 

let password_checker = password === 1 ? "Login Success" : "Wrong Password"

console.log(password_checker)  // Login Success

//-------------------------------------------------------------------

// ================================= String Operations ========================================

// Task 40
// Create two variables
// let firstName = "Spider"
// let lastName = "Man"
// Print using:
// Concatenation +
// Template string `${}

let firstName = "Spider"
let lastName = "Man"

console.log(firstName + lastName)  // SpiderMan

console.log(`${firstName}${lastName}`)  // SpiderMan
