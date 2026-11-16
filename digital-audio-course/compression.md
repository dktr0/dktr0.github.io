---
layout: layout.njk
title: "MEDIAART 2G03: Compression"
---

# [MEDIAART 2G03](../outline/index.html): Compression

## Compression (and Make-up Gain)

Compression is a key tool for managing the dynamic range of signals.  

For example, in the stage of a project where most of the creative decisions have been made and we're now optimizing it to make sure that it plays well in some particular listening environment where maybe there's a bunch of noise. In another module we saw that reducing the dynamic range of signals somewhat, so that the quieter parts of those signals can compete better with the noise floor in a listening environment, is a key consideration.  

A compressor is a plug-in that makes adjustments to the levels on a very quick moment by moment basis in an attempt to help the quieter parts compete better with the noise floor. The basic idea is that we have a plugin, we give it some input audio. And whenever the average signal level of our input goes above some threshold, we reduce it somewhat to keep it closer to the threshold by some ratio.  

<img src="../diagram-compression-pushing-down-a-signal.png" alt='A diagram showing a signal being "pushed down" in level as it exceeds a threshold, as described in the text' style="width: 100%"/>

For example, in the diagram above, the solid line is the input level. We can see it goes over the threshold. And if we had a ratio of two to one, that overage then gets cut in half. Or in other words, the output level becomes twice as close to the threshold as it was before.  

Now typically, our goal in using compressors is to make the quiet parts louder, not to make the loud parts quieter. So in normal usage, we apply a “makeup gain” and most compressors that you'll encounter in the wild will facilitate applying this makeup gain. And the idea here is that after having pushed down the things that are above the threshold, we push up everything.  

<img src="../diagram-compression-with-makup-gain.png" alt='Diagram showing compression with makeup gain, as described in the text' style="width: 100%"/>

The solid line in the diagram above is the input signal. For a while it's below the threshold, and then it goes above the threshold. One dotted line is a representation of what we saw on the previous diagram: when the level goes above the threshold, that gets pushed down. And the other dotted line now shows what happens when make-up gain is applied: the entire line (both the part that was below the threshold and the part that was above the threshold) gets pushed up. Having pushed down the parts that are above the threshold and then having pushed everything up, now the louder and quieter parts are close together and the overall levels are still close to where they were before (near the top). 

Compressors will typically give you the option of applying make-up gain automatically or manually – as we’ll see as we start to explore it in practice, both ways of applying make-up gain are useful.  

## Compression Calculations

It's useful to walk through some compression calculations. Not because we'll ever really do these calculations in practice, but because doing the calculations is one way of ensuring that we really understand what the parameters of a typical compressor mean.  

Imagine that we have a compressor and it has a certain threshold and a certain ratio, and then we give it audio at a certain input level. Our task is then to figure out what the output level will be. 

The first question we'll ask is, is the input level above the threshold? If it is above the threshold, we will ask how much it's above the threshold. And then we'll divide that amount by the ratio to get a new amount for how much it should be above the threshold. And we add that new amount above the threshold to the threshold to get the new level before makeup gain. Finally, we add any makeup gain to the new level to get the output of the compressor. 

So here's an example of this. We have a compressor with the threshold at –20 dBFS. The ratio is 2 (2:1) and the makeup gain is +3 dB. And then we present it with an input level around -10 dBFS. What is the target output level? So first we ask, is the input above the threshold? Well, -10 is above -20. So yes. How much above the threshold is it? Well, it's 10 db above the threshold. When we divide that by our ratio of two, what do we get? Well, 10 dB above the threshold is going to be pushed down to only 5 dB above the threshold. And when we add that to the threshold, we will get our new level before makeup gain: 5 dB above –20 is –15 dBFS. Our target level is going to be at -15 before makeup gain. And after we apply the makeup gain of +3 dB, we're left with the final target level of –12 dBFS. So this compressor took something that was at –10 dBFS and pushed it down to being at -12 dBFS instead. 

Here's another example. A compressor with a threshold at -10 dBFS, a ratio of 10 (10:1), and make-up gain of +4.5 dBFS. And we give it an input level of around -5 dBFS. And then we ask, what is the target output level? Well, first question, is the input above the threshold? Yes, -5 is higher than -10. How much higher? +5 db above. When we divide that by the ratio, how much should the new level be above the threshold? Well, 5/10 is 0.5. So it will be +0.5 dB above our threshold. 0.5 dB above –10 is -9.5 dBFS. Now we apply the makeup gain, which was +4.5 And we get -5. -9.5 plus 4.5 is minus five. So I want to call your attention here to the fact that we were above the threshold, compression happened and the levels got pushed down. But then because of the makeup gain, they got pushed up again. And our final output level is the same as our input level, in this specific combination of parameters. Different input levels would still be compressed and the quieter and louder parts are still getting closer to each other. 

Here's example number three. Let's say we have a compressor with a threshold at –50 dBFS, a ratio of 2:1, and makeup gain of +10 dB. Now we give it an input level of -65 dBFS. And the question is, what is the target output level? So the first thing we ask is, is the input above the threshold? No, -65 is not above the threshold. So compression doesn't happen. The level before makeup gain will be exactly the same as the input level: -65 dBFS. But the makeup gain is always applied to everything. So what is the level after we apply the makeup gain? It'll be -65 plus ten or -55 dBFS.

## Compression Parameters

Let's look at the typical parameters of compression. We've already seen that ratio (in other words: how much things get pushed down when they're above the threshold) is a key parameter. And in practice, that's often the parameter that's set first, depending on the purpose for which you're using the compression plug-in.  

We've also seen that threshold is a key parameter. It is often set experimentally or iteratively. You set the ratio that you think you need and then you move the threshold around while listening repeatedly to the result. And typically, compression plugins will also have some time parameters as well. For example, they'll have attack and release parameters like those in this Reaper plug-in [image below].  

<img src="../screenshot-reapers-reacomp-plugin.png" alt="Screenshot of Reaper's ReaComp compression plugin" style="width: 100%"/>

Basically the idea of the time parameters is that the compressor doesn't automatically go to the new target level. It goes to it over the time of the attack. And then when you come back down below the threshold with your input level, it comes back to “not compressing anymore” only after the release time has passed. If the compressor went right away to the target level, things would sound very distorted and unnatural. It would basically be like clipping the signal when it went over the threshold (and we know that clipping often sounds bad). But because it only gradually gets there, it's able to have a smooth effect depending upon the relationship of these times to the kind of material that you're putting through the compressor. Often working with these four parameters is really at the heart of working with the compressor. And then particular compressors and particular plugins will have lots of other parameters to explore and play with as well.

## Applications of Compression

Compression has three main applications.  

#1: I think the first and most important one is that compression can make it easier to hear the quieter moments within an overall finished mix. That's certainly the main reason we're going to use a compressor in this course.  

#2: We might also use it to make the quieter parts within an individual track or audio region within a project louder, more “punchy”, more present.  

#3: There's also a special application of compression called limiting, which is really about pushing everything closer to the top in order to remove transient peaks, little individual samples that go very, very high, although we don't really notice them, in order to make the rest of our material be able to use the full detail of our digital format, of our bit depth, and then also to manage overall loudness.

So depending on what our purpose for using compression is, we might have some different typical starting compression parameters. If what we're doing is gently reducing the dynamic range of an overall finished project will probably start with compression ratio around 2 or less. And then we'll experiment with the threshold and time parameters. We can use relatively gentle ratios for that situation.  

If our purpose is rather to change the character of a particular track and make it more punchy or present (for example, to make a voice sound more like a radio shock jock or a guitar to sound more “metal”): maybe we’re going to start with ratios between 2 and 10 and then work from there, trying higher ratios even.  

If what we're doing is limiting using a standard compressor, ratios between 10 and 20 would be good starting points, together with fast/short attack and release times, so that all of this is happening very quickly, but not immediately still. However, in talking about limiting, we should also note that there are dedicated/specialized limiting plugins, and we’re more likely to use those for limiting. They are still basically compressors, but they have often a completely different interface, as well as some tricks that are happening in the processing in order to be absolutely sure that the levels stay below a given maximum while not introducing any audible distortion into the audio result.

## Effect of compression on noisefloor

So there's a couple of other topics to quickly talk about... One thing is to note that whenever we use a compressor on audio, it has an effect on the noise floor.  

<img src="../diagram-compression-before-after-noisefloor.png" alt='Diagram of relative strength of signal components, before and after compression, as discussed in text' style="width: 100%"/>

In the diagram above the audio before compression is on the left: there was a bit of noise, really quietly in the signal. Then there was the stuff that was quiet but which we want. And then finally there's the loud stuff. 

And when we use the compressor (as on the right side of the diagram), what we're gonna do is we're going to bring all of the quiet stuff closer to the loud stuff. But it is important to realize that we're also going to simultaneously bring up the noise floor, which is part of the quiet stuff. We're going to bring that up as well as part of this. 

And so quite commonly when you're using compressors, you'll notice that as you increase compression ratios, as the compression becomes more noticeable, the various electrical and digital and environmental noises in the signal also become more salient. So this is just one more reason to be careful and try to make as low noise recordings as possible. Because when we make really low noise recordings, we're going to have the potential to compress them more without that noise floor becoming audible and problematic. 

## Multiband compression and expansion

So I also want to talk quickly about two other plug-ins that are in this space: multi-band compression and expansion. 

Multi-band compression addresses a common problem with compression, which is that if we want to compress things a lot, we have to be pretty aggressive with the ratios and the thresholds. And then it's often not possible to find time parameters for those settings that don't sound unnatural. So we'll get various “pumping” and “breathing” sensations as the compressor activates and deactivates. One of the ways to mitigate this and make this easier is to compress different parts of the spectrum separately.  

In a multiband compressor, the input gets divided by special filters into different parts of the spectrum, like the highs and the lows, etc. And these are usually special filters that have been designed to work together in such a way that if you were to just divide the input and then put it all back together again, you'd get back exactly what you had in the beginning. But then in a multiband compressor, we take the output of all those filters and we compress them all individually, potentially with different parameters, but not necessarily. So these multiple compressors, they all work at different times, in parallel. And then we mix the different parts of the spectrum back together again. And often it's possible to be much more aggressive in compression settings when we're working with just particular parts of the spectrum.  

You will also encounter expanders, which are the opposite of compressors in terms of audio plug-ins. With compression, when the audio levels go above a threshold, they're pushed down to be closer to the threshold, while the levels below the threshold are unchanged (with the caveat of makeup gain). And the expansion process is the opposite. With expansion, when the levels are above the threshold they are unchanged, but when they are below they are pushed further away from the threshold. We already saw this briefly in our module on noise strategies. That's a common use of expansion in order to take levels that are below some kind of gate threshold and push them down even further, but not pushing them away completely in order to not have that kind of on-off sensation that a noise gate has.
