---
layout: layout.njk
title: "MEDIAART 3D03: JavaScript arrays and loops"
---

# [MEDIAART 3D03](../outline/index.html): JavaScript arrays and loops

## Array basics

Fire up node.js at your terminal, with: ```node```

Then, enter the following at the node terminal: ```x = ["red","blue","green"];```

The variable x now contains an "array", a list of items.

This will read/access the first item: ```x[0]```

This will read/access the second item: ```x[1]```

This will read/access the third item: ```x[2]```

And since there is no fourth item, this will return "undefined": ```x[4]```

What if we wanted to change one of those items? We can specify a place in the array (the technical term is "de-index") and then use the normal assignment operator (the equals sign) to change the item at that location: ```x[0] = "pink"```

The above would change the first item in the array, and we could verify that happened by evaluating just x at the terminal: ```x```

## Loop basics

All of the examples in this section should be entered in a textfile (e.g. test.js) and run with node, e.g.: ```node test.js```

The following program would set the variable x to contain an array with three items in it, and then loop over the console.log statement three times, one for each item in the array. The variable y will be the number 0 the first time through, then the number 1, then the number 2:

```
x = ["red","green","blue"];


for(y in x) {
  console.log(x[y]);
}
```

There is a more general form of the loop in JavaScript that we should understand. It looks like this:

```
for(var y = 0; y<3; y++) {
  console.log(y);
}
```

In the above example, the part inside the brackets right after the word "for" says three things:

- the new variable y will start out containing the number 0: ```var y = 0```
- the loop will continue so long as y is lower than 3: ```y<3```
- after each time through the loop, y will go up by one: ```y++```
- notice how these three things are in a specific order and are separated by a semi-colon

We could use this form to make something happen n times in a way that doesn't have to do with the items in an array, for example:

```
for (var y=0; y<10; y++) {
  console.log("printing a message 10 times!");
}
```

Notice that if a variable is/contains an array, then the name of the variable followed by .length will access the length of that array: ```x.length```

So we could rewrite our first example of looping over an array as follows (if we wanted) - you will see this form in code examples that are out there:

```
x = ["red","green","blue"];

for(var y = 0; y < x.length; y++) {
  console.log(x[y]);
}
```

## Selecting something randomly from an array

```
x = ["Red","Green","Blue","Yellow","Pink"];
y = Math.random();
z = y * x.length;
console.log(x[Math.floor(z)]);
```

As an exercise in class, we'll write and then use a Javascript function to choose a random item given any array...
