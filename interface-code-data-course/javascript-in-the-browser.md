---
layout: layout.njk
title: "MEDIAART 3D03: JavaScript in the browser"
---

# [MEDIAART 3D03](../outline/index.html): JavaScript in the browser

## The Web console/terminal

Right click in an empty browser tab and choose "Inspect" (or something like that). Then from the tab that pops up navigate to something called "Console" (or something like that). This gets you to an interactive console/terminal that is in many ways similar to interacting with JavaScript via node.js and the terminal - except that it is in the browser (which means ultimately that some different possibilities are available, even if the basic rules of JavaScript still work the same way).

If you haven't done so before, take a moment to fire up a JavaScript console in your web browser and try it out. The web console can be useful for testing, figuring out problems, etc in your JavaScript-enabled websites - we'll use it particularly heavy as a way of getting feedback from our JavaScript programs about what is happening and when it is happening.

## Integrating JavaScript into HTML+CSS web pages

### Example 1: Three times/places for JavaScript

```
<html>
  <head>
    <script>console.log("this script is in the head");</script>
  </head>
  <body onload="console.log('body onload')">
    <script>console.log("this script is in the body");</script>
  </body>
</html>
```

### Example 2: Responding to the user clicking on an element

```
<html>
  <head>
    <script>
function doSomething() {
  alert("this is an annoying popup");
  alert("this is another annoying popup");
  alert("this is yet another annoying popup");
}
    </script>
  </head>
  <body>
    <div onclick="doSomething()">This is a div with some text in it.</div>
  </body>
</html>
```

### Example 3: Changing the text of a particular element

```
<html>
  <head>
    <script>
function doSomething() {
  var thediv = document.getElementById("thediv");
  thediv.innerText = "The text has changed because you clicked";
}
    </script>
  </head>
  <body>
    <div id="thediv" onclick="doSomething()">This is a div with some text in it.</div>
  </body>
</html>
```

### Example 4: Changing the CSS class of a particular element

```
<html>
  <head>
    <script>
function doSomething() {
  var thediv = document.getElementById("thediv");
  thediv.setAttribute("class","clicked");
}
    </script>
    <style type="text/css">
.notClicked {
  background-color: green;
}
.clicked {
  background-color: red;
}
    </style>
  </head>
  <body>
    <div id="thediv" class="notclicked" onclick="doSomething()">This is a div with some text in it.</div>
  </body>
</html>
```

### Example 5a: Generated/calculated CSS style info (and the example of absolute positioning)

```
<html>
  <head>
    <script>
function doSomething() {
  var left = Math.random()*98;
  var top = Math.random()*98;
  var style = "left: " + left + "%; top: " + top + "%;";
  var thediv = document.getElementById("thediv");
  thediv.setAttribute("style",style);
}
    </script>
    <style type="text/css">
.myclass {
  position: absolute;
  left: 0%;
  top: 0%;
}
   </style>
  </head>
  <body>
    <div id="thediv" class="myclass" onclick="doSomething()">This is a div with some text in it.</div>
  </body>
</html>
```

### Example 6

This is exactly the same functionality as example 5a but split into three separate text files. This is the recommended minimum of separation/modularity for your projects (more complex projects might have multiple separated HTML CSS and JavaScript files).

One of them called index.html:

```
<html>
  <head>
    <script src="index.js"></script>
    <link rel="styleSheet" href="style.css" type="text/css" media="screen"/>
  </head>
  <body>
    <div id="thediv" class="myclass" onclick="doSomething()">This is a div with some text in it.</div>
  </body>
</html>
```

One of them called style.css:

```
.myclass {
  position: absolute;
  left: 0%;
  top: 0%;
}
```

One of them called index.js:

```
function doSomething() {
  var left = Math.random()*98;
  var top = Math.random()*98;
  var style = "left: " + left + "%; top: " + top + "%;";
  var thediv = document.getElementById("thediv");
  thediv.setAttribute("style",style);
}
```

### Example 7: A framework for a text adventure game, a bad chatbot, or web operating system (etc)

Here's the index.html (notice how little it changes relative to example 6, since so much of the substance of this is in the javascript code rather than the HTML):

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
