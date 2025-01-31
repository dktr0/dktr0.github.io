--- 

layout: layout.njk 

title: "MEDIAART 3L03: 3D Assets 2, rig and animate a character model with functioning walk/idle animations"

--- 

# 3D Assets 2: rig and animate a character model with functioning walk/idle animations

There's two parts to this level of this area of technical practice: (1) rigging and animating a Blender model and (2) incorporating the model (exported as GLB) into a Godot scene and using scripts to make the animations go.

These five videos go through the process of making walk/idle animations in Blender. (The last of the five videos is very specific to the game engine context for our work, so if you have prior experience with Blender rigging and animation in another context, you might not want to skip that last video):

- [Blender Animation Basics](https://www.macvideo.ca/media/Blender+Animation+Basics/1_gcmoj3fy)
- [Blender Armature Basics](https://www.macvideo.ca/media/Blender+Armature+Basics/1_ldvvjakn)
- [A Basic Humanoid Skeleton in Blender](https://www.macvideo.ca/media/A+Basic+Humanoid+Skeleton+in+Blender/1_n9o7jcwz)
- [Adding a humanoid mesh to a Blender armature](https://www.macvideo.ca/media/Adding+a+humanoid+mesh+to+a+Blender+armature/1_of9c47pr)
- [Adding walk and idle animations in Blender](https://www.macvideo.ca/media/Adding+walk+and+idle+animations+in+Blender/1_h4fqynwf)

As usual (e.g. as in the work for level 1 of 3D assets), you would save your work both as a Blender project (.blend file) and export it as a .glb file (for use in Godot).

Add the .glb file to a Godot project. When you click on it to open it, you should see that it contains (is converted to) a Godot scene whose root node is Node3D, with two children. One child is the Armature + Mesh combination, and the other child is an AnimationPlayer. The AnimationPlayer will show two animations called "Idle" and "Walk".

You can add the imported GLB resource as a child node of an existing player controller (player scene) you've made.

Now assuming the imported GLB resource is a child node of your top-level Player node (e.g. in an independent scene for your player controller) that is called "skeleton" (yours would be called whatever you ), you can add the following to your _ready function (of your player script), to make sure the animations loop and to make the idle animation play from the beginning:
```
	$"skeleton/AnimationPlayer".get_animation("Idle").loop_mode = Animation.LOOP_LINEAR;
	$"skeleton/AnimationPlayer".get_animation("Walk").loop_mode = Animation.LOOP_LINEAR;
	$"skeleton/AnimationPlayer".play("Idle");
```

And now you just have to alter your player script so that when the player starts moving, the walk animation is played, and that the idle animation is played when they stop moving. Here are two lines of code (to be used separately and modified to your context) for those two respective actions:

```
$"skeleton/AnimationPlayer".play("Walk");
$"skeleton/AnimationPlayer".play("Idle");
```

## What to submit

Incorporate a Blender model with working Walk and Idle animations into a small, playable game. When the character is moving, the Walk animation should play. When the character is not moving, the Idle animation should play. Compress the whole working Godot project folder (the folder itself) into a ZIP archive and submit it on Avenue.
