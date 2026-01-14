---
layout: layout.njk
title: "MEDIAART 3D03: Binary numbers"
---

# [MEDIAART 3D03](../outline/index.html): Binary numbers

A bit is something that has two possible values. For example "yes/no" "on/off" or - as we have all heard no doubt everywhere about computers and computer stuff "0 or 1". So, if we have one bit, we can use that to represent (encode/decode) anything that has two possible states or values.

If we have two bits then there are four possible states or values: 00 01 10 and 11

If we have three bits then there are eight possible states or values: 000 001 010 011 100 101 110 111

Binary numbers are a form of code (an encoding/decoding) that treats sets of bits as equivalent to specific numbers. A particularly simple and common binary number encoding is about translating from sets of bits (sets of 0s and 1s) to natural numbers (including 0). It usually works like this: The rightmost digit is worth 1 if it is a 1 or 0 if it is a 0. The next digit to the left is worth 2 if it is 1 or 0 if it is 0. The next digit to the left is worth 4 if it is a 1 or 0 if it is 0. The next digit would be worth 8, then the next 16, then the next 32, and so on.

Being able to "read" (to manually encode/decode) this kind of code is useful for a number of different reasons including (a) general comprehension of computing things, (b) reading/understanding things to do with text/character encoding, and (c) as a basis for understanding hexadecimal numbers (another code we'll learn that is also useful for both of the preceding reasons). Here are some examples:

```
0011 = 3
1111 = 15
1111111 = 127
11111111 = 255
1111111111111111 = 65535
```

How do you convert a binary encoded number into our "normal" decimal numbers? You identify what each digit with a 1 is worth and add those values together.

How do you convert a "normal" decimal number into a binary encoding? Here's how I do it: take the natural numbers that are powers of 2 (e.g. 128 64 32 16 8 4 2 1). Start with the biggest number that is less than the number you are encoding and mark that digit as "present" "on" "1" and subtract the number from what you are encoding. Now repeat this until nothing (0) is left.

The [Wikipedia article about binary numbers](https://en.wikipedia.org/wiki/Binary_number) has some pretty cool historical reference points on the topic, from different cultural locations around the world and going back millennia!
