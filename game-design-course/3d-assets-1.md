--- 

layout: layout.njk 

title: "MEDIAART 3L03: 3D Assets 1, textured 3D models with collision shapes"

--- 

# 3D Assets 1: textured 3D models with collision shapes 

## Introduction and Overview  

Level 1 of the 3D Assets [area of technical practice](../technical-practice/index.html) involves using Blender to model the shape and colours of an object, then importing it into Godot as a game asset with an appropriate collision shape. 

This will familiarize us with a basic workflow that works all the way from Blender modeling into playable work in the Godot game engine. In any later, more advanced work that uses techniques not discussed here, it will be very important to test those different workflows all the way to inclusion in a playable game in the game engine, just as we are doing here. 

The overall shape of what we’ll do is as follows, with more detailed instructions below: 

- A. Working with reference images (in Blender) 
- B. Adding and positioning simple objects 
- C. Subdividing, extruding, and sculpting 
- D. Mirror modifiers 
- E. Texture painting 
- F. Scale up to a unique and original 3D model 
- G. Building modular Godot scenes using imported .GLB assets

## A. Working with reference images (in Blender) 

Find a reference image to work with. A straightforward front profile is best. If you have something that has multiple profiles, that’s useful too. 

Launch blender, and hide the default cube by clicking on the little eye icon in the Outliner at the top right for the cube. 

<img src="../blender-outliner-default-cube.png" alt="A close-up of Blender's Outliner panel, focused on the default cube, with the eye icon to show/hide the object visible to the right"/>

Switch to a front orthographic view using either the numpad or the View menu (numpad 5 to switch to orthographic, numpad 1 to switch to front). (Later, you can switch back to perspective view either by pressing numpad 5 again, selecting perspective view from the View menu, or just by rotating the view). 

Add the image to the scene with the Add menu or Shift-A – Add: Image: Reference. 

Move and size the image by selecting it (left-clicking), press S and move the mouse to resize the image, and left click again to confirm (or press ESC to cancel). To move the image, press G and then move the mouse. Alternately press G and then Z to constrain the movement to Blender’s Z (vertical) axis, or G and then X to constrain the movement to Blender’s X (left-right) axis. You want the thing you are modeling to be standing on the red line (the X Y plane), centred on the Z axis,gz and for it to be the appropriate size in metres.

<img src="../godot-plush-as-reference-image.png" alt="CC0 Godot plushy image as a reference image in Blender, sized to less than a metre, centred on X axis, and standing on XY plane">

Finally we need to “pack” the image into the Blender file so that if we move the blender file somewhere else, it still has the data for the reference image. To do this click on the red image icon in the outliner. That will open the object Data tab in the Properties inspector below (bottom right of blender). Towards the bottom of that interface where the original file path appears there is a button on the left that if you hover over it says it is the pack button. Press that and then save your Blender project as a .blend file somewhere easy to find.

<img src="../red-image-icon-in-outliner.png" alt="Closeup of Blender's Outliner panel showing the red icon that can be clicked to display properties of a reference image">

<div>-</div>

<img src="../location-of-pack-button-for-reference-image.png" alt="Closeup of bottom part of Blender's properties panel for a reference, pack button is on the left">

## B. Adding and positioning simple objects 

Many things can be modeled by taking one starting object, and extending/deforming it until it has the shape of the target object. Other things can be modeled by adding multiple objects (and adjusting/deforming them) to represent different parts of the target object. And of course, these two strategies can be combined. So take a moment to decide how you want to go about modeling the target object using objects from the Add: Mesh menu. Cubes, Cylinders, and Spheres (either of the two types), are probably the most useful and common starting points, and can easily be tweaked/deformed into other and more complex shapes. 

If the default cube would be a good starting point for modeling the object you are trying to model, go ahead and unhide it (by clicking on the eye icon in the Outliner again). Or if it’s not a good starting point, you can delete it. If you need to delete the default cube (e.g. to start with something else) you can delete it by selecting it then pressing x (or by right-clicking on it and selecting Delete.  

This is also a good chance to experiment with Blender’s view controls. With the recommended 3-button mouse, clicking the mouse wheel and dragging will rotate the view. Clicking and dragging with the left mouse button will bring up a rectangle select tool you can use to select multiple things simultaneously. Pressing A will select all things.  

Objects can be rotated by selecting them and pressing R, sized by selecting them and pressing S, and moved by selecting them and pressing G (for grab). All of these manipulations can be constrained to happen along one axis if you press R G or S and then either X Y or Z immediately after. 

Notice how it says Object in the top left of the 3D view. We will use other modes for the 3D view in some of the sections below. This is an important key part of understanding what is happening as you use blender. 

<img src="../close-up-of-mode-selection-menu.png" alt="Closeup of Blender's mode selection menu, with Object Mode currently selected">

In the sections to come, we’ll explore some basic techniques in an abstract way, before returning to apply them to the object you are trying to model. So if you’ve done some careful work selecting and positioning objects and reference images, you might want to save that using Blender’s save function from the file menu, so that you can start from scratch as you first explore the sections to come, then return to your work in progress when you are ready. 

## C. Subdividing, extruding, and sculpting

Select a starting object (probably the default cube if you are just exploring this technique). Press Tab to switch into Edit mode (or pick Edit Mode where it says Object Mode in the menu towards the top left of the 3D View). This will give you access to the individual vertices, edges, and faces of your 3D mesh. 

Just for learning: note that you can select individual vertices, edges, and faces by clicking on them. Just like in Object mode, shift-clicking will let you add additional items to the current selection. A set of three buttons next to the menu that says Edit Mode lets you pick whether you are selecting vertices, edges, or faces. Note also that selecting both vertices of an edge is the same as selecting the edge, and that selecting all edges of a face is the same as selecting the face. 

Press the button for selecting faces and select exactly one face of the object from which we will extrude or expand selectively. With that one face selected, pick Subdivide from the Edge menu (sort of near the top left of the 3D view). Each edge of the face will be divided in 2, which will turn the face into 4 faces (all of which will be selected). Pick Subdivide again and now there will be 16 faces. Pick subdivide again and there will 64 faces. Subdividing will give us “more geometry” to be able to manipulate independently which we need in order to model real world shapes; at the same time, we need to be mindful of how far to go with this, not wanting to add so many vertices that it becomes too demanding for the game engine to ultimately render. 

Extruding: Select a face or group of adjacent faces from within the subdivided face and press E for extrude. You’ll be able to move the mouse to sort of “pull out” a new geometric volume from the existing mesh. By default it will be constrained to pull out along one axis. If you press one of the axis buttons (X Y or Z) three times you’ll be able to extrude freely (which is possibly not what you want). Clicking will confirm the operation and create the new geometry “for real”. Notice that you can confirm an extrude operation, then select the face on the end, press G for Grab/Move, and move the “arm” or “extension” to another location, if you like. 

Sculpting: Go back to the default cube, tab to Edit mode, make sure all faces are selected, and subdivide the whole object 3 or 4 times (to make a lot of geometry). Now switch to Sculpt Mode (on the same menu that lets you switch between Object Mode and Edit Mode). Now click and drag on the surface of the object and you’ll be able to see the effect of the default sculpting tool (called “Draw”). It will shape the object by kind of pulling out a bunch of vertices in a slow, complex way (the more you click and drag). Along the left edge of the 3D view is a long selection of different sculpting tools to explore. Notice that sculpting doesn’t create any new geometry, it just moves the vertices/edges/faces you already have made (e.g. by subdividing, or some other method) in complex ways. Try out a bunch of the different sculpting tools. 

## D. Mirror modifiers 

To explore this technique, starting from a new default cube (or other symmetrical object), tab into edit mode and delete half of the faces (all of the ones left of the centre or all of the ones right of the centre). 

Then, click on the little icon that looks like a spanner/wrench in the Properties pane in the middle-to-bottom right of Blender. You should see a new panel with a button labelled Add Modifier. Click that button and pick Mirror from the Generate sub-category on the menu that pops up. At this point you should see “the other half” of your object re-appear, and you may notice (if you are still in Edit mode) that it doesn’t have all of the vertices that the other half has. This is because the geometry of the reappeared half is “not real” and is being produced just as a temporary mirror of the real geometry of the other side. 

Subdivide the real geometry a few times and then try either extruding or sculpting it. Whatever you do should be automatically mirrored on the other side.  

When you are pretty much completely done with the modeling (making sure the shape is what you want it to be) the last step is to “apply” the modifier, which means turning the temporary mirrored geometry into real geometry that exists without the modifier. Make sure you are in Object mode, then click on the little downwards pointing arrow near the top right of the Mirror modifier in the Modifiers tab of the Properties panel. There will be an option on that menu called “Apply” - select it. The modifier will disappear (it doesn’t exist anymore) but you will still have all the mirrored geometry. There is no longer any mirror, so whatever you do to the geometry of one side of your object will only be to that side of the object. 

## E. Texture painting 

With an object selected, click the Material tab of the Properties panel – the Material tab looks like a pinkish sphere that has been divided into four panels in a checkered pattern.  

If you are using the default cube, it will already have a Material called just “Material”. Rename it something specific such as the name of the object you are making (e.g. “Penguin”), or if appropriate, the name of the part of the object you have selected (e.g. “PenguinLeftArm”). You rename it by clicking on the second of the two places you see the name in the Material tab. 

If you aren’t using the default cube, it will have no material yet. Click the + New button and then rename the new material something specific such as the name of the object you are making (e.g. “Penguin”), or if appropriate, the name of the part of the object you have selected (e.g. “PenguinLeftArm”). You rename it by clicking on the second of the two places you see the name in the Material tab. 

In both of the above steps, renaming the material is important as not doing so will frequently lead to problems when you come to importing 3D assets into Godot. Do NOT skip the “thoughtful naming” step! 

Tab into Edit mode, press A to make sure all geometry is selected, then select “Smart UV Project” from the UV menu. At this point you should switch into the Texture Paint preset for Blender (presets along t	he very top menu line at the top of Blender’s interface). On the left you’ll see the “UV”s that this step created (UVs are maps from image data to a location on a 3D mesh). On the right you’ll still see the normal 3D view. 

On the right, in the normal 3D view, it will be in Texture Paint mode. At the top middle there’s a menu labeled Texture Slots.  Open that, click the + button, and select Base Colour. The default width and height is good (for games). You can pick a default colour in the area labeled “Color”. When you are happy with the default colour, press Add. 

At this point, you can paint directly on the object in the 3D view by clicking and dragging. You can change the brush “algorithm” in the Blend property that appears in the Tool tab (top tab) of the Properties view in the bottom right of Blender’s interface. You can change the radius, strength, and color of the brush as well. 

It’s sometimes very useful to be able to ensure that texture painting only happens on a specific face or faces of the object. To do this, tab into edit mode, select the face or faces you want to paint on. Switch back to Texture Paint mode and right next to the menu where you picked Texture Paint mode there is a little button that if you hover over it says “Paint Mask”. If you enable this, painting will only happen on the faces you selected in Edit mode a moment before.

Also: if you want to grab a colour you’ve already applied to an image to use it for something else, you can press Shift-X while hovering over some part of the object, to change the colour to one sampled from below where your cursor is hovering.

## F. Scale up to a unique and original 3D model

At this point, if you've just been trying out all the techniques above, it probably makes sense to return to the real work of making a complete, specific, unique, original model of a textured 3D object. When you've got something you like, then you're ready to move on to the last step of importing it into Godot and turning it a minimally functional game asset.

## G. Building modular Godot scenes using imported .GLB assets

In Blender, save your project as a .blend (Blender’s own format) so that you can return to it and continue to edit with Blender when necessary. Be sure to save it to a thoughtful location you can easily find again. 

Also in Blender, export the project as a .glb file, using File: Export: GLTF 2.0, and making a file name that ends with .glb. Be sure to put it in a thoughtful location you can easily find again. 

Now, in a Godot project (an existing one or a new one, your choice), create a new scene with a StaticBody3D as the root node. Rename that root node to a meaningful name for the object you are trying to represent (e.g. “TallTree”), aiming also to be consistent across your work with how you capitalize words in names. 

Drag and drop the .glb file you exported from Blender into the the FileSystem area of Godot’s editor. This will copy the file into the Godot project, and do an initial import of the asset. Note that for most projects it is a very good idea to create sub-folders in your project’s filesystem to keep things clean and organized. For example, you could create a subfolder called glb and drag and drop things there. 

Right-click on the root node of your scene-in-progress and select Instantiate Child Scene (or press Ctrl-Shift-A, or with the focus on the root node click the chain-link icon). The list of scenes that pops up should include the .glb file you imported in the previous step, so select that. Godot will add a Node3D (with the name of the .glb file) as a child of the root node, and the children of that Node3D will be the mesh(es) contained in the original Blender project. At this point you should be able to see the mesh(es) from your original Blender project. 

Add at least one CollisionShape3D node as a child of the root node. As always, each CollisionShape3D node will need an actual Shape resource, which you can add with the Inspector on the right. Note that depending on the shape of the asset you are creating, you may want to add multiple CollisionShape3D nodes, each with their own customized shape. In general we should try to use as few CollisionShape3D nodes as possible (since they incur a small cost in computational performance as the game runs) but that shouldn’t stop us from adding extra collision shapes here and there when we need to make the game’s mechanics work how we think they need to. Depending on the shape of your object, you might want to use one or more of a mix of different collision shapes (primarily Boxes, Capsules, Cylinders). 

IMPORTANT note about adjusting the size and position of collision shapes: Don’t change the Scale properties of a CollisionShape3D – leave them at 1 x 1 x 1. In other words, DON’T use Scale mode (R) in the editor to change the size of a CollisionShape3D and DON’T directly edit the Scale properties that appear in the Inspector (in the Node3D area) when you are focused on a CollisionShape3D node. Instead: DO click and drag on the little pink/red/rose coloured circles that appear in the editor when you focus on a CollisionShape3D, and do feel free to directly edit the Position and Rotation numbers (in the Node3D area of the Inspector) and do feel free to edit the numbers for Size that appear when you click on the Shape resource of a CollisionShape3D. Godot will warn you (in the Scene panel next to the relevant CollisionShape3D) if you violate this rule – not fixing it will lead to bugs with how the collision shape mechanics work.

## What to submit

To demonstrate successful completion of the level 1 3D assets technical area, create a well-shaped asset in Blender that is modeled on one or more images of a real-world object and which requires you to use all or most of the modeling techniques discussed above, AND incorporate that asset (with an effective collision shape, e.g. so that a player avatar can’t walk through it, can jump on it maybe, etc) into a genuinely playable Godot game project.
