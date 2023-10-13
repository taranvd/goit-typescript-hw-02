/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

// const test: KeyValuePair<string, number> = { key: "example", value: 1 };
// const test2: KeyValuePair<number, number> = { key: 1234, value: 1234 };

// console.log(test2);

export {};
