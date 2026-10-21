---
layout: layout.njk
title: "MEDIAART 3D03: Separating HTML CSS and JavaScript into separate files"
---

# [MEDIAART 3D03](../outline/index.html): Separating HTML CSS and JavaScript into separate files

As projects get larger and "messier", keeping them organized and "cleaner" becomes more important for managing the cognitive load of working on them. One small strategy that can help is to separate the different parts of a web project into separate files, for example, the HTML and "content" in one or more HTML files, the visual aesthetics and "style" in one or more CSS files, and the custom interactive logic in one or more JS (JavaScript) files.

Here's a stripped down model of a simple web page that has been divided into three files - with exactly the same functionality as example 5 from the [JavaScript in the browser page](../javascript-in-the-browser/index.html):

### index.html

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

Note in the above the line with the 'link' element and how it references another file called style.css. This is how the browser knows to also look for and respond to the file called style.css. And note also in the 'script' element the 'src' attribute that references index.js - this is how the browser knows to look for and execute the JavaScript contained in the separate file called index.js.

### style.css:

```
.myclass {
  position: absolute;
  left: 0%;
  top: 0%;
}
```

### index.js:

```
function doSomething() {
  var left = Math.random()*98;
  var top = Math.random()*98;
  var style = "left: " + left + "%; top: " + top + "%;";
  var thediv = document.getElementById("thediv");
  thediv.setAttribute("style",style);
}
```
