---
layout: layout.njk
title: "MEDIAART 3D03: ASCII and ASCII art"
---

# [MEDIAART 3D03](../outline/index.html): ASCII and ASCII art

## ASCII 

ASCII ("American Standard Code for Information Interchange") is an old and influential code for representing characters, whether for the purpose of specifying what is displayed or printed (on a screen or printer) or for the purpose of registering input (e.g. keeping track of which key on a keyboard has been pressed).

[The Wikipedia page about ASCII](https://en.wikipedia.org/wiki/ASCII) has a lot of the gory details, including (if you scroll down) a helpful chart of the 1963, 1965, and 1967 variants of the ASCII code. Here are some things I'd highlight about it:

- It's from the early 1960s (first edition published in 1963) and was developed entirely by American (US) committees.
- It uses numbers from 0 to 127 to represent printable letters as well as "control characters" (e.g. delete)
- There are 128 possible values, of which 95 are printable and 33 are control
- This means each character can be represented with only 7 bits (0s or 1s)
- The "control" codes are represented with numbers 0 - 31, as well as 127
- The "printable" codes are represented with numbers 32 - 126
- It builds on and responds to earlier codes for the telegraph
- Most of our text systems nowadays use Unicode instead (to represent something closer to the full diversity of the world's text characters) - but the first 128 entries in Unicode are still just ASCII!

## ASCII art

ASCII art composes the characters of the ASCII code together for the purpose of representing shapes and images. Sometimes the term is used more loosely to refer to any sort of visual art made by putting together text characters (e.g. with characters beyond the limited ASCII set) - that seems very fair to me, especially since the limited ASCII set was very specific to a relatively narrow cultural location (official US cultures in the 1960s).

Some sources of interesting examples of ASCII art: 

- [The Wikipedia page about ASCII art](https://en.wikipedia.org/wiki/ASCII_art)
- [The ASCII Art Archive](https://www.asciiart.eu/)

## Making ASCII art with a text editor

We can make ASCII art with nano (or any other text editor). It's typically important to have a fixed-width font for ASCII art (that should be the default if you use an editor meant for programming). In Nano you can input characters by their ASCII/Unicode number (for example, from the charts on the Wikipedia ASCII page) by pressing Alt-V and then entering the number, or pressing Esc then pressing V then entering the number. You probably won't need this if you are only using the basic ASCII set (although if you have a broken key on your keyboard I guess it could be a workaround) - it will be very useful for accessing other characters to play with.

## Copying ASCII art from a file to the clipboard 

If you make some ASCII art in a text file with Nano, you might want a way to copy it to the clipboard to put it other places (for example, to share it with the class via our Discord server). That might look differently on different operating systems.

On MacOS, probably: ```cat myfile.txt | pbcopy```

On Debian (i.e. via WSL on Windows, or installed on Chromebook, or on a Linux laptop), first you'd need to install xclip: ```sudo apt install xclip```

Then here's how you'd use that: ```cat myfile.txt | xclip -selection clipboard```

If xclip doesn't work on your Linux operating system, there are other little packages that do the same thing.

If you are pasting ASCII art into Discord, it helps to use the code/preformatted mode for that - before you paste the ASCII art enter three backticks in a row (the ` character) then at the end of the ASCII art enter three more backticks. This will make it appear in a fixed width/monospace font. This convention of "escaping" code or other text that needs a fixed width font with three backticks works in some other places too.

## Adding ASCII art to HTML web pages

If you're placing ASCII art in an HTML web page, there are two things that usually need to happen: you need to make sure the ASCII art is rendered with a monospace font, and (often) you want line breaks in the original ASCII text to automatically become line breaks in the web document (which isn't the default). A simple way of accomplishing this is with the *pre* tag, for example:

```
<pre>
+++++
-   -
-   -
-   -
</pre>
```



