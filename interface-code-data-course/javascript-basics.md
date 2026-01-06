---
layout: layout.njk
title: "MEDIAART 3D03: JavaScript basics"
---

# [MEDIAART 3D03](../outline/index.html): JavaScript basics

JavaScript is a language that grew up inside of (and with) web browsers. node.js is a special variation of JavaScript that runs by itself, outside of a web browser. It's useful for learning, and (later) for creating web servers and other things that have something to do with the web but don't belong in a web browser. It's a more "generic" JavaScript, I guess.

## Installing node.js (and verifying it is installed)

To install node.js on MacOS, go to [https://nodejs.org/en/download](https://nodejs.org/en/download), scroll down to where it says "get a prebuilt Node.js" change the OS to MacOS, set the architecture to x64 (older Macs) or ARM (newer Macs, i.e. M1 etc)and then click just below that to download the macOS Installer (.pkg).

To install node.js on Windows (Debian virtual machine via WSL) or ChromeBook (Debian virtual machine) we'll use apt:

```
sudo apt update
sudo apt install nodejs
sudo apt install npm
```

Whatever method you use, you should be able to verify that node and npm (an adjacent program used to install libraries/plugins/addons to nodejs) by entering the following at your terminal:
```
node --version
npm --version
```

For example, the above commands tell me I am using v20.19.2 of node an version 9.2.0 of npm. If you get an error message instead of a nice clean version number, you either haven't installed node/npm or there's something wrong with your installation.

## First steps using node.js interactively

From the terminal, launch node for interactive use by simply entering this and pressing enter: ```node```

Now it is like node.js is your terminal. Things you type will be given to it, and it will give you back text. (Strictly speaking: things you type are given to your terminal, which gives them to node, which gives back text to your terminal, which is then displayed to you.)

If you enter a number, it will give it back to you: ```7```

If you enter an arithmetical expression, it will give back the result to you: ```6+7```

You can "assign" things to "variables". Think of the variable as way of storing something and then getting it back later. For example, if we first do this: ```x = 6;```

And now we do this: ```x+8```

We should see the result 14 since the value stored in x (via the assignment operation, the equals sign) was 6. If something different was stored in x we'd get a different result. If we attempt to access a variable that has not yet had anything stored in it, we'll get an error message that that variable is not defined: ```y+8```

We can also store and add "strings" which are lists of text characters. A "literal string" (like the number 7 is literally a number) is created by encasing a list of text characters in double quotes: ```"this is literal string"```

Here's adding two strings - which gives you the "concatenation" of them: ```"one" + "two"```

And they can be stored in variables: ```x = "one";```

After the line above, what do you expect to get as the result for the following? ```x+2```

(Note: In JavaScript if you add a number and a string, it treats the number as a string and then concatenates both strings.)

You can exit the interactive node terminal by pressing Ctrl-C several times. (And then typing exit to leave the terminal you launched node in, if so desired.)

## First steps writing node.js programs in text files

Working interactively with node.js/JavaScript like in the preceding section is super useful for trying small things out, and (in the context of the web browser) for using the language to ask questions about what is going on in a website/web application. But often we need to express larger things and so need to pile up a larger design of programming instructions in one or more text files.

Use nano (or another text editor, working at the terminal) to create a file called test.js and then enter the following short program into the file, and exit/save:

```
x = 6;
y = 8;
z = x+y;
console.log(z);
```

Now you can run the program you entered above with the following: ```node test.js```

Use nano to modify the program, commenting out the last line:

```
x = 6;
y = 8;
z = x+y;
// console.log(z);
```

Now when you exit/save and then run the program, you won't see any result. This is a result of two things: (1) any line in the program that we precede with two slashes is a "comment" - while we can still read it, it is ignored by node.js; and (2) our node.js programs don't produce any text output unless we tell them to. console.log(...) is a function that prints out whatever we give to it. (We can also make multi-line comments by starting the comment with /* and ending it with */)

## Random choices in JavaScript programs

Math.random() is a function (more about the meaning of that word later) that, every time we use it, will give us a random number between 0 and 1 (including the 0 but not quite including the 1, i.e. between 0 and 0.9999999...). We can use this to make random choices. For example, the following program will display one of two messages, randomly - enter it and modify it to your taste:

```
x = Math.random();
if (x >= 0.5) {
  console.log("it's going to be sunny");
}
else {
  console.log("it's going to be cloudy");
}
```
