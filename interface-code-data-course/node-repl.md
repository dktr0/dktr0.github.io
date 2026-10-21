---
layout: layout.njk
title: "MEDIAART 3D03: Model for a REPL via node and the terminal"
---

# [MEDIAART 3D03](../outline/index.html): Model for a REPL via node and the terminal

This is a basic model for creating a REPL ("read evaluate print loop") using node.js - it could for example be the basis of a text adventure game that runs in the terminal, an ELIZA-style chatbot, or your own interpreted text programming language, etc.

Here's a template you could copy to a text file (for example, myChatBot.js) and then modify. The respondToInput function receives the text input entered by the user, and returns whatever the program should display/say to the user: 

```
const repl = require("repl");

function myRepl(input, context, filename, callback) {
  callback(null, respondToInput(input));
}

repl.start( { prompt: ">", eval: myRepl });

function respondToInput(i) {
  return "you entered the text " + i;
}
```
