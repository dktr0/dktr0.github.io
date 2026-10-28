---
layout: layout.njk
title: "MEDIAART 3D03: Making a REPL in the browser"
---

# [MEDIAART 3D03](../outline/index.html): Making a REPL in the browser

Here's a basic model for an interactive "REPL" (read evaluate print loop) in the browser. It could be could be the basis of a text adventure game, a bad chatbot, a web operating system, etc. The key overall thing to note in the model is that the function respondToInput (which we define) is called repeatedly, everytime the user enters some input, with the input they entered as the variable/argument i, and is expected to return some text which is the resulting text that is displayed to the user. Here's the self-contained index.html (i.e. HTML CSS and JavaScript all in the same file):

```
<html>
  <head>

    <style>
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
    </style>

    <script>
function userTypedSomething(ev) {
  var key = ev.keyCode;
  if(key == 13) {
    console.log("enter pressed");
    var textArea = document.getElementById("userinput");
    var theText = textArea.value;
    textArea.value = "";
    var textToDisplay = respondToInput(theText);
    addToLog(textToDisplay);
    ev.preventDefault();
  }
}

function respondToInput(i) {
  // this is our main entry point
  // it receives text from the user (i)
  // it will give back text to display
  return "go away";
}

function addToLog(x) {
  var log = document.getElementById("log");
  log.innerText = log.innerText + "\n" + x;
}
     </script>
  </head>

  <body>
    <div id="log">Hello. Please type your message in the terminal below.</div>
    <textarea id="userinput" rows="3" cols="40" onkeypress="userTypedSomething(event);"></textarea>
  </body>

</html>
```
