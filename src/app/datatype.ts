let lname: string;

lname = "Santosh";

let newName = lname.toUpperCase();


console.log(newName);



let age:number;

age = 25;
age = 25.5;

let dob = "25";

let result = parseInt(dob);

console.log(result);


let empList : string[];

empList = ["Santosh", "Santosh1", "Santosh2"];

let numList : Array<number>;

numList = [1,2,3,4,5];

let newNum = numList[0];



let numberOfOhio : number[];


let results = numList.filter((num)=> num> 2);

let num = numList.find((num)=> num ===2)


let emp = empList.find((emp)=> emp ==="Santosh")

let sum = numList.reduce((acc, num)=> acc + num);

console.log(num);
console.log(results);
console.log(emp);
console.log("the result is: "+ sum);

enum Color{
    Red,
    Green,
    Blue
}

let c: Color = Color.Blue;

let swapNumbs: [number, number];

function swapNumbers(num1:number, num2:number): [number, number]{
    return [num2, num1]
}

swapNumbs = swapNumbers(10, 20);

swapNumbs[0]; 
swapNumbs[1];

console.log(swapNumbs);

// let swapNumbs