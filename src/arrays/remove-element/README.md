```ts
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums: number[], val: number) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};
```

val 2

[0, 1, 2, 3, 4, 2, 2, 2, 5]

Here, we start at one, we keep incrementing k until we find a value that's equal to val.

k will end up on the first 2

when we move to the next index, we'll realize we wanna update the first 2 to be the 3 and then we'll increment k

kind of like remove duplicates, its ok if we update the value in place to be the same as it was.
