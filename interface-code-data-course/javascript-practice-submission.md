---
layout: layout.njk
title: "MEDIAART 3D03: JavaScript practice submission"
---

# [MEDIAART 3D03](../outline/index.html): JavaScript practice submission (practice #5)

Using nano from the terminal, write a small node.js (JavaScript program) that demonstrates functions, randomness, and loops, and which generates interesting ASCII/plain text output. You could certainly continue/extend the ideas presented in our full-class meeting about modeling the famous "10 Print..." program using JavaScript and the terminal. The important thing is that you understand each element of code (each "word", each symbol, each line) and that you are able to change and add to it while holding on to that understanding.

To submit on Avenue, please ZIP the .js text file first, then submit it in the relevant folder on Avenue. That's it!

## A note about printing individual characters without line breaks

The other pages about JavaScript basics emphasize the use of console.log to print lines of text to the output, followed by a linebreak. 

An alternative way of printing text that does not add a linebreak is process.stdout.write. For example:

```
process.stdout.write("abcd");
process.stdout.write("efgh");
```

...would print abcdefgh all in a row, with no line break between the two sets of 4 characters. If it was console.log instead, abcd and efgh would appear on different lines.

