---
layout: layout.njk
title: "MEDIAART 3D03: A simple text adventure game"
---

# [MEDIAART 3D03](../outline/index.html): A simple text adventure game

Here's a model for a simple text adventure game in the form of a function respondToInput() that accepts user input and returns text to display. Note that this is not a complete example - to actually use it you would likely need to combine it with some kind of model for a REPL, e.g. [creating a REPL with node](../node-repl/index.html) or [creating a REPL in the browser](../browser-repl/index.html). For a more complex model of an approach to an adventure game, see [here](../adventure-game-model/index.html).

```
var playersName;
var stage = "start";
var hasSword = false;

function respondToInput(i) {
  // this is our main entry point
  // it receives text from the user (i)
  // it will give back text to display

  if(stage == "start") {
    playersName = i;
    stage = "swordChoice";
    return "great, hi. There's a sword here, do you take it or not?" + i;
  }

  if(stage == "swordChoice") {
    if(i == "yes") {
      hasSword = true;
      stage = "doorChoice";
      return "you take the sword and notice the two doors, one on the left, one on the right. Which door will you take, " + playersName + "?";
    }
    else if(i == "no") {
      return "are you sure? I really think you should take the sword, " + playersName;
    }
    return "yes or no?";
  }

  if(stage == "doorChoice") {
    if(i == "left" || i == "go left" || i == "left door") {
      stage = "end";
      return "you fall down a hole and die."
    }
    else if(i == "right" || i == "go right" || i == "right door") {
      stage = "end";
      return "a piano falls on you and you die."
    }
    return "left door or right door, " + playersName;
  }

  if(stage == "end") {
    return "you can't do anything you are dead"
  }

  return "Uhoh I think there was a problem."
}
```
