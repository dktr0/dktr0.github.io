---
layout: layout.njk
title: dktr0's Punctual tutorial
---

# dktr0's Punctual tutorial

## A Very Important Recommendation

As you work through these examples, I strongly recommend that you type things in yourself (don't copy and paste). Copying and pasting is easy but leads to less learning. Typing is harder but engages your body and mind more substantially in transferring the code, and transitions more fluidly to changing and varying the code yourself.

## Basics of Punctual visual output

```
hline 0 0.002 >> add; -- a horizontal line at the middle of the screen
hline 0.5 0.002 >> add; -- halfway to the top of the screen
hline -0.5 0 0.002 >> add; --halfway to the bottom of the screen
hline (osc 1) 0.002 >> add; --going between the top and the bottom according to 0.1 hz sine oscillation
-- you can try all of the above with vline instead of hline
hline [-0.5,0,0.5] 0.002 >> add; -- three "variants" of argument leads to three lines, red, green, blue
hline (osc [0.1,0.2,0.3]) 0.002 >> add; -- basically all punctual functions can handle 1-n variants
line [-0.5,-0.5] [0.5,0.5] 0.002 >> add;
iline [-0.5,-0.5] [0.5,0.5] 0.002 >> add; -- infinite line goes through indicated points but extends infinitely
iline [-0.5,-0.5] [0.5,osc [0.1,0.2,0.3]] 0.002 >> add; -- with simultaneous variations
ilines [-0.5,-0.5,0.5,osc [0.1,0.2,0.3]] 0.002 >> add; -- an alternate syntax for the same thing
rect [0,0] [2,0.1] >> add;
circle [0,0] 0.1 >> add;
dist [0,0] >> add; 
prox [0,0] >> add; 
```

## Basics of Punctual audio output

```
osc 330 * dbamp (-20) >> audio;
osc (midicps 64) * dbamp (-20) >> audio; -- the same thing, but with the pitch in MIDI note numbers
osc (midicps [64,67,71]) * dbamp (-20) >> audio; -- "variants" could be "chords"
osc (midicps $ 64 + [0,3,7]) * dbamp (-20) >> audio; -- the same thing
saw (midicps $ 64 + [0,3,7]) * dbamp (-20) >> audio; -- sawtooth oscillator instead of sine oscillator
sqr (midicps $ 64 + [0,3,7]) * dbamp (-20) >> audio; -- square wave oscillator
tri (midicps $ 64 + [0,3,7]) * dbamp (-20) >> audio; -- triangle wave oscillator
lpf 1000 1 $ saw (midicps $ 64 + [0,3,7]) * dbamp (-20) >> audio; -- low pass filtered sawtooth
hpf 3000 1 $ saw (midicps $ 64 + [0,3,7]) * dbamp (-20) >> audio; -- high pass filtered sawtooth
bpf (midicps 71) 10 $ saw (midicps $ 64 + [0,3,7]) * dbamp (-20) >> audio; -- band pass filtered sawtooth
bpf (midicps $ [71,74,78]) 100 rnd * dbamp (6) >> audio; -- band pass filtered white noise
```

## Sequencing, Mapping, Assignment, Functions, Crossfades

Use of seq for step sequencing (enter both lines, notice synchronization):
```
hline (seq [-0.5,0,0.5]) 0.002 >> add;
saw (midicps $ seq [60,62,67]) * dbamp (-20) >> audio;
```

Use of ~~ for linear mapping from -1 to 1 to whatever min and max:
```
hline (0.2 ~~ 0.4 $ osc 0.1) 0.002 >> add;
saw (midicps $ 60 ~~ 62 $ osc 0.1) * dbamp (-20) >> audio
```

The same thing as the above but with the possibiity to change the input range if necessary:
```
hline (linlin [-1,1] [0.2,0.4] $ osc 0.1) 0.002 >> add;
saw (midicps $ linlin [-1,1] [60,62] $ osc 0.1) * dbamp (-20) >> audio
```

All of Punctual's oscillators (e.g. osc) are "bipolar" = they give values that range between -1 and 1. The unipolar function can be used to remap bipolar values to "unipolar" values that range between 0 and 1:```hline (unipolar $ osc 0.1) 0.002 >> add```

Similarly, the "bipolar" function will remap unipolar values to be between -1 and 1: ```circle [bipolar $ seq [0,0.2,0.4,0.8], 0] 0.1 >> add```

We can assign things to variables. This is helpful because it makes it easier to reuse the same thing in different ways within the same Punctual program, and because it just generally makes programs easier to read and transform:
```
a = seq [60,62,67,63];
(lpf 1000 1 $ saw $ midicps a) * dbamp (-20) >> audio
```

We can also make our own functions by choosing a good name (not already used by Punctual itself) and then providing one or more arguments after the name, and then providing a "definition" of what that should be translated to:
```
mysynth n = (lpf 1000 1 $ saw $ midicps n) * dbamp (-20);
mysynth $ seq [60,62,67,64] >> audio
```

(Note: although not covered here, it is also possible to make text files full of your own Punctual function definitions, post them to the web, and then import them into your Punctual live coding for reuse over many situations, performances, etc.)

In the program that follows, the <> 5 at the end of each line after the output (i.e. audio or add) is a crossfade time. Try changing each line and re-evaluating - over 5 seconds you will hear/see a gradual transition between the new and old programs:

```
(lpf 1000 1 $ saw $ midicps $ 24 + [0,0.01]) * dbamp (-20) >> audio <> 5;
circle [0,0] 0.2 >> add <> 5;
```

## More visual possibilities: transformations, images, videos, transparency, audio reactivity

```
tile 2 $ circle [0,0] 0.2 >> add;
img "https://dktr0.github.io/Punctual/woodbine-2025-summer.jpg" >> add;
tile 2 $ img "https://dktr0.github.io/Punctual/woodbine-2025-summer.jpg" >> add;
zoom 0.4 $ img "https://dktr0.github.io/Punctual/woodbine-2025-summer.jpg" >> add;
move [0.5,-0.5] $ img "https://dktr0.github.io/Punctual/woodbine-2025-summer.jpg" >> add;
spin (osc 0.1) $ img "https://dktr0.github.io/Punctual/woodbine-2025-summer.jpg" >> add;
vid "https://upload.wikimedia.org/wikipedia/commons/3/34/Pill_woodlouse_%28Armadillidium_vulgare%29.webm?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" >> add;
```

Now transparency (this is one connected example, enter all four lines) - the blend output expects 4 channels at a time (red, green, blue, alpha = opacity):
```
[1,0,0,rect [0,0] [2,0.1]] >> blend;
[0,1,0,rect [0,0] [0.1,2]] >> blend;
spin (osc 0.1) $ [0,0,1,rect [0,0] [1,1]] >> blend;
spin (osc 0.05) $ zoom 0.2 $ imga "https://dktr0.github.io/Punctual/woodbine-2025-summer.jpg" >> blend;
```

(There's also vida which is like imga but for videos.)

Audio reactivity: For this it's probably helpful to use Punctual in Estuary, so you can make some MiniTidal beats and see how the Punctual visuals react:

```
circle [bipolar lo, 0] 0.2 >> add; -- moves with low frequencies of audio output
circle [bipolar mid, 0] 0.2 >> add; -- moves with mid frequencies of audio output
circle [bipolar hi, 0] 0.2 >> add; -- moves with highest frequencies of audio output
hline ifft 0.002 >> add -- analysis of audio spectrum, lowest frequencies on left
```
