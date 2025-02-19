--- 

layout: layout.njk 

title: "MEDIAART 3L03: Mechanics 2, Objects That Move"

--- 

# Mechanics 2: Objects That Move

To demonstrate this technical area, submit a small, playable game that contains some variation on all three of the following mechanics (possible ways to implement each mechanic are indicated further below):

- Projectiles
- Moving terrain (via Godot animation)
- Objects that follow other objects

## Projectiles

One overall pathway to implementing a projectile mechanic goes like this: 

- make an independent scene to represent the visual and physics behaviour
- launch the projectile by instancing it into a scene
- detect and do something when the projectile hits something

### make an independent scene for the projectile

This would be similar to independent scenes we've made in other technical areas - some kind of body as the root node, with other nodes as children as necessary.

There are projectiles that are affected by physics, those that are not affected by physics, and many things in between these two extremes as well (e.g. things that are affected by physics but also continue to move in self-controlled ways). If something is set moving in a certain direction and after that obeys the "laws of physics" we would probably model it with a RigidBody3D as the root node of our scene. If something obeys the "laws of physics" but is also able to continue to resist those laws in some way (e.g. a rocket continues to propel itself as it flies) we would probably choose a CharacterBody3D as our root node. 

Then we would have a CollisionShape3D child (of course), either a MeshInstance3D or some other node that causes visual things to happen (assuming the projectile is visible), and most likely an Area3D (with its own CollisionShape child) so that the projectile can itself detect when it has hit something. Don't forget to rename the root node of the independent scene, and it would be a good idea to add the root node to a Group that identifies what kind of thing this is in the game.

Because we'll want the projectile to delete itself even when it doesn't hit anything (so they don't pile up in the world if there's lots of them), we'll use a Timer. Add a Timer node as a child of the root node. Set its wait time to 10 seconds (or something like that, possibly less if there are going to be lots of these and they don't need to last that long). Check the boxes for "One Shot" and "Autostart" in the Inspector for the Timer node. Later we'll connect it's "timeout" signal to a method in a script.

### launch the projectile by instancing it into a scene

The root node of your projectile scene will need a suitably named script attached to it, so do that. Immediately below is an example of a complete script for a "Rocket" scene, based on a CharacterBody3D root node that has been added to the "Rocket" group. 

```
extends CharacterBody3D

func launch(launcher : Node3D, launchSpeed : float, safeDistance : float):
	var q = launcher.quaternion;
	set_quaternion(q); # rotation of rocket matches rotation of launcher
	set_velocity(q*Vector3.FORWARD*launchSpeed); # velocity also determined by that rotation
	# set initial position to safeDistance away in direction of launcher's rotation
	set_global_position(launcher.global_position + (q*Vector3.FORWARD*safeDistance));
	
func _physics_process(delta):
	# if not is_on_floor(): # uncomment this block to make rocket affected by gravity
	#	velocity += get_gravity() * delta;
	move_and_slide()

func _on_area_3d_area_entered(area):
	collidedWithAreaOrBody(area);

func _on_area_3d_body_entered(body):
	collidedWithAreaOrBody(body);
	
func collidedWithAreaOrBody(areaOrBody):	
	if(!areaOrBody.is_in_group("Player") && !areaOrBody.is_in_group("Rocket")):
		queue_free();
		
func _on_timer_timeout():
	queue_free();
```

In the above script, the launch function is meant to be called from some other script (e.g. a script attached to whatever is launching the rocket) to position the rocket initially and to set up its initial velocity. After that the move_and_slide() call in the _physics_process() function just keeps it moving in that same direction. There's two functions (signal handlers) that respond to signals from the Area3D child of the Rocket scene - the area_3D_area_entered and area_3D_body_entered signals. Connecting both signals allows the Rocket to detect collisions with either bodies or areas - and both signal handlers (functions) call a common function collidedWithAreaOrBody so that we don't have to repeat that code for the two cases. The latter function checks if the collision is with the Player or is part of the Rocket itself, and if not, it deletes the projectile/rocket. The assumption here is that the actual consequences of a projectile hitting something are going to be handled by the thing that is hit - the projectile is only responsible for moving itself and deleting itself when it hits something.

Don't forget to connect the three signals mentioned above (two from the Area3D, one from the Timer)!

Now somewhere else (e.g. in a script attached to our player scene/controller) we'll do something like the following to make the projectile launchable. Near the top of the script:

```
@onready var rocketScene = preload("res://rocket.tscn"); # or whatever your scene is called
```

And in the _physics_process for the launcher (e.g. in the player controller script's _physics_process if it is the player that is launching the projectile), and assuming an entry has been added to the Input Map (Project: Project Settings: Input Map) called "fire":

```
	if Input.is_action_just_pressed("fire"):
		var r = rocketScene.instantiate();
		add_child(r);
		r.launch(self,1.0,2.0);
```

### detect and do something when the projectile hits something

This is left as an exercise for the reader. If you've added your projectile to a suitably named group, then anything you care about it hitting just has to detect when a body from that group hits it, and do something (i.e. very similar to ideas from Mechanics 1 technical area). And in the script/implementation above we've already taken care of the projectile deleting itself.

## Moving Terrain (via Godot animation)

Moving terrain, such as moving platforms for players to jump on, can be implemented with Godot's built-in animation system.

In all cases, you'll add an AnimationPlayer node as a direct child of the thing you want to move. There's generally two ways to do this if (as recommended) you are working in a very modular way with lots of independent scenes that you then bring together in an overall level or game scene: (1) you can instance the independent scene in your level/game and add the AnimationPlayer as a child in the level/game scene or (2) you can add the AnimationPlayer as a child in the independent scene itself. Method 1 lets you reuse the scene but have it animate/move in different ways as you continue to make duplicate copies of it. Method 2 lets you have an object that always moves in the same way as you duplicate it.

Whichever way you pick, once you've added the AnimationPlayer to the thing you want to move, click on the button labelled Animation near the centre-middle of Godot's interface (just below the 3D view). If you don't see it, you may need to select the Animation tab from the middle bottom of Godot's interface first.

Click New to make a new animation and give it a unique name. Focus on the object you are moving in the Scene panel/node graph. Now in the inspector open the Node3D: Transform area. Next to position, rotation and scale you'll see a little icon that looks like a key (for "keyframe"). Click the icon next to position and press "Create" on the window that pops up. In the Animation area at the bottom of the screen you'll see a position keyframe has been created.

Change the length of the animation to something you want - it's the number near the top right of the animation area. As you change it, you'll see the new duration reflected in the scrubber of the Animation area. Click in the scrubber to position the time pointer somewhere else. Now move the object and click on the keyframe next to Position again. You should see two keyframes now.

To make the animation loop, click the loop icon near the top right of the Animation area, and to make it autostart when the game starts, click the icon that looks like a letter A (it is blue when selected). You can test the animation in the editor by clicking the play button on the top left of the animation area, and when you launch the scene, the object should move back and forth between the two positions/keyframes you created.

That's it - the rest is details, nuances, and applications!

(Note: Unlike Blender animations, there is no need to make a keyframe at the end of a looping animation to bring things back to the initial position - Godot will do this by default.)

## Objects that follow other objects

Here's a script that can be added to a scene (based on a CharacterBody3D root node) to make it follow the player. You can tweak it to match the actual names of nodes in your game:

```
extends CharacterBody3D

const SPEED = 2.0
const ACCEL = 4.0
const DECEL = 6.0

@onready var target = $"/root/Game/Player";

func _physics_process(delta: float) -> void:

	if not is_on_floor(): # gravity
		velocity += get_gravity() * delta;

	# calculate distance to target
	var dist = global_position.distance_to(target.global_position);
	if dist < 10.0: # if distance is less than a certain threshold...
		# ...accelerate in that direction... 
		var dir = (target.global_position - global_position).normalized();
		velocity.x = move_toward(velocity.x,dir.x*SPEED,abs(dir.x*ACCEL*delta));
		velocity.z = move_toward(velocity.z,dir.z*SPEED,abs(dir.z*ACCEL*delta));
		# ...and rotate to face that direction
		look_at(target.global_position);
	else:
		# ...otherwise, slow down in the direction we are already going
		var dir = velocity.normalized();
		velocity.x = move_toward(velocity.x,0,dir.x*DECEL*delta);
		velocity.z = move_toward(velocity.z,0,dir.z*DECEL*delta);
		
	move_and_slide()
```

## What to submit

Submit a small, playable game that contains some variation on all three of the above mechanics. As always, feel free to combine this with things from other areas, and it's totally fine to make weekly submissions that demonstrate multiple areas/levels of technical practice if that's helpful.
