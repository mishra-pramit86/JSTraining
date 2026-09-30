// Exporting individual features by putting 'export' in front of them
export const PI = 3.14159;
export function add(a, b) {
    return a + b
}
export function subtract(a, b) {
    return a - b;
}

export default class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getProfile() {
    return `${this.name} is ${this.age} years old.`;
  }
}