--- 

layout: layout.njk 

title: "MEDIAART 3L03: Sound 1, triggered sound effects and positional ambient sounds"

--- 

# Sound 1: triggered sound effects and positional ambient sounds

In the interests of making level 1 of this area of technical practice available sooner, I am providing it in a different form than the other level 1 instructions - as a set of videos from a previous year of the course, an example project, and some notes on that example project. (I will return here before too long and redo this page into instructions formatted similarly to those of the other level 1 areas of technical practice.)

Here are the three videos. They were made with Godot 3 but I am not aware of any significant differences that need to be taken account of in respect of this technical area:

- [Positional Audio Basics in Godot (video, 4m30s)](https://www.macvideo.ca/media/Positional+Audio+Basics+in+Godot/1_io0epn7a)
- [Non-Positional Audio in Godot (video, 4m50s)](https://www.macvideo.ca/media/Non-Positional+Audio+in+Godot/1_3i3wzmyw)
- [Event-Driven and Generative Audio in Godot (video, 8m41s)](https://www.macvideo.ca/media/Event-Driven+and+Generative+Audio+in+Godot/1_9hfm1vz2)

Note: these videos were made with Godot 3.5. They reference a type of node called a "Spatial" - that is now the type of node called "Node3D".

Here is [the example project](../sound-1.zip). Note that it includes a kind of awkward mouselook, with navigation via the arrow keys (definitely need to replace that with something better ASAP...). Note also that t's not an actual game, just a simple demo of positional and non-positional audio in Godot. For your submissions for this area and level of technical practice, you should make an actual, teeny-tiny playable game that demonstrates these techniques.

And here are some further notes on the example project to help orient you.

- The example project's filesystem has been organized in folders. New independent scenes have been saved in a folder called "scenes" instead, sounds have been dragged to a folder called "sounds", etc.

- There is an independent scene for the Ground (a StaticBody, CollisionShape, Mesh, like so often before).

- There is an independent scene for the Player, which implements an all-too-crude "mouselook" navigation interface, and provides ways of triggering event sounds via keystrokes. Note: the mouselook script provided in the example project is slightly improved over the one in the video below.

- The Input map has had events for pressing the 1 2 3 4 and Space keys added to it. (See Project: Project Settings: Input Map, scroll down to the bottom.)

- Three audio buses called "Positional" "NonPositional" and "Events" have been setup (and the faders moved) in the tab labelled "Audio" at the bottom centre of Godot's interface.

- There is an independent scene called ObjectWithSound - this demonstrates positional audio. An AudioStreamPlayer3D has been added as a child of the main StaticBody node, and an audio file that has already been imported to Godot has been dragged onto the Stream parameter off the AudioStreamPlayer3D, auto-play has been selected, and the Positional bus has been selected. Important: When you import a WAV file into Godot, you need to re-import it (the first sound video explains this in more detail).

- There is a node called NonPositionalAudio, to demonstrate that. An AudioStreamPlayer (no "3D") has been added and renamed. A WAV file has been dragged on to its Stream property, auto-play has been selected, and the NonPositional bus has been selected.

- There is an independent scene called EventSounds - it is a renamed Node3D with four AudioStreamPlayers as children. Each AudioStreamPlayer has had a different WAV file dropped on to it, has had the "Events" bus selected, and has been renamed - the names (including spelling and lower vs. uppercase) are important (as always!). Note that autoplay is NOT selected for these event sounds (since we want them to be triggered in response to events, not when the scene starts). The top node of the EventSounds scene has a script attached to it that provides two functions which will be called from our Player script - one of the functions can be used to play a specific named sound, the other to play a random sound. In this way, the EventSounds node is kind of like a "sound bank".

## What to submit

Submit the complete working Godot project folder of a small, playable game that includes non-positional audio, positional audio, and in which sounds are triggered by some kind of event (e.g. player action, collision, etc).
