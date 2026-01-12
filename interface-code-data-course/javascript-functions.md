---
layout: layout.njk
title: "MEDIAART 3D03: JavaScript functions"
---

# [MEDIAART 3D03](../outline/index.html): JavaScript functions

We saw in JavaScript basics that JavaScript is an "imperative language", in other words one where the programs we write are basically lists of instructions to do this, then that, then this other thing, etc. In that specific way of looking at things, we might define "functions" as ways of bundling or grouping specific sets of instructions for reuse.

Functions are a key strategy (perhaps "the" key strategy) in managing the complexity of projects by breaking them into smaller units that we can think about, test, re-use in different projects, perhaps ultimately share with others for their re-use (e.g. if a function does something sufficiently general/universal that it might be useful to people doing something different). 

## Functions (without arguments)

Here is a simple example of defining a JavaScript function:

```
function printTwoLines() {
console.log("a line");
console.log("a second line");
}
```

The code above would "define" a function called printTwoLines. To actually make those things happen, we would have to insert a "call" to the function somewhere in our code (when/where we want those things to happen). That would look like this: ```printTwoLines();```

## Functions with arguments

Often we have things that we need to do multiple/many times, but with some variation between each time. We can define functions to take "arguments" which are pieces of information (e.g. numbers, strings) that may be different each time the function is run/called. Here's an example of a function that "takes a single argument" called x:

```
function sayHello(x) {
console.log("hello " + x + "!");
}
```

And here's an example of calling that function twice to say hello to two individuals:
```
sayHello("Dr. 0");
sayHello("David");
```

## Functions with return values

Sometimes we want to use functions in order to calculate something. For example, a dozen of something is 12 of that thing. We could define a function to convert a number from individual items to dozens:

```
function howManyDozens(x) {
return (x/12);
}
```

And here's an example of using/calling that function somewhere else:
```console.log("36 eggs is " + howManyDozens(36) + " dozen eggs");```
