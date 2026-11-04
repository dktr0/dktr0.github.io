---
layout: layout.njk
title: "MEDIAART 3D03: Notes on textmode.js"
---

# [MEDIAART 3D03](../outline/index.html): Notes on textmode.js

## Setting a project up to use the textmode.js library

Here's [textmode.js' main website](https://code.textmode.art/).

In theory you can use it via [the online editor](https://editor.textmode.art/). However, I found the online editor didn't match the current documentation for the project (the last time I tried), so it's probably a better investment to "do it ourselves" in a suitably configured website project folder, instead. That might go something like this:

```
mkdir my-cool-project
cd my-cool-project
npm init
npm install textmode.js
npm install --save-dev vite
npx vite
```

After that last step, you'll be running the "vite" web server (an alternative to the simple http-server we've been running earlier in the course). vite will automatically take care of some things to do with using libraries/modules in JavaScript, so it's definitely the way to go for these experiments with textmode.js (and also three.js).

I suggest leaving that vite server running in one terminal window, while editing files using nano in another terminal window that you open. Here's an all-in-one example index.html that loads the textmode.js library and uses it to do one simple thing (drawing a grey background) as a test that everything is setup, ready for further work:

```
<html>
  <body>
    <script type="module">

import { textmode } from "textmode.js"; // importing the textmode.js library

const t = textmode.create({ // setting up a textmode.js object with some key options
    width: window.innerWidth,
    height: window.innerHeight,
    fontSize: 16,
    frameRate: 60
});

function myDrawingFunction() { // a function that will be called repeatedly, every frame, to draw
  t.background(32); // Dark gray background
  // insert further drawing instructions for each frame here
}

t.draw(myDrawingFunction); // make it go!!!
    </script>

  </body>
</html>
```

If we navigate our browsers to 127.0.0.1:5173 (the default address vite will use to serve us our website), we should see the dark grey background. If that works, then we're ready to experiment with drawing different things by changing the contents of the myDrawingFunction() function.

## Some textmode.js drawing functionality

Here's the first example from the textmode.js "Start" document, translated into the slightly modified syntax of the example above (more familiar to the class):

```
<html>
 <body>
  <script type="module">

import { textmode } from "textmode.js";

// sketch.js
const t = textmode.create({
    width: window.innerWidth,
    height: window.innerHeight,
    fontSize: 16,
    frameRate: 60
});

function myDrawingFunction() {
  t.background(32);
  t.char("@");
  t.charColor(255,180,90);
  t.cellColor(0,0,0);
  t.rotateZ(t.frameCount*2);
  t.rect(12,8);
  }

t.draw(myDrawingFunction);
  </script>
 </body>
</html>
```

Once you have that working, I recommend taking a look at the official learning documentation from the textmode.js website, possibly in this order:

- the documentation about [drawing shapes](https://code.textmode.art/docs/drawing-shapes)
- the documentation about [transforms](https://code.textmode.art/docs/transforms) which will help you draw other than in the middle of the screen

## Catching user keyboard events in the browser

Possibly useful for games/demos etc using the above - basic approach to catching user keyboard events in the browser:

```
document.onkeydown = function(ev) {
  console.log(ev.key); // prints the key that was [pushed]
}
```

Here is [a useful online tool for getting information about the various pieces of information in a key down event](https://www.toptal.com/developers/keycode).

## Technical Footnotes

This is [a good resource with notes on importing JavaScript libraries (potentially with various complications) in browser projects](https://jvns.ca/blog/2024/11/18/how-to-import-a-javascript-library/).
