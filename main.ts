// let names: string = "John Doe";
let age: number = 30;
let price: number = 19.99;

let isActive: boolean;

// Array

let numbers: number[] = [1, 2, 3, 4, 5, 6];
let fruits: string[] = ["Apple", "Banana", "Cherry"];
let bulen: Array<boolean> = [true, false, true];

let mixed: [number, string, boolean] = [1, "Hello", true];
let none: any = false;

function greet(user: string): string {
  return user;
}

// interface User {
//   id?: number;
//   name: string;
//   email: string;
//   isActive: boolean;
// }

// const user: User = {
//     // id: 12,
//     name: "John Doe",
//     email: "john.doe@example.com",
//     isActive: true
// }

interface BaseUser {
  id: number;
  name: string;
}
type Student = string | number | boolean;

interface Admin extends BaseUser {
  role: string;
  email: string;
  student?: Student;
}

const user: Admin = {
  id: 1,
  name: "John Doe",
  role: "Admin",
  email: "john.doe@example.com",
};

console.log(user);
