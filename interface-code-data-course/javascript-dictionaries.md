---
layout: layout.njk
title: "MEDIAART 3D03: JavaScript dictionaries"
---

# [MEDIAART 3D03](../outline/index.html): JavaScript dictionaries

Earlier we looked at [arrays in JavaScript](../javascript-arrays-loops/index.html). Review: An array is a way of storing lots of things in a single variable. Usually the things are all the same kind of information as each other. When we have an array, we tend to do things like loop over it, doing something to each of the items of the array in turn.
Like an array, a dictionary has more than one piece of information in it. Unlike an array, the different pieces of information typically represent different things (e.g. different aspects of something) and different things are usually done with each piece of information. Also unlike an array, instead of using numbers to pick particular things out, we'll use words/names.

Here's a literal dictionary: { name: "David Ogborn", hackerName: "dktr0" }

And we can assign it to a variable, just like any other type of data we deal with in JavaScript: ```x = { name: "David Ogborn", hackerName: "dktr0" }```

We can use JavaScript's typeof operator to inspect the "type" of something.

```
typeof 10
typeof "ten"
typeof x
```

That last line should give "object" because objects (which we'll talk about later) and dictionaries are actually extremely similar to each other.

If we want to access the specific fields of a dictionary we can use the dot . notation and the name of the field:

```
x.name
x.hackerName
```

What are main things dictionaries support doing?

- making little databases with different kinds of information about a group of things (make each dictionary an item in an array)
- making (potentially reusable) functions that somehow use multiple pieces of information from a dictionary together in some way
- they're also pretty important for understanding the later topic of objects
