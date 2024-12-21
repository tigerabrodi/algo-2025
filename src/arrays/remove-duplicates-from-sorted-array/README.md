To remove duplicates from a sorted array, we can use the two pointers technique.

One pointer will be used to iterate through the array (R), and the other one will be used to store the unique elements (L).

Because the array is sorted, we start at the index 1. If the element at R is the same as the previous element (R - 1), we move R to the next element.

[0, 1, 2, 3, 4, 4, 5]

In the first iteration, R is at index 1. Because it's not the same as the previous element, we'll update the element at L with the element at R. This is fine because we're updating the element with value 1 to be one 1.

So yes, it's a bit weird, but this works. And it's fine, it's not like we're wasting a bunch of effort updating a value in place to be the same as it was.

That's why this works effectively.

We're gonna do the same till we reach 4. Eventually, L will be at the index 6 and R will be at the index 7, that's when we know we should update index 6 with the element at index 7.
