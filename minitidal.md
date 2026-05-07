---
layout: layout.njk
title: dktr0's MiniTidal tutorial
---

# dktr0's MiniTidal tutorial

## A Very Important Recommendation

As you work through these examples, I strongly recommend that you type things in yourself (don't copy and paste). Copying and pasting is easy but leads to less learning. Typing is harder but engages your body and mind more substantially in transferring the code, and transitions more fluidly to changing and varying the code yourself.

## 1. Triggering sound samples with Tidal's s function /  s patterns

Let's think about the following lines of code one by one, by entering them (only one at any given time) into a code panel in Estuary's solo mode (with MiniTidal selected as the language in the drop down menu) and "evaluating" them (by pressing shift-Enter or clicking on the play button):

```
s "cp"
s "cp cp"
s "cp cp cp"
s "cp cp cp cp"
s "cp*4"
s "cp cp cp ~"
s "bd cp bd [cp cp]"
```

Note that all currently available sample banks can be viewed by clicking on the ? in the top right of Estuary and then the Resources tab. And they are sample banks - collections of multiple samples. One way of accessing the different samples that are in the same bank (share the same name) is to use the following colon notation inside the string passed to the s function: ``` s "feel:0 feel:1 feel:2 feel:3"```

Take a bit of time to explore as many of the available sample banks as you can!

## 2. Changing pitch with Tidal's note function / note patterns

Consider each of the following examples, one by one:

```
s "arpy*4"
s "arpy*4" # note "0 2 3 5"
s "arpy*4" # note "[0,3,5]"
s "arpy*4" # note "0 2 3 <5 7 8 7>"
```

## 3. More parameters that can be "patterned"

Note that -- is a comment, everything from that to the end of a line is ignored by MiniTidal, "the computer" but can still be read by us. Sometimes this is called a "secondary notation" in computer science.

```
s "arpy*4" # gain "1.2 0.8 1.0 0.5"
s "arpy*4" # pan "0 0.33 0.66 1.0"
s "arpy*4" # speed "1 1 1 -1"
s "arpy*4" # cutoff "200" -- a low-pass filter that makes it sound darker
s "arpy*4" # hcutoff "1000" -- a high-pass filter that makes it sound brighter
s "arpy*4" # bandf "1000" -- a band-pass filter that emphasizes a certain frequency range
s "arpy*4" # bandf "1000" # bandq "20 10 5 1" -- the width/specificity of the band-pass filter
s "arpy*4" # end "0.05 0.1 0.2 0.4" -- cutting off the sample before the end
s "arpy*4" # begin "0.05 0.1 0.2 0.4" -- starting sample playback  after the beginning
s "acordeon*4" # cut "1" -- a new sample in the same cut group silences those before it
s "arpy*8" # vowel "o e a i u"
```

## 4. Transforming patterns

```
slow 2 $ s "arpy*4"
slow 2 (s "arpy*4") -- this is the same as the line before, possibly harder to type, still sometimes useful
fast 2 $ s "arpy*4"
s "arpy*4" # rev (note "0 2 3 5") -- the note pattern is reversed
degradeBy 0.25 $ s "arpy*8"
degradeBy "<0.1 0.2 0.4 0.95>" $ s "arpy*8"
degradeBy "<0.1 0.2 0.4 0.95>" $ s "arpy*8" # note "0 2 3 5"
jux (fast 2) $ s "arpy*4"
jux (fast 2 . (|+| note "3")) $ s "arpy*4" -- . is the "composition of functions" operator
every 2 (fast 2) $ s "arpy*4" -- . is the "composition of functions" operator
whenmod 4 1 (fast 2) $ s "arpy*4" -- every 4 cycles, transformation applied in 2nd cycle onwards
spreadf [fast 4,fast 2, degradeBy 0.5, (|+| note "3")] $ s "arpy*4"
spread (fast) [4,2,1,0.5] $ s "arpy*4" 
```

## 5. Other useful things to know, and other resources

stack can be used to combine multiple patterns that sound in parallel. It does tend to be somewhat less useful in larger live coding groups though, when each person occupying a smaller footprint and not trying to do everything tends to be helpful...

```
stack [
  s "bd cp",
  s "arpy*4" # note "0 2 3 5"
]
```

The official TidalCycles documentation at [https://userbase.tidalcycles.org/Userbase.html](https://userbase.tidalcycles.org/Userbase.html) is really great! It's oriented to people who have installed TidalCycles on their computer, rather than using MiniTidal in Estuary. But you can still use many of the examples in Estuary. You can make most of the examples there work in MiniTidal by cutting out the unnecessary "d1" that many of them begin with. 

In other words, instead of: ```d1 $ sound "bd*8" # pan sine```

Do this in MiniTidal: ```sound "bd*8" # pan sine```

Also note that "sound" is just a synonym for "s", so that could also be: ```s "bd*8" # pan sine```

There's [a page on the official TidalCycles documentation with links to many of the community sites/resources around TidalCycles etc, including a Discord server](https://tidalcycles.org/docs/community). At the time of writing, a lot of Tidal users have moved to [Strudel](https://strudel.cc/) which is pretty similar to TidalCycle and MiniTidal, and web-based. All of these and others are now called "Uzulangs" and there's [a general portal to all of these things here](https://uzu.lurk.org/).
