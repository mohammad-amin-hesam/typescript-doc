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
