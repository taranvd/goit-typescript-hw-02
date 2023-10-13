/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<T extends object, A>(objA: T, objB: A) {
  return Object.assign(objA, objB);
}

const merged = merge({ name: "Vlad" }, { age: 22 });
console.log(merged);

export {};
