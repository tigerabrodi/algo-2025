// interface MinStackType {
//   stack: number[];
//   minStack: number[];
//   push(val: number): void;
//   pop(): void;
//   top(): number;
//   getMin(): number;
// }

// const MinStack = function (this: MinStackType) {
//   this.stack = [];
//   this.minStack = [];
// } as any as { new (): MinStackType };

// MinStack.prototype.push = function (this: MinStackType, val: number): void {
//   this.stack.push(val);
//   const minVal =
//     this.minStack.length > 0
//       ? Math.min(val, this.minStack[this.minStack.length - 1])
//       : val;
//   this.minStack.push(minVal);
// };

// MinStack.prototype.pop = function (this: MinStackType): void {
//   this.stack.pop();
//   this.minStack.pop();
// };

// MinStack.prototype.top = function (this: MinStackType): number {
//   return this.stack[this.stack.length - 1];
// };

// MinStack.prototype.getMin = function (this: MinStackType): number {
//   return this.minStack[this.minStack.length - 1];
// };

class MinStack {
  private stack: number[];
  private minStack: number[];

  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val: number): void {
    this.stack.push(val);
    const minVal =
      this.minStack.length > 0
        ? Math.min(val, this.minStack[this.minStack.length - 1])
        : val;
    this.minStack.push(minVal);
  }

  pop(): void {
    this.stack.pop();
    this.minStack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}
