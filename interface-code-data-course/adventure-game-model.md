---
layout: layout.njk
title: "MEDIAART 3D03: Model for an 'adventure' game"
---

# [MEDIAART 3D03](../outline/index.html): Model for an 'adventure' game

This is a basic JavaScript model for an adventure game, something like [Colossal Cave Adventure (1976)](https://en.wikipedia.org/wiki/Colossal_Cave_Adventure) or [Zork (1977)](https://en.wikipedia.org/wiki/Zork).

You can [play Colossal Cave Adventure online here](https://grack.com/demos/adventure/) and [play Zork online here](https://classicreload.com/play/zork-i.html). You can also play Colossal Cave Adventure on Debian Linux (or Debian Linux on WSL) by installing the bsdgames package and then launching adventure from your terminal:

```
sudo apt install bsdgames
adventure
```

The model provided here is just a starting point, and could be extended in many ways!

```
var world = {};
var player = { items: {} };

world.start = {
    description: "You are in a place.",
    routes: { north: "somewhereElse" },
    items: { sword: "shiny sword", shield: "wooden shield" }
};

world.somewhereElse = {
    description: "You are somewhere else, pretty different than where you started",
    routes: { south: "start" },
    items: {}
}

var place = world.start;

function go(d) {
  if(place.routes[d] != undefined) {
    const destinationName = place.routes[d];
    if(world[destinationName] != undefined) {
        place = world[destinationName];
        return place.description;
    }
    else {
        return "Uhoh you have encountered a tear in the space-time continuum.";
    }
  } else {
    return "You can't go that way.";
  }
}

function take(itemName) {
    if(place.items[itemName] != undefined) {
        const item = place.items[itemName];
        place.items[itemName] = undefined;
        player.items[itemName] = item;
        return ("You pick up the " + itemName);
    } else {
        return "There is nothing by that name here."
    }
}

// this is the main "entry-point" - it takes text entered by the player as input and returns the response to display
function respondToInput(input) {
    const cleaned = input.replaceAll("\n","");
    const words = cleaned.split(" ");
    if(words[0] == "go") {
        return go(words[1]);
    }
    else if(words[0] == "take") {
        return take(words[1]);
    }
}
```

We could incorporate the above model into a browser application, like [example 7 from the javascript in a browser page](../javascript-in-the-browser/index.html). Or we could make a custom "REPL" (read evaluate print loop) in node.js and play the game that way. That might look like adding the following to the model/code above (which will make it only work in node.js, not the browser anymore, btw):

```
function myRepl(input, context, filename, callback) {
    callback(null, respondToInput(input));
}
const repl = require("repl");
console.log(place.description);
repl.start( { prompt: ">", eval: myRepl });
```