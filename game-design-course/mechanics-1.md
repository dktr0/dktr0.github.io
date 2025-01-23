---
layout: layout.njk
title: "MEDIAART 3L03: Mechanics 1, Collisions as triggers"
---

# Mechanics 1: Collisions as triggers

## Introduction and Overview

Level 1 of the Mechanics [area of technical practice](../technical-practice/index.html) involves making things happen when an object in the game world comes into "contact" or "collides" with another object in the game world. There is an infinite number of applications of this simple idea; the example focused on here involves a player avatar colliding with objects that are collected to increase a score, and also to restart the game or transition to another level.

This is also a great way to introduce ourselves to some very common types of nodes in Godot (these instructions are oriented to Godot 4.3, by the way). We'll see 5 types of node used in these instructions.

We'll use two types of "Body" nodes: StaticBody3D and CharacterBody3D. In general,  "...Body3D" nodes are a way of representing physics behaviours in 3D space, such as stopping something else from moving by getting in the way, making objects that are pushed by other objects, simulating the effects of gravity or friction, etc. StaticBody3D represents the physics behaviour of something that is not really expected to move, like a wall or floor. CharacterBody3D represents something that is moved by the player (or by the game designer's custom code) and which effects the physics behaviours of other things.

We'll also use an Area3D node, which allows us to detect when defined 3D spaces overlap or touch. Areas and Bodies can seem similar, so remember that Body nodes are for physics behaviours like moving, stopping, falling, sliding, while Area nodes are for *detecting* when something overlaps with or touches something else.

Both our ...Body3D and Area3D nodes will need to know their "shape" and for this we'll use a type of node called CollisionShape3D. 

Finally, we'll use a MeshInstance3D which allows us to draw an object in 3D space.

The overall shape of what we'll do is as follows, with more detailed instructions below:

- A. Launch Godot and create a new project
- B. Create a reusable Block scene
- C. Create a reusable scene for a collectable object
- D. Create a reusable scene for a Player object/controller, that also keeps track of a score
- E. Create a very simple game world scene to test the scenes we've made so far
- F. Add an exit/transition mechanic to that simple game world
- G. Scale up to a small playable game by making the world larger, more collectables, etc

And here is [a complete example of level 1 mechanics as a Godot 4.3 project folder](../mechanics-1.zip)

## A. Launch Godot and create a new project

When you first launch Godot, you'll be greeted by its "Project Manager", an interface that where new projects can be created, existing previously-loaded projects reloaded (from the main panel in the middle), and existing not-previously-loaded projects loaded for the first time (called Import).

Click Create to start a new Godot project and a new dialog pops up. Enter a meaningful name for the new project (such as Mechanics1). Click the button labeled Browse just below and to the right of where it says "Project Path" and make sure Create Folder is enabled (it is by default). Select a good, known location on your computer for the new project, then click Create & Edit (all of the other default settings are fine for now). Godot will create a new folder with the same name you specified, in the location you specified via Browse. And then it will open it in Godot's editor.

Take a moment to find the folder that was just created, using your operating system's file navigator (not Godot). This is the folder that you would compress into a ZIP file to submit your work in this class (you'd right click the folder itself, and select compress/zip/whatever, so that the whole folder and not just the files in it, is what is included in the ZIP archive). Compressing this folder into a ZIP file is also a good way to package work in progress up, either for archiving as you go, to transfer your work to a different a computer, etc. Probably no need to do that yet, though, until we've actually done something! So, on to that...

## B. Create a reusable Block scene

We'll start by creating a reusable Godot scene that is a reusable block that can be repeated, transformed, etc to build a game world. 

When you first open Godot's editor in a new project, you will be editing an empty scene (one with no nodes in it). In the Scene tab towards the top left it will say "Create Root Node:" and below that there are four buttons labeled "2D Scene" "3D Scene" "User Interface" and "Other Node". Click the one labelled "Other Node".

The "Create New Node" dialog will pop up. You can look through the central area (labeled "Matches") to see all the different types of Nodes that can be created. There's a lot! But we're only going to use 5 in these instructions. For this reusable block, it's going to be used to create things like walls and floors, that basically aren't expected to move. So we'll make the first or top node of our scene a StaticBody3D. You can find StaticBody3D in the Matches area, or you can start typing StaticBody3D in the search area until you can see it. When StaticBody3D is highlighted, click Create.

Now the Scene tab (also called the node graph), will have one node in it: a StaticBody3D. This will be the top or parent node of all the other nodes in our reusable block. It's important to give the top node of each scene a meaningful name, so rename the StaticBody3D to "Block" (or something else meaningful). I strongly suggest adopting a consistent practice of capitalization for the things that you name - I always capitalize the top nodes of my scene as if they were proper names, for example. This helps remember exactly how to type things in other contexts where you refer to them.

Once you've renamed the top node, save your work in progress on the scene with "Save Scene" from the Scene menu (or the appropriate keyboard shortcut which you can also see displayed on the menu). Godot will suggest a name that is a lowercase version of the name you entered with the extension ".tscn" on the end. That is fine, so go ahead and click Save. You should be able to see the new scene file that was saved in the FileSystem tab on the bottom left of Godot's editor.

Our Block node (which is actually a StaticBody3D node) needs two children: one to tell Godot what shape the body has (a CollisionShape3D) and another to tell it how to draw it (a MeshInstance3D). Click on the Block node (in the Scene tab) so that it is the focus, and then click on the + button near the top left to add a node as a child - use the dialog that pops up to select and create a CollisionShape3D. Then repeat this process (being sure to focus on the top Block node!!!) and add a MeshInstance3D node.

Now let's set up the CollisionShape3D node. A CollisionShape3D node is really more of a container for a shape than being a shape itself. The actual shape is typically provided by a Shape "resource" that you attach to the node in the Inspector on the right of the screen. With the focus on the CollisionShape3D, click the little drop down menu next to where it says "empty" next to "Shape" in the Inspector. Select the option "New BoxShape3D". In the 3D view in the middle of the screen, you should see a box outlined in thin blue lines. That box will be the shape of our StaticBody3D for physics purposes.

Now let's setup the MeshInstance3D node. The actual mesh to be drawn is provided by a Mesh resource attached to the node. So, this time with the focus on the MeshInstance3D, in the Inspector on the right, click on the little drop down menu next to where it says "empty" next to "Mesh" and select "New BoxMesh". At this point, you'll see a grey box in the middle of the 3D view.

Let's change the colour of the box (we're going to create several boxes for different purposes, so colour will be an easy way to tell them apart). Just below where you added the Mesh resource a second ago, expand the area labelled "Surface Material Override". Click on the menu next to the "empty" and select "New StandardMaterial3D" (another "resource"). If you then click on the sphere that appears you'll be able to edit the "material" of the surface of the box. Expand the "Albedo" area, and click on the "Color" bar - this will open an editor where you can move sliders to change the colour in various ways. Make a nice colour.

This step is finished, so go ahead and save the scene again (Save Scene from Scene menu), and close it (to keep the workspace clean/simple; Close Scene on the Scene menu, or click the little X next to the scene in the tabs at the top of the main view in the centre).

## C. Create a reusable scene for a collectable object

Now we're going to create another reusable scene (where scene = a reusable structure or graph or tree of nodes assembled in a certain way for a particular purpose) to represent a collectable object in our game. For simplicity, this will also look like a block, but it will have two key differences from the block we created above: (1) it will be in a Godot "group" which makes it easier to identify as a particular type of object in our game world, and (2) since it won't need to be a "solid" object that the player can't move through we'll use an Area3D instead of a StaticBody3D as the top node.
Since we've already done a similar procedure in step B above, the first part of these instructions will be a bit more zoomed out. Create a new scene, make its top node an Area3D, and rename the Area3D to "Collectable" or something like that. Give the new node two child nodes (just like with the block), a CollisionShape3D and a MeshInstance3D. Set up the CollisionShape3D with an appropriate resource (like before) and also the MeshInstance3D - but make the mesh a different colour so that we can tell our collectable objects from our just plain old blocks.

Finally, focus on the top node (the Collectable node, actually an Area3D) and click where it says "Node" next to "Inspector" on the top right of the editor. Then click the tab below that for "Groups", click the + button that appears just below that and enter an approriate name (suggested: "Collectable") for the group tag to be added to this node. Notice how after you do this a little icon with a square with a dot in the middle appears near the node in the Scene/node tree on the top left. 

That's it - so save it, close it, and move on to the next step!

## Create a reusable scene for a Player object/controller, that also keeps track of a score

Now we're going to create a separate, reusable scene for our Player avatar. Like the collectable object, we'll basically make a box, but this box will be (1) movable by the player, (2) be able to detect when it comes into contact with collectable objects, (3) keep track of how many collectable objects have been collected (a score), and (4) remove the collectable objects from the game as they are collected. We don't actually intened to make more than one player avatar, but it's still useful to make it as a separate scene, so that we can edit the playar avatar/controller without the distraction of the rest of the game world imposing on us.

Create a new scene whose top node is a CharacterBody3D, rename that top node "Player", and save the scene in progress.

Now it's time to add child nodes. Give the CharacterBody3D a CollisionShape3D child and give that CollisionShape3D a default BoxShape3D resource (just like the Block and Collectable). Then give the CharacterBody3D a MeshInstance3D node, and set it up with a BoxMesh resource - and give it another different colour so that our simple player avatar is easy to tell apart from the other things in our world.

Now we'll add a script to the top, Player node. Right click on the Player node and select Attach Script (or focus on the Player node and press the little button that looks like a scroll of paper towards the top right of the Scene tab). The Attach Node Script dialog pops up and it suggests a name based on the name of the node - that is fine, so go ahead and click create. Godot will set your CharacterBody3D up with a default script that provides simple arrow key movement for the player avatar. Note that you can switch between looking at the script and looking at the 3D world with the "3D" and "Script" buttons in the top middle of the interface.

Now we'll set up the detection of player collisions with collectable objects. Add an Area3D node as a child of the top Player node. To that Area3D node, add a CollisionShape3D node (so there will be two CollisionShape3D nodes in the scene for different purposes - one is a child of the top node, the other is a child of the Area3D node). Setup the new CollisionShape3D with a BoxShape3D but (*and this is an important habit*) make the BoxShape3D a tiny bit bigger than the default by editing the numbers that appear in size if you focus on the shape in the inspector (e.g. make them 1.05m instead of 1m). If you don't adopt this habit, you may run into problems with collision detection not working because the physics collision shapes push objects away before the collision is detected.

Last part of setting up our player controller is getting the Area3D to "call" into our Player script when something bumps into it (i.e. a collectable object). Here goes...

Focus on the Area3D. In the Node tab next to the Inspector, select the Signals sub-tab. The top signal under Area3D in that pane is named "area_entered". Double-click on that, and the "Connect a Signal to a Method" dialog pops up. It will suggest connecting the signal to a method in your player script, and it's default suggestion is good for now, so press connect. It will take you to the Player script and add a default/empty version of the _on_area_3d_area_entered function/method. Replace that with the following (note that the indentation with tabs is very important and must be followed exactly!):

```
func _on_area_3d_area_entered(area: Area3D) -> void:
    if(area.is_in_group("Collectable")):
    	score = score + 1;
        print("hit collectable, new score = " + str(score));
    	area.queue_free();
```

And also replace the top part of the script so that it looks like this, and the "score" variable referenced in the above example actually exists: 

```
extends CharacterBody3D

var score = 0;

const SPEED = 5.0
const JUMP_VELOCITY = 4.5
```

A short explanation of how all of the above is going to work. When the Area3D that is a Collectable object enters the Area3D that is part of the Player scene, the signal on the Player's Area3D is going to "fire" and the function/method above in the player script is going to be called (made to "go"). The variable "area" will be the Area3D from the thing that entered the player's area3d - in other words, it will be the collectable object. The script checks if that is in the Group "Collectable" (which is why we added the Collectable Area3D to that group back in that step). If it is, it prints a message to Godot's console, makes the score go up by one, and then removes the Collectable (represented by "area") from the game using .queue_free(). Don't worry if some of this is opaque at first - we'll review and play with these concepts lots of different ways in our full-class meetings until they stick!

Anyway, that's it for now for the player scene/controller, so save it and close it.

## Create a very simple game world scene to test the scenes we've made so far

We now have all of the building blocks of a game world and so can do a bit of level design in order to test them out. Make a new scene and this time click the button for "3D scene" instead of "Other Node". It will make a new scene with a Node3D as the top Node. Rename the Node3D "Game" and save the new scene in progress. We're going to add all of the elements of our game as children of the top "Game" node.

Now make a new Node3D as a child of the "Game" node and rename the new node "Environment". We're going to use this Node3D as a way of grouping/organizing all of the nodes we add that represent the fixed environment of the game. Our games will end up with hundreds or thousands of nodes, so adopting some organization strategies from the very beginning will make a big difference in our ability to successfully and efficiently complete the work!

Now make another new Node3D as a child of the "Game" node and rename it "Collectables". We're going to use *this* Node3D as a way of grouping/organizing all of the nodes we add that represent Collectable objects.  

With the focus on the "Environment" node, click the little icon that looks like a chain link to link/refer to an existing scene, and select the block.tscn scene you saved earlier. You should see your block appear in the scene you are editing. Explore moving the block with the Move tool - press W then use the arrows on the block to move it in 3D space. Now notice that you can duplicate the block by pressing Ctrl-D (maybe Cmd-D on Mac? I'm not sure...). You can make constructions of blocks by duplicating and moving blocks. You can make a block bigger by focusing on it and changin the scale properties in "Scale" under "Node3D" for the Block in the inspector. (Note that changing the numbers to non-uniform numbers will generate a warning and probably break physics/collision detection, so make sure to keep the 3 x y z numbers the same.) You could make one block really large to be a floor on which other blocks are placed.

Now with the focus on the "Collectables" node, use the little chain-link icon to link in the collectable.tscn scene, and do the same thing we did for the environment (but probably not as much) - add a few collectables here and there for the player to collect.

Now with the focus on the "Game" node, link in the player.tscn scene. 

We have a world to move in/on, items to collect, and a player avatar/controller. Our simple game is missing just two things: a camera to look at all of this stuff and display it all to the player, and some lighting to light stuff up.

With the focus on the "Game" node, add a child node that is a Camera3D and position it (by moving with W and arrows, and rotating with E and sphere controls) so that it appears to be looking at everything else.

With the focus on the "Game" node, add an OmniLight3D child and move it so it is a bit above all of the things in your game world (so it will shine down on them, like a ceiling lamp or sun).

This is now ready to test (exciting!). Save the game scene (as game.tscn). Click the play button near the top right of the editor's interface. The first time you do this it will tell you you haven't picked a default scene - direct it to the game.tscn file you just saved. You won't have to do this again (unless you want to change the default scene that loads when the play button is hit). You should now be able to see your scene, move the player avatar around, and collect objects. Cool!    

## Add an exit/transition mechanic to that simple game world

Let's explore a useful variation on the same basic idea of "collision as trigger" - an object that when the player enters/collides with it leads to some bigger transition in the game, such as restarting it or even jumping to a new level. And let's make it so that transition only works if the player has a high enough score (e.g. has collected all of the objects they can collect).

Since there's only going to be one of these in the level, let's add it directly instead of making an independent scene. With your game.tscn open, add a new Area3D as a child of the "Game" node and rename it "Transition". Give it a CollisionShape (with a BoxShape3D resource) child, and a MeshInstance3D child, with a differently coloured BoxMesh, like before). Add the "Transition" node to a new Group that you create called "Transition". Position the Transition node somewhere meaningful in the game world.

Now replace the previous ...area_entered... function/method in the Player script with this one:

```
func _on_area_3d_area_entered(area: Area3D) -> void:
    if(area.is_in_group("Collectable")):
        score = score + 1;
    	print("hit collectable, new score = " + str(score));
    	area.queue_free();
    elif(area.is_in_group("Transition")):
    	if(score<2):
            print("not enough points yet");
    	else:
            print("yay you win!");
            get_tree().change_scene_to_file("res://game.tscn")
```

Save the scene and test the game again. If you have enough points, and you hit the transition object, the scene/game should reload.

(Note: if you had multiple levels and you wanted hitting the transition to jump to the next one, you can edit the "path" provided to the change_scene_to_file function in the script example above to point to the scene file for the next level instead. Note: If there was two or more such transitions, you'd need to use a different player controller and script for each level, in the way things have been structured in these tutorial instructions; an even better way would be to add a variable to represent which level the player is in and use that to determine which new level is loaded. Let's talk about that if you're interested!) 

## Scale up to a small playable game by making the world larger, more collectables, etc

The final step is just to do more of the above, scale it up into being an interesting tiny game! When you've done that and are happy with it, compress the whole ZIP folder (i.e. the working, complete project folder of your Godot project - not just a part of that folder and not any kind of exported executabvle) and feel free to submit it as a weekly submission that would demonstrate the achievement of level 1 in the mechanics area of technical practice. To meet expectations for level 1, the game needs to be genuinely *playable* so make sure that you play test your submission and resolve any obvious, larger issues that might make the game "not really playable".

