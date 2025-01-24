--- 

layout: layout.njk 

title: "MEDIAART 3L03: Camera and Control 1, 2D motion in 3D spaces"

--- 

# Camera and Control 1: 2D motion in 3D spaces

This is currently rough notes on the things to do for this technical area. I believe they are complete, but will return here shortly to flesh out the explanation aspect of things.

The overall shape of what we’ll do is as follows, with more detailed instructions below: 

- A. Make a player scene that includes a camera
- B. Setup input map for keyboard and game controller control


## A. Make a player scene that includes a camera
(note: this is very similar to the player controller in Mechanics 1 instructions, but with a camera and axis lock)
make a new scene with CharacterBody3D root node, renamed, saved
CollisionShape3D child
MeshInstance3D child (really this would be a 3D asset)
Camera3D child, positioned somewhere in front (looking at) the player mesh, possibly a little higher than player (you can come back and tweak the relation of the camera to the player anytime)
Area3D child, with a collisionshape3D, the latter with a shape resource a little larger than 1st collision shape resource (above)
Script added to root node (it will get the default crude 3D script)
connect area_entered signal of Area3D child to default named function in root node script
add player to a group called "Player" - this will be useful later on
Axis lock: In root node, Inspector: PhysicsBody3D activate Axis Lock for "Linear Z" "Angular X" "Angular Y" and "Angular Z"

## B. Setup input map for keyboard and game controller control
Project: Project Settings: Input Map
add left (A, Joypad Axis 0 -)
add right (D, Joypad Axis 0 + )
add jump (space bar & Joypad Button 0)
we won't actually use the up and down directions in this model, but games tend to evolve to make some use of them, so it's useful to add them while we're here working with the input map

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

F. Apply these ideas (possibly in combination with ideas from other technical areas) in a complete, small game









