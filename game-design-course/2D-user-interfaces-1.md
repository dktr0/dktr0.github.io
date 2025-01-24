--- 

layout: layout.njk 

title: "MEDIAART 3L03: 2D User Interfaces (UI) 1, titles and overlays"

--- 

# 2D User Interfaces (UI) 1: titles and overlays

## Introduction and Overview  

Level 1 of the 2D User Interfaces (UI) [area of technical practice](../technical-practice/index.html) involves using Godot's 2D user interface nodes to create a title page that begins a game, and an overlay that displays textual information (such as a score or count of hit or experience points) during a game. Both techniques can be extended in different ways and used for different things. For example, the title page technique could easily be used to deliver 2D narrative transitions in the context of a larger game.

The overall shape of what we’ll do is as follows, with more detailed instructions below: 

- A. A basic 2D title page with a panel and label
- B. Adding a button to transition to the actual game
- C. Testing the title page in full-screen and different sizes
- D. Adding a 2D UI overlay to a 3D game
- E. Incorporate these techniques in an actual small game

## A. A basic 2D title page with a panel and label

There are two ways to go through these instructions: (1) in a new empty Godot project or (2) in an existing 3D game you've made (for example, for another area of technical practice). Both work. The first might make it a little bit easier to concentrate on the unique things discussed here, the second might make it a little bit easier to incorporate the ideas into a working game. If it was me, I'd do both (first the first one, then again the second one). Your choice.

Make a new scene in your Godot project (whether it is a new project or an old one). Click the button in the scene panel/node graph to create a root node that is "User Interface". That will create a scene with a *Control* node as the root node. Control nodes can be used to turn a bunch of UI items into a group (similar to how Node3D can be used to collect/group 3D objects in the node graph/scene panel). Rename the root Control something meaningful - for example, if this is going to be a title scene for the game we could call it "TitleUI" to signify that this node (and this scene) will contain ALL of the user interface (UI) for the title scene. After you've renamed the root node, save the new scene.

Now we're going to add a coloured Panel that completely fills the screen at different sizes. Add a *Panel* node as a child of the root node). There's probably no need to rename this (unless you really want to), because we're only going to have one of them in this scene, and we're not every going to need to refer to it any way to do anything else with it (e.g. from a script). In the inspector, Control, Layout: change Layout mode to Anchors, and select "Full Rect" in the Anchors Preset. At this point you should see the panel expanding to fill the default resolution of the game. To change the color of the panel, find Theme Overrides in the Inspector, click where it says Empty next to Panel and select "New StyleBoxFlat". Click on the StyleBox resource that is created right there to expand it. Now you can pick a color by clicking on the thing that is labeled "BG Color".

Next we'll add a Label to display the title of the game. As a child of the Panel node, add a *Label* node. I do suggest renaming this something meaningful, like "Title", because we could easily have more of these as the UI evolves. In the Inspector under "Label" enter a title for the game in the Text field. You should see the text, but it will be aligned with the top left. To centre it on the screen horizontally and vertically, in Inspector: Control: Layout, change Layout Mode to Anchors, and then Anchors Preset to "Center". 

We should also choose and use a good font for our game's title. We'll need a carefully chosen TrueType font file for this, one that we have permission to use for our purposes and which suits the aesthetic we're going for. One place (of many) that you can download Creative Commons 0 fonts is [this specific page](https://www.fontspace.com/category/cc0). Note that only that specific page is CC0 not the whole website there. Once you've got a TrueType font file ready to go, you drag and drop it into your Godot filesystem (bottom left of Godot editor). Next step is to apply the font to the Label we just made. With the focus on the label, click the <empty> next to Label Settings (in the Inspector) to add a New LabelSettings resource. In that resource, drag and drop your TrueType font from the Godot file system into the expanded Font area. You can also change the size and colour of the font there. Make it look nice! Of course, you add additional labels to express things like credits, other pertinent information, etc.

Test the scene by clicking the Run Current Scene button (looks like the Scene icon, in the row of icons at the top right of Godot's editor; keyboard shortcut is F6 if you have a full keyboard at your disposal). You should see the UI you've designed so far!

## B. Adding a button to transition to the actual game

Next, we'll add a button that will take the player from the title page into the "actual game". Add a new *Button* node as a child of the Panel node. Rename it "StartGameButton" or something equally meaningful. In the Inspector: Button: Text area enter some text for the button like "Start" or something like that (whatever makes sense to you).

To control the font of the button, expand Inspector: Control: Theme Overrides: Fonts and hook the button up with a TrueType font like you did in the instructions above for a label (i.e. dragging and dropping the font from Godot's filesystem, to a specific place in the Inspector).

Let's position the button using custom anchors (since the centre-middle is already taken!). In Inspector: Control change Anchors Preset to Custom. Now in Ancor points change Left to 0.25 and Right to 0.75, this will make a button whose left edge is 1/4 of the way in from the left of the screen and whose right edge is 1/4 of the way in from the right of the screen. Now change the top to 0.7 and the bottom to 0.8 (to make a button that should be comfortably below the title label). Depending on what fonts you are using and what else is going on, of course, you might need to tweak these numbers.

To make the button do something, we'll connect a signal in the button to a function in a script. So we'll need a script. The most logical place for this script is attached to the root node of this UI scene (that's often the most logical place to attach a script in a modular, independent scene). Focus on the root node and click the add script button. You should have already given that node a meaningful name, so it will propose a similar name for the script file to be created.

Now let's connect the signal that the button issues when pressed, to a new function in that script. Focus on the button in the scene panel, and then in the Node panel (next to the inspector) bring up the Signals sub-panel. Under "BaseButton" you'll notice a signal for "pressed()" (amidst lots of other signals that could be used to "capture" other events that happen pertinent to this node - it's useful to take amoment to look at all of them briefly just to get a sense of it all). Click to connect the "pressed()" signal - Godot will suggest a name for a new function it will create in your script. The defaults should all be good, so go ahead and click Connect.

To help understand how this works, as a first step, let's make it that when the player presses the button, a message gets printed to the console. Replace the "pass" statement in the new function that was created (the one that respond to the button press) with a print statement. The final result might look something like this (the name of the function will be a little bit different if you named your button differently):

```
func _on_start_game_button_pressed():
    print("you pressed the button");
```

Test that by running the current scene. When you click on the button with the mouse, you should be able to see the message from your print statement/call appear in Godot's Output window (near the bottom). If so, that's great - you've verified that your button works and that when it is pressed a specific function from your script is being called (made to run/execute).

What we really want to do, though, is have Godot shift to playing a completely different scene when the player presses the button. If you aren't working in an existing game project, make a new empty 3D scene (i.e. with a Node3D root node), rename it Game, and save it as game.tscn, then close it. If you're working in an existing project, you probably already have a main game scene saved in your project. Back in the script for the UI scene, let's add an instruction (similar to the one that appears in the exit/transition section of the Mechanics 1 instruction) to change Godot's overall scene to a new specific scene file. After adding the instruction, the function that responds to the button press would like something like this (change game.tscn to correspond to whatever your actual game scene is called if you already had one):

```
func _on_start_game_button_pressed():
    print("you pressed the button");
    get_tree().change_scene_to_file("res://game.tscn");
```

Test it out by running the current scene (the UI one) and clicking the button. You (as the player) should be taken to whatever game.tscn is when the button is clicked (i.e. an empty scene if you just made an empty game.tscn, your actual game if you already had a working main game scene).

Since this is a title page, it would make sense for it to be the first scene that is experienced by the player when the game is launched. This can be selected in Project Settings (from the Project menu) under Application: Run. There you'll see an entry for Main Scene and clicking on the button to the very right of that will let you choose any .tscn (scene) file in your project as the first scene when the game launches. So, pick your title UI scene as the project's main scene.

Now you can test that out by running with the Run Project button (the one that looks like a Play icon, shortcut = F5 if you have a full keyboard). That should launch your Title UI page, and clicking on the button should take you to your actual game. Nice!

## C. Testing the title page in full-screen and different sizes

It's very important to test games at different sizes and shapes of display, including in and not in full-screen mode. Take a moment to test your title page (and game, if you have one) at different sizes by clicking and dragging on any of the corners of the window to resize it. It's probably okay if things start to "break" (i.e. not look great, become hard to understand and use) when you make the window really really small, but we probably want stuff to work from about a quarter of a screen up to an entire screen (or more).

To test in true full-screen mode, we'll need to set up a keyboard shortcut that let's the player switch in and out of fullscreen mode. 

This is a good chance to start to work with Godot's Input Map, which assigns names/handles to specific physical user interactions and allows us to make equivalencies between different physical user interactions (for example, having a keyboard key and a button on a controller both amount to the same thing elsewhere in our project).

We'll add an "Action" to the Input map for our keyboard shortcut. In Project: Project Settings: Input Map, enable "Show Built-In Actions". Then, where it says Add New Action, type "fullscreen" as the intended name for our new action, then click the "+ Add" button directly to the right of that. Now it will listen for input. Press ctrl-shift-f, and you should see it respond/pick that up. Press Okay. Now the "action" "fullscreen" will "happen" anytime someone presses that combination of keys.

Next we'll set up some code in our UI script that does something if the user has just pressed our "fullscreen" action. Replace _process function in UI script with the following (as always, ):

```
# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
    if Input.is_action_just_pressed("fullscreen"):
        var m = get_window().mode;
        if m == Window.MODE_WINDOWED:
            get_window().mode = Window.MODE_FULLSCREEN;
        else:
            get_window().mode = Window.MODE_WINDOWED;
```

Do the exact same in a script attached to the top node of your actual game scene as well. That way, in both scenes - the title and the actual game - every frame of rendering Godot will check if the action from the input map was pressed and if so it will toggle the full-screen mode. Test your UI in full-screen by launching the game and pressing the keyboard short-cut you set up (in both the title page and the actual game). Note that our individual and collective games in this course should work in both full-screen and in a reasonable selection of different not-full-screened sizes, so get used to testing full-screen and not full-screen!

## D. Adding a 2D UI overlay to a 3D game

Another use of 2D user interface elements is overlaying displays on top of the view provided by our 3D camera. We'll create an independent "Overlay" scene for this, which can then be added (instanced in to) another scene (e.g. our main game scene). Making the overlay in a separate scene is an especially important habit as we move towards our collective game, because it makes all of the design of this aspect of things exist in an independent file that can be edited/changed independently of the scenes where it is used/incorporated. This makes it much easier for different people to work on those things at different times, e.g. one person responsible for the overlay itself can work on it at the same time as someone else is working on a scene where that overlay appears.

Create a new scene with a "User Interface" root node (i.e. a Control node). Rename the root node "Overlay" and save the scene for the first time.

Add a Label node as a child of the root node and call it "Score" or something equally meaningful. In the Text area (Inspector: Label: Text) enter a starting text to display (maybe "--"?). In Inspector: Control: Theme Overrides: Fonts, drag and drop a true type font from your project filesystem, and just below that, set a font size. Align it somewhere interesting, maybe the top or bottom right corner with Inspector: Control: Layout Mode -> Anchors
and then selecting a suitable Anchors Preset directly below that (or you can use custom anchors too like we did with the button above, whatever works).

Now add a script to the root node (the "Overlay") node, and add a new function to that which can be used by other scripts whenever what is displayed in the score (or whatever) overlay needs to change:

```
func setScore(x):
    $Score.text = str(x);
```

You can test it by changing the _ready function in the Overlay script to call the new function you made and set it to some different value than what you had already:

```
# Called when the node enters the scene tree for the first time.
func _ready():
    setScore(1977);
```
Test it out. Whatever you had earlier for the score should be replaced by what the function call is asking it to display instead.

Note that the way we've defined the setScore function it will work even if we don't give it a number. The str function converts whatever it is given into text - so if we give it a number it becomes text, if we give it text it becomes (well, stays) text. For example:

```
# Called when the node enters the scene tree for the first time.
func _ready():
    setScore("test");
```

Add the overlay scene to the game by instancing the overlay.tscn scene as a child node of the actual game's main node. When you run the actual game scene, you should see the overlay wherever you put it.

Now whenever your actual game changes a score, count, etc, you can display that by calling the setScore function of the overlay scene you just created. Exactly how this looks depends on what your nodes are called and how they are arranged in a hierarchy. If your top level node is called "Game" and you have the "Overlay" as a child of that then calling the setScore function in the overlay scene would look something like:
```
$"/root/Game/Overlay".setScore(....); # note the .... is a placeholder!
```

As an example here's the Player script from the level 1 Mechanics instructions, altered so that as the player collects objects the score is increased:
```
func _on_area_3d_area_entered(area: Area3D) -> void:
    if(area.is_in_group("Collectable")):
        score = score + 1;
    	print("hit collectable, new score = " + str(score));
	$"/root/Game/Overlay".setScore(score);
    	area.queue_free();
    elif(area.is_in_group("Transition")):
    	if(score<2):
            print("not enough points yet");
    	else:
            print("yay you win!");
            get_tree().change_scene_to_file("res://game.tscn")
```

Note: If you have an empty main game, you can't actually meaningfully incorporate the setting of the score meaningfully. If you've been working in an empty/test Godot project, now is the time to go back and do this stuff "for real" (or, I guess, in a completely new main game that you make too, whatever works.)

## E. Incorporate these techniques in an actual small game

In whatever way makes sense with what you've been doing so far, incorporate these techniques into an actual small game that uses these ideas creatively. 

## What to submit

Submit a playable game that (a) starts at a 2D title page, with a button to start the game proper, (b) where the game features some kind of updating display (e.g. score, hit points, experience points, whatever), (c) with the ability to switch to/from full-screen during the title and actual game, and (d) where the UI adjusts nicely to different sizes of window (including full-screen). Submit the game as a complete, working Godot project folder that has been compressed into a ZIP archive (ZIP the whole folder not just its contents, make sure you save and exit Godot before ZIPping it, and don't submit any kind of exported executable).
