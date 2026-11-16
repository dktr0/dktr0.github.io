---
layout: layout.njk
title: "MEDIAART 2G03: Practice #9"
---

# [MEDIAART 2G03](../outline/index.html): Practice #9

**Practice #9: gently compress/finalize a DAW project in order to reduce overall dynamic range in genre/context appropriate ways**

**Goal**: gently compress/finalize a completed audio project in order to reduce overall dynamic range

**Purpose**: We typically reduce the dynamic range of completed sound projects that we deliver so that the quieter parts of those projects can compete better with noise in the playback environment and so that the the listener doesn't feel like they constantly have to turn up and down their playback volume (see the more detailed discussion of [the two problems of dynamic range in the page about dynamic range](../dynamic-range-loudness/index.html)). The procedure we'll practice in this tutorial accomplishes that while ALSO ensuring that the peak sample is normalized to -0.3 dBFS.

**Specifications**: You will receive credit for a tutorial/practice submission in this folder that meets ALL of the following specifications (more detailed instructions are found below):

- The submission contains a ZIP archive containing a complete Reaper project folder (including Reaper project file and all audio sources)
- The Reaper project file contains a rendition of the provided sound file (see below) with a gently reduced dynamic range (as per the instructions) and a peak sample at -0.3 dBFS

## Detailed Instructions

First of all, please note that this procedure was demonstrated in [one of the required video modules for this week](https://www.macvideo.ca/media/Demonstration+of+Compression/1_65tkuxyu). You may wish to refer to that video as well, as you complete this.

1. Create a new Reaper project and download the file "sound for gentle finalizing tutorial" from "Audio resources" on Avenue. Listen to the sound and use the main output metre (don’t forget to reset before starting) to determine the peak level. Make a note of the peak level somewhere handy. If you were to apply extra gain to this to bring the level to -0.3 dBFS, how much gain would you have to apply?

Now we want to apply "gentle finalization" techniques to this as if we were finishing our second creative project. Our goal is to apply gentle compression and limiting so that we will need to apply more gain (than our previous answer) in order to bring the final peak level to -0.3 dB FS. In so doing, we will have increased the level and audibility of the quieter parts of our material – and if we are doing this with a full project and not simply a single audio file as in this example, we would also be preserving more of the resolution/detail of our project!

2. When you do this to your project, you are going to want to gently compress the result of all your tracks mixed together – the “stereo output bus”. In Reaper you can add effects/plugins to this final stage of your project by clicking on the “FX” button on the “Master” fader in the Mixer:

<img src="../reaper-master-fader-with-fx-on.png" alt='Reaper Master Fader with FX on' style="width: 25%"/>

Add the plugin VST: ReaComp to the Master stereo out bus of your project:

<img src="../reaper-reacomp-plugin.png" alt='Reaper's Reacomp compressor' style="width: 100%"/>

3. Since we are gently finalizing a project, a low ratio makes sense. Set the ratio to 1.5:1. Note that ratios anywhere between 1.1 and 2 or so:1 might be used in typical gentle finalization tasks.

4. Set the playback to loop and leave it playing while you work with the threshold (control on the left side of the plugin window, don’t forget to listen ALL the time!). At first, try a threshold that is very low so that the effect is very obvious.

5. Now try to find a threshold setting where somewhere between 3 and 10 dB of gain reduction is taking place during the loudest segment of the given audio. Hint: you can see the gain reduction in the red bar towards the right of the plugin window (the one labeled 0, -6, -12, +0). Don’t go so far that it seems the compressor is flattening or damaging the character of the sound!

6. Now experiment with the attack and release times also. This particular given sound is a single coherent texture with little in the way of discrete attacks and releases, so note that the attack/release settings will have a very different effect given material with a different temporal profile!

7. Now reset the Master output metre, play the sound from the beginning and watch for the peak level. What is the peak? How much extra gain is required to bring that peak to -0.3 dB FS? Apply that gain by moving the “Wet” fader on the right of the plugin up (or sometimes down) to the required extra gain.

How much more is the extra gain in step 5 than your answer to the question at the beginning of the tutorial exercise? This is how much closer you've brought the softer parts of the sound to the louder parts of the sound - or put differently, how much you've reduced the dynamic range of the material. Spend some time listening back and forth to the original version of the sound and the gently compressed version of the sound to make observations about the differences (you can do this easily by setting it up to loop and then toggling the compressor on and off with the tick box in the upper left of the FX dialog). If you're not sure about any of this, ask for help.

8. When you have something that sounds right and appears to have a reduced dynamic range and a peak sample at -0.3 dBFS, render it, put the rendered WAV in a ZIP folder, and submit it to a weekly submission folder on Avenue.

Once you are comfortable with this procedure, you can apply it, wherever it is helpful, including in the finalization and delivery of your complete works of sound art in this course. Note that different genres/formats/projects may have different "optimal" dynamic ranges. It is common, for example, for popular music tracks to have a relatively small/narrow dynamic range, so that the elements of the music can be heard in a wide variety of different situations. Other situations may not need so narrow a range, but most situations benefit from some reduction of the dynamic range.

Note: A reminder that the submissions requirements for this one ask for your full working Reaper project folder, not just a rendered WAV!
