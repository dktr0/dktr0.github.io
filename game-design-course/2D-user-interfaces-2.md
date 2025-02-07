--- 

layout: layout.njk 

title: "MEDIAART 3L03: 2D User Interfaces 2: inventories and popup dialogues"

--- 

# 2D User Interfaces 2: inventories and popup dialogues

For this level and [area of technical practice](../technical-practice/index.html), submit a small playable game that somehow meaningfully incorporates all of the items discussed in somewhat more detail below:

- Inventories
- Popup message and choice dialogues
- Clickable 3D objects

## Inventories

By inventories, I mean anything that displays collections of discrete images to the player. This could be representations of collected objects, icon-based representations of health point, etc etc etc. There are many ways this can be done, but the one explored here in this technical area uses Godot's "container" controls to display a variable number of 2D images.

The basic approach is something like this:

- use image-editing software (for example, [GIMP](https://www.gimp.org/)) to create small transparent icons for the objects/things you want to represent/count
- make an independent scene in your Godot project for each icon
- make another independent scene for the Inventory as a whole, with scripts that make it easy to change what is displayed from other places/scripts in your project

### Make small transparent icons

You can use whatever software you like to do this, but here are some tips/starting points for the [(completely free, open source, and very full-featured!) GIMP](https://www.gimp.org/).

- select File: New to bring up the Create a New Image dialogue
- enter a small image size (e.g. 64 by 64 pixels)
- bring up the Advanced Options
- change Fill with Background color to Fill with Transparency
- draw/paint/etc a nice image to represent an object/health point/etc
- probably save it as GIMP project in case you need to do further work on it later
- export it as .PNG image file and then drag and drop the .PNG file into your Godot project folder

### Make an independent scene for each icon in the inventory

For each icon you're going to use, create an independent scene for it. Each scene should:

- have a root node of type TextureRect (select Other Node when making the scene, look for TextureRect)
- don't forget to rename the root node something meaningful such as the name of what is being represented
- drag and drop the PNG image file from Godot's filesystem to the "Texture" area of TextureRect in the inspector
- save the scene with a meaningful name as a .tscn file in your Godot project

### Make an independent scene for the inventory as a whole

- the root node will be of type Control (so you can just select User Interface after making the new scene)
- rename the root node something meaningful, e.g. Inventory
- add a child node to the root node of type HBoxContainer
- change the Layout Mode for the HBoxContainer to Anchors
- and select the Bottom Wide Anchors preset (or another one, whatever you like)

The HboxContainer will arrange any children it has into a nice horizontal row (there's also VBoxContainer as well as other containers, by the way). But we're not going to add the children directly in the Scene panel/node graph. Instead, we'll use a script to add/remove children. Add a script to the root node. Here's a complete example of a script that works with one item type (a "heart" icon) that you can adapt to your game's needs.

```
extends Control

@onready var heartScene = preload("res://heart.tscn");

func _ready():
	setNumberHearts(0); # change to 1 2 3 4 etc to test- 
	deleteAllItems();
	for x in n:
		addItem();

func deleteAllItems():
	for x in $HBoxContainer.get_children():
		x.queue_free(); 

func addItem():
	$HBoxContainer.add_child(heartScene.instantiate());
```

## Popup message and choice dialogues

### A model for a popup message dialogue

- Make a new UI (Control) scene, give its root node a name like "Popup" or "Message" and save it
- Make a Panel node as a child of the root node, set its Anchor Preset to Custom and then set Anchor Points to give it a good amount of screen real estate (for example: left=0.1, top=0.4, right=0.9, bottom=0.6)
- To display whatever message we are going to display, make a RichTextLabel child of the Panel, change its Layout Mode to Anchors, Anchors Preset to Custom, adjust anchor points to something nice (for example: left=0.1, top=0.1, right=0.9, bottom=0.7). Note that RichTextLabel will automatically get a scrollbar if and when you give it more text than can be displayed in the provided area.  Just as with the simple Label (from 2D UI level 1) you can use the Theme Overrides: Fonts and Theme Overrides: Font Sizes section to change the font and font size to something suitable for your game.
- Add a button as another child of the Panel, that will be used to dismiss the popup message.
- Add a script to the root node of the popup scene
- Connect the pressed() signal of the button to the script of the root node (suggested name is fine)
- Now here's a complete script that can be used for the popup message scene (and adapted as/when you need):

```
extends Control

var callback : Callable;

func setup(t : String, cb : Callable = Callable()):
	$Panel/RichTextLabel.text = t;
	callback = cb;

func _ready():
	$Panel/Button.grab_focus();
	
func _on_button_pressed():
	if !callback.is_null():
		callback.call();
	queue_free();
```

To test/use this popup you would add something like the following elements to a script attached to some other node in your game (maybe a player controller, or maybe a game controller script attached the top node of your game, etc). 

Near the top of the script, preloading the popup scene for later use...
```
@onready var popupScene = preload("res://popup.tscn"); # assuming popup scene is called popup.tscn
```

Also near the top of the script, making a function that makes it easier to make the popup go...
```
func popup(t : String, cb : Callable = Callable()):
	var popup = popupScene.instantiate();
	popup.setup(t,cb);
	add_child(popup);
```

Here's an example of using the popup. In the example, the popup is triggered by the _ready function, but its more likely you would have it in a function/method that responds to some event in the game, like clicking on something (more about this below!), bumping into something, etc...
```
func _ready():
	popup("This is some awesome text that I want to share with the player.",Callable(self,"followup1"));
	
func followup1():
	print("here's the followup");
```

A bit of explanation of how the above works. When the popup function is called (in _ready) it is provided with two "arguments" - two pieces of additional information - a piece of text to display, and a "Callable" which is way of representing a function that can be called later (in this case, the function called "followup1" from this node, i.e. "self"). The popup function then makes a popup scene (from the preloaded scene), calls its "setup" function with the text to display and the Callable, and then adds it to the current scene. The script in the popup scene has been set to call/run the function from the provided Callable when the popup is dismissed, at which point followup1 is called, and the message is printed to the console. In a real game, instead of printing a message to a console, you might trigger another popup, change a variable to record that something has happened, etc etc etc.

### A model for a popup choice dialogue

This is very similar to the popup message dialogue above. Make a new scene with a Control (User Interface) root node, rename it and save it, give it a Panel child and set its Layout/Anchor properties as above. Give it two buttons instead and position them to the left and right and name them something like "FirstButton" and "SecondButton".

We'll want people to be able use the keyboard and a game controller's D-Pad, if necessary/if they prefer, to select from these two options, in addition to letting them click on them with the mouse. To make this work best, we should set up the Focus settings in Control on each button. For example, if SecondButton is to the right of FirstButton, you would set "Neighbour Right" of FirstButton to SecondButton. Also set the Next and Previous things to point between the two buttons. This will ensure that when the player navigates with Tab, arrow keys, or a controllers D-Pad, the focus goes where they expect it to go.

Add a script to the root node, and connect the pressed() signal of both buttons to the script. Now here's a script that you can use to implement the choice dialogue in a similar way to the popup dialogue above. Note that you may need to change the name of the functions that respond to each button press if you called the buttons something slightly different:

```
extends Control

var callback : Callable;

func setup(t : String, c0 : String, c1 : String, cb : Callable = Callable()):
	$Panel/RichTextLabel.text = t;
	$Panel/FirstButton.text = c0;
	$Panel/SecondButton.text = c1;
	callback = cb;

func _ready():
	$Panel/FirstButton.grab_focus();

func dismiss(n : int):
	if !callback.is_null():
		callback.call(n);
	queue_free();

func _on_first_button_pressed():
	dismiss(0);

func _on_second_button_pressed():
	dismiss(1);
```

Now, like with the popup message, here are some example of how to use the choice scene you've made...

Somewhere near the top of a script that is going to make a choice popup happen...
```
@onready var choice2Scene = preload("res://choice2.tscn");
```

And then a function to make it more convenient to make a choice popup happen...
```
func choice2(t : String, c0 : String, c1 : String, cb : Callable = Callable()):
	var choice2 = choice2Scene.instantiate();
	choice2.setup(t,c0,c1,cb);
	add_child(choice2);
```

And here's an example of using it in the _ready function (although in reality you would probably use it in response to some game event):
```
func followup1():
	print("here's the followup");
	choice2("Now I am presenting a choice. Do you want to go left or go right?","Left","Right",Callable(self,"followup2"));

func followup2(n : int):
	if n == 0:
		print("the player selected left");
	else:
		print("the player selected right");
```

## Clickable 3D objects

Clickable 3D objects is a natural topic to pair with popup and choice dialogues because its easy to imagine clicking on an object triggering some kind of text-narrative interaction. Here's a simple model for making a 3D object in your game "clickable":

- The object to be clickable should have a physics body (StaticBody3D, RigidBody3D, or CharacterBody3D) or Area3D as its root node. You probably already have independent scenes like that (no need to start them from scratch, you can easily take an existing scene and modify it to be clickable).
- Make sure there is an action called "left_click" in Project: Project Settings: Input Map, set up to respond to left mouse button
- Connect the input_event signal of the root node to a function in a script attached to that root node (suggested name for the function is fine)
- Here's a function (to add/replace to the root node's script) for testing that the object is detecting mouse clicks okay:

```
func _on_input_event(camera, event, event_position, normal, shape_idx):
	if event.is_action_pressed("left_click"):
		print("clicked");
```

Test the above before going further. If it's not working, check if you have any 2D UI in your 3D scene. If you do, check the Mouse area in the Inspector for the top-level node of your 2D UI and change Filter to "Pass", that should hopefully fix it.

We want to make it easy for clicking on the object to lead to some effect in the scene in which the object is inserted. To do this we'll add a custom signal (a signal of our own) to the clickable object's scene.

Somewhere near the top of the clickable object's script:

```
signal clicked()
```

And then here's changing the function that responds to the input event so that it issues the custom signal instead of printing to the console:
```
func _on_input_event(camera, event, event_position, normal, shape_idx):
	if event.is_action_pressed("left_click"):
		clicked.emit();
```

Now you can connect that signal in another scene where you use the independent scene of the clickable object to do whatever it is you want, for example causing a popup or choice to appear, possibly then setting a variable to record that a certain interaction has already happened...

## What to submit

Submit the complete, working Godot project folder of a small playable game that meaningfully incorporates all of the above topics (inventories, popup and choice popups, and clickable 3D objects).
