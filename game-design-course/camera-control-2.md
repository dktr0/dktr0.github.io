--- 

layout: layout.njk 

title: "MEDIAART 3L03: Camera and Control 2, 1st-person with mouselook, keyboard, game controller, skybox, no edges"

--- 

# Camera and Control 2: 1st-person with mouselook, keyboard, game controller, skybox, no edges

Level 2 of the camera and control technical area involves making a player controller (an independent player scene) where the camera behaves in a "1st person" way, motion and the camera can happy semi-independently via some combination of mouse, keyboard and game controller controls, and then using that controller in a 3D game world that has a custom skybox and "no edges".

## A basic 1st person player controller

Make a new independent scene with a CharacterBody3D as the root node, rename it (e.g. "Player") and save it.

Give it a CollisionShape3D child and provide the CollisionShape3D with a suitable shape resource in the Inspector. If the player avatar is to be visible, add meshes or nodes for that (e.g. following techniques from 3D Assets 1 and/or 2).

Note: If you have a visible avatar/mesh make sure that it is facing towards the negative part of Godot's Z axis. In other words, if you put the 3D view in front view mode, you will be looking at the back of your avatar/mesh.

Add a Camera3D node as a child of the root node and position/rotate it in a way you think will make sense. If you have a visible avatar, you might want the camera to slightly behind the avatar and looking at it. If there's no visible avatar, you might want the camera to be where you imagine the eyes of the (invisible) avatar would be. You'll probably come back and tweak these decisions iteratively, later (e.g. while playtesting).

You'll probably want your root node to have an Area3D node with a suitable CollisionShape3D as well, to be able to detect collisions with things in the world (as discussed in Mechanics 1, for example). If you're making this from scratch, you might want to add that and connect both its area_3d_area_entered and area_3d_body_entered signals to empty/auto-created functions in the root nodes script (to be filled in with suitable code later).

We need to make sure the Input Map has all the actions we need for this 1st person controller. It's very important (and required for this technical area) to support multiple means of controlling game play such as keyboard+mouse and standard game controllers. Here are the actions to make sure exist in the Input map (Project: Project Settings: Input Map):

- left: connected to A key, and Joypad Axis 0 -
- right: connected to D key, and Joypad Axis 0 +
- forward: connected to W key, and Joypad Axis 1 -
- backward: connected to S key, and Joypad Axis 1 +
- lookleft: connected to Joypad Axis 3 -
- lookright: connected to Joypad Axis 3 +
- lookup: connected to Joypad Axis 4 +
- lookdown: connected to Joypad Axis 4 -
- jump: connected to Space key, and Joypad Button 0 (e.g. Xbox A/Sony Cross)

(Notice that the looking actions only have a game controller entry - this is because in the script we're going to provide in a moment the mouse motions for looking area accessed in a different way than the actions from the input map.)


Here's a script for basic 1st person mouselook, keyboard movement and game controller movement/looking. Feel free to customize it to the requirements of your games!:

```
extends CharacterBody3D

const SPEED = 5.0
const JUMP_VELOCITY = 4.5
const ACCEL = 10.0
const DECEL = 15.0

var mouseLookLeftRight = 0;
var mouseLookUpDown = 0;

func _ready():
	Input.set_mouse_mode(Input.MOUSE_MODE_CAPTURED)

func _physics_process(delta):
	var stickLook = Input.get_vector("lookleft","lookright","lookup","lookdown")*(-0.1);
	rotate_y(mouseLookLeftRight + stickLook.x);
	$Camera3D.rotate_x(mouseLookUpDown + stickLook.y);
	$Camera3D.rotation.x = clampf($Camera3D.rotation.x, -deg_to_rad(70), deg_to_rad(70))
	mouseLookLeftRight = 0;
	mouseLookUpDown = 0;
	
	if not is_on_floor(): # gravity
		velocity += get_gravity() * delta

	if Input.is_action_just_pressed("jump") and is_on_floor(): # jumping
		velocity.y = JUMP_VELOCITY

	var input_dir = Input.get_vector("left", "right", "forward", "backward")
	var dir = (transform.basis * Vector3(input_dir.x, 0, input_dir.y)).normalized();
	if dir:
		velocity.x = move_toward(velocity.x, dir.x*SPEED, abs(dir.x*ACCEL*delta));
		velocity.z = move_toward(velocity.z, dir.z*SPEED, abs(dir.z*ACCEL*delta));
	else:
		var velDir = velocity.normalized();
		velocity.x = move_toward(velocity.x, 0, abs(velDir.x*DECEL*delta));
		velocity.z = move_toward(velocity.z, 0, abs(velDir.z*DECEL*delta));

	move_and_slide()
	
func _input(event):
	if event is InputEventMouseMotion and Input.mouse_mode == Input.MOUSE_MODE_CAPTURED:
		mouseLookLeftRight = -event.relative.x * 0.01; # increase/decrease 0.01 to change sensitivity
		if abs(mouseLookLeftRight) < 0.02: # dead zone for mouse motion left/right
			mouseLookLeftRight = 0.0;
		mouseLookUpDown = -event.relative.y * 0.01; # increase/decrease 0.01 to change sensitivity
		if abs(mouseLookUpDown) < 0.02: # dead zone for mouse motion up/down
			mouseLookUpDown = 0.0;

func _on_area_3d_body_entered(body):
	pass # not doing anything here yet...

func _on_area_3d_area_entered(area):
	pass # not doing anything here yet...
```

## Skyboxes

There's two parts to this topic:

- adding panoramic skybox images to a Godot project
- making custom panoramic skybox images with Blender

### adding panoramic skybox images to a Godot project

Find and download a panoramic HDR (high dynamic range image). Many free HDR sky images can be found [here](https://polyhaven.com/hdris/skies). Any time we used borrowed materials it's important to take close note of any caveats or conditions around their legal use.

If you have found a suitable panoramic image
- As a child of your game/level scene's root node, add a WorldEnvironment node.
- Then, in the Inspector add a new Environment resource to that node.
- Change the Background mode to Sky
- Now in the newly appeared Sky part of the Environment resource create a new Sky resource
- In the Sky resource, in Sky Material, create a new PanoramaSkyMaterial
- Drag and drop the panoramic image into your Godot project (e.g. by dragging and dropping from wherever you downloaded it to, into Godot's filesystem on the bottom left of the Godot interface)
- Drag and drop a panoramic image from Godot's filesystem (bottom left) to the Panorama field in the Inspector (the field is in the PanoramaSkyMaterial, click on it if it is not expanded)

You should now see your new skybox both in the editor and when you play the game.

### making custom panoramic skybox images with Blender

We can make custom skyboxes in Blender by placing a panoramic camera at the origin (0,0,0) and then rendered to a panoramic image format. In the instructions that follow, we do this after texture painting on a UV sphere positioned around the camera (but you can use the same camera and render technique with any Blender scene, and its popular to create Blender scenes that do various generative/dynamic things to create textures on a sphere in order to make skyboxes - that's left as an exercise for the reader). 

Here are some steps to texture paint a simple skybox in Blender:

- new blender project
- delete the default cube 
- add a UV sphere instead
- apply "Shade Smooth" to the object (from the Object menu)
- switch to edit mode
- zoom until you're inside the sphere
- with all vertices selected, use Mesh: Normals: Flip
- switch to the texture paint layout
- add a base color slot that is 2048 px by 2048 px (with no alpha) and feel free to select a color to fill it with initially (e.g. blue)
- now you can texture paint (e.g. grey clouds) along the inside of the sphere
- when you're finished, save your work as a Blender project (.blend file)

And here are some steps to render your skybox project as a panoramic image file that you can then incorporate into your Godot project:

- click the Render panel in Properties (looks like a camera) 
- change Render Engine to Cycles
- change max samples in Render: Render (its under Noise Threshold) to 32 (you can experiment with different values here by repeatedly rendering, higher values will be lower noise but take longer to render)
- click the Output poanel in Properties (looks like a printer)
- change both the X and Y resolution to 2048 px
- switch to the Layout preset (to still see your work here you'll need to change the Viewport Shading method near the top right of Blender's 3D view)
- click the green icon next to the Camera in the Outliner to open camera properties in properties panel
- change the Type of Camera to Panoramic
- change Panorama Type to Equirectangular
- click on the Object properties panel (looks like an orange square)
- reposition the camera at 0,0,0 with rotation 90,0,0
- focus on the Light, click on its Object properties panel
- reposition the light at 0,0,0 (rotation doesn't matter)
- click on the green icon next to the Light
- reduce the light's power somewhat (I found 20W to be an okay value for my default sphere)
- select Render from the Render menu (and be prepared to wait)
- you'll know its done when you can select Save from the Image menu
- alternately if you want to cancel you can press ESC (e.g. if its taking too long and you have to move to some other productive task for a moment)
- Select Save Image, choose the OpenEXR format and make sure the file has the extension .exr

That's it - now you can drag and drop that .exr file into your Godot project, and then drag and drop it from there into the Panorama field just like you did with the downloaded image.

## No edges

This is really just about making sure the player can't navigate out of the desired area of play, and that, from where they are looking the sky and horizon look good. You can do this by placing objects at all of the "edges of play" - or even collision shapes without accompanying visual objects. It's about making sure the player can't navigate to places where the game looks bad and/or the mechanics are broken (game becomes unplayable). 

## What to submit

Submit a small, original, playable game (submit the whole working Godot project folder itself, as a ZIP archive) that has a 1st person player controller as above, a custom skybox (made in Blender) and does various things to ensure there are no problematic edges to the world (visually or mechanically).
