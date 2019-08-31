enum Color {
  Red = 5, // 5 num means index of five,
  Green, // index = 6
  Blue, // index = 7
  Yellow = 2 // index = 2
}

export let c: Color = Color.Green;

export let n: null = null;
export let u: undefined = undefined;

export let str: string = null;

export let list1: number[] = [1, 2, 3];
export let list2: Array<number> = [1, 2, 3];

export let person1: [string, number] = ["Hey there", 1];

//======================================================================================================
export let randomValue: unknown = 10;

// if we specify a variable to unknown type we should check it's type before set a value for it :)
(randomValue as string).toUpperCase();
//======================================================================================================

//======================================================================================================
export const hasName = (obj: any): obj is { name: string } =>
  !!obj && typeof obj === "object" && "name" in obj;
//======================================================================================================

if (hasName(randomValue)) {
  console.log(randomValue.name);
}

let a;
a = 10;
a = true;

let b = 20;

let multiType: number | boolean;
multiType = 20;
multiType = true;

let anyType: any;
anyType = 20;
anyType = true;

function add(num1: number, num2?: number): number {
  if (num2) return num1 + num2;
  else return num1;
}

add(5, 10);

function _add(num1: number, num2: number = 10): number {
  if (num2) return num1 + num2;
  else return num1;
}

_add(5, 10);

interface Person {
  firstName: string;
  lastName?: string;
}

const fullName = (person: Person) => {
  console.log(person.firstName, person.lastName);
};

let p = {
  firstName: "Amin",
  lastName: "Hesam"
};

fullName(p);

class Employee {
  private Hello: number = 20;
  public employeeName: string;
  protected _Hello: string = "Hello there i'm mohammad amin hesam :)";

  constructor(name: string) {
    this.employeeName = name;
  }

  greet() {
    console.log(`Good Morning ${this.employeeName}`);
  }
}

let emp1 = new Employee("Amin");

console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee {
  constructor(managerName: string) {
    super(managerName);
  }

  deletgateWork() {
    console.log(`Manager delegating tasks`);
  }
}

let m1 = new Manager("Mohammad");
m1.deletgateWork();
m1.greet();
console.log(m1.employeeName);
