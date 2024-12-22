```js
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s: string) {
  const endOfOpeningHash: Record<string, string> = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const isStartChar = char === "(" || char === "{" || char === "[";

    if (isStartChar) {
      stack.push(char);
    } else {
      const isEndChar = char === ")" || char === "}" || char === "]";
      if (isEndChar) {
        const lastOpeningChar = stack.pop();

        if (!lastOpeningChar) continue;

        if (endOfOpeningHash[lastOpeningChar] !== char) {
          return false;
        }
      }
    }
  }

  return stack.length ? false : true;
};
```

This is a really intreresting problem.

The key here is knowing that we can use a hash map to store the end of each opening character. And we can use a stack to keep track of the opening characters.

We know that e.g. "({{[}}]}" is invalid because opening brackets aren't being closed by the same closing bracket.

We also know that this needs to be done in order. The deepest opening bracket needs to be closed first before next opening bracket. That's why we use a stack. To keep track of the latest opening bracket.
