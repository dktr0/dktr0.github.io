--- 

layout: layout.njk 

title: "MEDIAART 3L03: Camera and Control 1, 2D motion in 3D spaces"

--- 

# Camera and Control 1: 2D motion in 3D spaces

Level 1 of the Camera and Control [area of technical practice](../technical-practice/index.html) is about making a camera that follows a player avatar as it moves in 2-dimensional ways through a 3D space. The instructions are oriented to a specific variation of this idea - the side-scrolling platformer - but the basic techniques can easily be adapted to different types of motion. A key aspect that is developed here and not in the other level 1 areas is having the game be playable using both the keyboard (and possible mouse), and also via a game controller - this will be important for both the individual game project and the collective game project in this course. We also explore two objects (characteristic of side-scrolling platformers and adaptable to other types of games) that can be used/extended/modified/applied as you make more scaled up games in this area (trampolines and teleporters).  

The overall shape of what we’ll do is as follows, with more detailed instructions below: 

- A. Make a player scene that includes a camera
- B. Setup input map for keyboard and game controller control
- C. Tweak the default CharacterBody3D script for 2D motion
- D. Make a trampoline
- E. Make a teleporter
- F. Scale up to a complete very tiny game

## A. Make a player scene that includes a camera

The basic mechanism of a side-scrolling platformer is to have a camera that follows a player avatar as the move through the world, looking at them from the side while they move mostly along one axis (for example they mostly move along the x-axis, but less frequently jump/climb/etc in the y-axis, they rarely or never move in the z axis). The instructions that follow offer a simple model for a player controller oriented to this type of game (this is very similar to the player controller in Mechanics 1 instructions, but with the difference of an included camera and axis lock.)

- make a new scene with a CharacterBody3D root node, rename the root node (e.g. "Player"), and save it
- give it MeshInstance3D child for what it should look like (okay to use a cube while learning; in a real game, this would probably be an imported 3D asset from Blender like in the [level 1 3D assets instructions](../3D-assets-1/index.html)).
- give it a CollisionShape3D child and set that up with an actual and appropriate shape
- give it a Camera3D child, positioned somewhere in front (looking at) the player mesh, possibly a little higher than player (you can come back and tweak the relation of the camera to the player anytime)
- give it an Area3D child, that itself has a Collisionshape3D child, the latter with a shape resource a little larger than the 1st collision shape resource (above), so that the player can detect collision with things even when they can't literally move into/through them
- add a script to root node (it will get the default crude 3D script)
- connect the area_entered signal of Area3D child to default named function in root node script
- add the root node to a group called "Player" - this will probably be useful later on (e.g. objects in the game will be able to detect whether a Player has collided with them)
- Axis lock: In root node, Inspector: PhysicsBody3D activate Axis Lock for "Linear Z" "Angular X" "Angular Y" and "Angular Z" - this helps ensure that the physics system doesn't let your side-scrolling player character spin or drift in odd ways when it comes into collision with other objects.

## B. Setup input map for keyboard and game controller control

Godot's "input map" is a system for giving names to specific physical ways of interacting with our games. A key feature is that it allows us to set up equivalencies between different modes of interaction. For example, we might have an "action" for moving left, that has a definite meaning in our game's mechanics (and is implemented in one, definite way in our code/scripts) but which can be activated either with a game controller or with the keyboard.

To work with the Input Map you would select Project: Project Settings: Input Map. Notice the toggle labeled "Show Built-in Actions" near the top right of the Input Map. Turn that on and take a moment to look at the actions that have already been defined. For example, the action "ui_right" has been defined to work with the left arrow key on the keyboard, the "d-pad" of a game controller, or the left joystick of a game controller. The built-in actions that are defined by default, for you, in a new Godot project all have "ui_" at the beginning of their names and you should probably leave them all there (unless and until you have a strong reason to remove/change them) because many things in Godot's 2D UI system expect those actions to exist. Conversely, we should add our own actions for in-game controls (particularly as we move further and further away from the default controller script that Godot adds to a CharacterBody3D). You'll probably want to hide the built-in actions most of the time, to make it easier to see your new actions, but it's useful to know that you can use this toggle to show them in case you forget a name, or want to see what's linked to what.

To add a new action you type a name in the area near the top left where it says "Add New Action" then click the +Add button to the right of that. Your new action will not have any controls linked to it by default. You add them by finding the action in the list (newly added ones will be at the very bottom) and clicking the + button next to the action to add/link a control to it. For many controls you can add the control by clicking the + button then just pressing/moving the control you want to link - Godot will typically "listen" and pick up what you pressed. It's also possible to make settings by finding them in a series of menus.

Add the following actions, each linked to both a keyboard key and a game controller element:

- an action called "left", mapped to the A key AND Joypad Axis 0 -
- an action called "right", mapped to the D key AND Joypad Axis 0 +
- an action called "up", mapped to the W key AND Joypad Axis 1 -
- an action called "down", mapped to the S key AND Joypad Axis 1 +
- an action called "jump", mapped to the space bar AND Joypad Button 0

(Note: we won't actually use the up and down actions in this model, but games tend to evolve to make some use of them, so it's useful to add them while we're here working with the input map.)

## C. Tweak the default CharacterBody3D script for 2D motion

Change the player's script for this, paying very careful attention to indentation (and fixing any identation that gets messed up in copying and pasting):

```
func _physics_process(delta):
	# Add the gravity.
	if not is_on_floor():
		velocity += get_gravity() * delta;

	# Handle jump.
	if Input.is_action_just_pressed("jump") and is_on_floor():
	velocity.y = JUMP_VELOCITY;

	var input_dir = Input.get_vector("left", "right", "up", "down");
	var direction = (transform.basis * Vector3(input_dir.x, 0, input_dir.y)).normalized();
	# handling 4 different possibilities:
	# these can easily be tweaked to the requirements of specific games
	if direction: # if player is pressing a direction control...
		if is_on_floor(): # AND they are on the floor...
			velocity.x = move_toward(velocity.x,SPEED,input_dir.x*SPEED*delta);
			# velocity.x = input_dir.x * SPEED; # 1. they speed up in that direction.
		else: # BUT if they are not on the floor...
			velocity.x = move_toward(velocity.x,SPEED,input_dir.x*SPEED*delta*0.1) # 2. they speed up more slowly in that direction
	else: # if player is not pressing a direction control...
		if is_on_floor(): # AND they are on the floor...
			velocity.x = move_toward(velocity.x,0,SPEED*delta); # 3. they slow gradually to a halt
		else: # BUT if they are not on the floor...
			velocity.x = move_toward(velocity.x,0,SPEED*delta*0.1); # 4. they slow down much more gradually
	move_and_slide()
```

## D. Make a trampoline
making a thing that will shoot the player up into the air (a trampoline)
Area3D root node, renamed Trampoline (or something else meaningful), saved
CollisionShape3D child with a shape resource (perhaps something with low y size like a "pad")
MeshInstance3D child with a Mesh resource (presumably something to match the CollisionShape3D)
add the root node to a new group with a meaningful name (e.g. "Trampoline"). Take careful note of capitalization because when you try to detect collisions with objects from this group in scripts, the capitalization will have to be EXACTLY the same.

Add this function to the player script:

```
func _on_area_3d_area_entered(area):
	if(area.is_in_group("Trampoline")):
		velocity.y = 10;
```

## E. Make a thing to teleport the player
this is a bit different
we might have many teleports and want to reuse an object for them
but they also might need to teleport the player to different locations
make a new scene, Area3D root node, rename it Teleporter, save it
give the Area3D root node a CollisionShape child
give the Area3D root node a MeshInstance child
I used capsules for both the CollisionShape and the MeshInstance, and I thought it might be fun transparent, so I used capsules with Transparency: Alpha in the Transparency section of the Mesh resource, and then an alpha value in the middle fo rthe Albedo color.

Add this script to the root node of the Teleporter (completely replace the default script):

```
extends Area3D

@export var teleportTo: Vector3 = Vector3(0,0,0);

func _on_body_entered(body):
	if(body.is_in_group("Player")):
    	body.teleport(teleportTo);
```

When we instance this scene into a game, each Teleporter object will have an area in the inspector labelled Teleport To where we can set numbers for a location.  

also need to make changes to player script for this to work (provide the "teleport" function that the Teleporter script calls):

```
func teleport(teleportTo: Vector3):
	global_position = teleportTo;	
```

## F. Scale up to a complete very tiny game

Apply these ideas (possibly in combination with ideas from other technical areas) in a complete, small game









