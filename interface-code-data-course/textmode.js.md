---
layout: layout.njk
title: "MEDIAART 3D03: Notes on textmode.js"
---

# [MEDIAART 3D03](../outline/index.html): Notes on textmode.js

## textmode.js

Here's [textmode.js' main website](https://code.textmode.art/).

In theory there are three ways to use it, via [the online editor](https://editor.textmode.art/) and by loading it as a JavaScript module (either the older UMD way or the newer ESM way). I found the online editor didn't match the current documentation for the project, and is a better investment (IMHO) to focus on the newer ESM way, so here's an "all in one file" starter example, based on the ESM module method, for textmode.js.

We can grab a copy of the textmode.js library using npm (node package manager). That would go something like this... If you don't already have a project, make a new folder for the project, change into it, do npm init (and just press enter to answer all the questions), and then npm install textmode.js:

```
mkdir my-cool-project
cd my-cool-project
npm init
npm install textmode.js
```

If we poke around now with cd/ls etc we'll find a file called textmode.esm.js in the folder node_modules/textmode.js/dist/ under our project folder. We can then load that JavaScript module into any JavaScript module we make in our project. Here's an example (all in one file) of that (this might be called index.html):

```
<html>
 <body>
  <script type="module">

import { textmode } from "./node_modules/textmode.js/dist/textmode.esm.js";

// sketch.js
const t = textmode.create({
    width: window.innerWidth,
    height: window.innerHeight,
    fontSize: 16,
    frameRate: 60
});

t.draw(() => {
    t.background(32); // Dark gray background
    // insert further drawing instructions for each frame here
});

  </script>
 </body>
</html>
```

Possibly useful for games/demos etc using this - basic approach to catching user keyboard events in the browser:

```
document.onkeydown = function(ev) {
  console.log(ev.key); // prints the key that was [pushed]
}
```

Here is [a useful online tool for getting information about the various pieces of information in a key down event](https://www.toptal.com/developers/keycode).

Also relevant: This is [a good resource with notes on importing JavaScript libraries (potentially with various complications) in browser projects](https://jvns.ca/blog/2024/11/18/how-to-import-a-javascript-library/).