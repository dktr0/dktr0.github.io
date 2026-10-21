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

### Example 3: Changing the text of a particular element (with .innerText)

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

### Example 4: Changing the CSS class of a particular element (with .setAttribute(...))

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

Note that in more highly scaled projects (even a little bit more highly scaled), it is common to [separate the HTML CSS and JavaScript into separate files](separating-html-css-js-files/index.html).
