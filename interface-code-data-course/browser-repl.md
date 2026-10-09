---
layout: layout.njk
title: "MEDIAART 3D03: Making a REPL in the browser"
---

# [MEDIAART 3D03](../outline/index.html): Making a REPL in the browser

Here's a basic model for an interactive "REPL" (read evaluate print loop) in the browser. It could be could be combined with the [basic model here for a text adventure game](../adventure-game-model/index.html), or perhaps it could be used to create a "bad" chatbot or a web operating system (etc). Here's the index.html:

```
<html>
  <head>
    <script src="index.js"></script>
    <link rel="styleSheet" href="style.css" type="text/css" media="screen"/>
  </head>
  <body>
    <div id="log">Hello. Please type your message in the terminal below.</div>
    <textarea id="userinput" rows="3" cols="40" onkeypress="userTypedSomething(event);"></textarea>
  </body>
</html>
```

Here's the style.css:

```
#log {
  border: 1px solid black;
  width: 100%;
  height: 90%;
  overflow-y: scroll;
}
#userinput {
  border: 1px solid black;
  width: 100%;
  height: 10%;
}
```

Here's the index.js:

```
function userTypedSomething(ev) {
  var key = ev.keyCode;
  if(key == 13) {
    console.log("enter pressed");
    var textArea = document.getElementById("userinput");
    var theText = textArea.value;
    textArea.value = "";
    respondToInput(theText);
    ev.preventDefault();
  }
}
function respondToInput(i) {
  addToLog("user input: " + i);
  if(Math.random() > 0.5) {
    addToLog("yes");
  }
  else {
    addToLog("no");
  }
}
function addToLog(x) {
  var log = document.getElementById("log");
  log.innerText = log.innerText + "\n" + x;
}
```
