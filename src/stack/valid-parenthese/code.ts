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
