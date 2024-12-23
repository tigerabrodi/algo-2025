```ts
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
```

We have one stack to keep track of the actual stack and one for the min values.

When we push a value, we check top of min and then push the min value to min stack.

An important thing to not forget throughout the entire problem is that stack is LIFO. Last in first out. top is supposed to return last value too.

If we pop, we explicitly remove the last value from both stacks.
