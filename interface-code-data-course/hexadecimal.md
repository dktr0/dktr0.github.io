---
layout: layout.njk
title: "MEDIAART 3D03: Hexadecimal numbers"
---

# [MEDIAART 3D03](../outline/index.html): Hexadecimal numbers

Hopefully we've gotten used to the concept of [binary numbers](../binary-numbers/index.html). Being able to directly encode/decode binary numbers ourselves is useful both for general comprehension but also because it makes the limits, the materiality, of numbers in lots of computer systems very visible to us. (For example, when we know that 8 bits can encode 256 possibilities, i.e. 0-255, then we are less surprised to see that colour systems are often on a 0-255 scale.)

But encoding big numbers in binary is really long and tedious! Hexadecimal is another way of encoding/decoding numbers that is more compact than binary, but still very clearly related to the underlying bits. Here's how it works:

Each digit is encoded with 16 possible values, which are the numbers 0 through 9 followed by the letters a through f. So the letter a is worth 10, b is worth 11, c is worth 12, d is worth 13, e is worth 14, and finally f is worth 15. 

The rightmost digit is just worth that number from 0-15. 

The next digit to the left is worth 16 times whatever it is worth as an individual digit.

The next digit to the left is worth 256 times whatever it is worth as an individual digit.

The next digit to the left is worth 4096 times whatever it is worth as an individual digit.

(If we kept going, each next digit would be worth 16 times more than what the one before it was.)

If we restrict ourselves to 4-digit hexadecimal numbers, the largest one would be ffff, and it would be worth  15*4096 + 15*256 + 15*16 + 15 = 65535; so, with 4 hexadecimal digits we can encode values from 0-65535 (65,536 possibilities). This also happens to be exactly the number of possibilities we can encode with 16 binary bits.

Each hexadecimal digit corresponds to 4 binary bits.

There's three places we might be likely to encounter binary numbers - in configuring computers/hardware, in some things to do with computer networking, and (maybe) in code that we encounter and are reading.

## JavaScript and hexadecimal numbers

We can use JavaScript to encode/decode hexadecimal numbers.

If we put 0x in front a sequence of hexadecimal digits, JavaScript will interpret that as a literal hexadecimal number. 

For example: ```0x1abc``` is equivalent to the literal decimal number 444

If we put a number in a variable then we can use the .toString method to convert it to another "base" (e.g. hexadecimal = base 16).

```
// at the node.js prompt
x = 1234;
x.toString(16); // will be 4d2 which is 1234 in hexadecimal
```

If we want to "parse" text from a user as if it was hexadecimal we can use the parseInt function, which takes two arguments - the text to be parsed and the base to parse it with (e.g. 16 for hexadecimal): ```parseInt("ffff",16); // will produce 65535 as discussed above```
