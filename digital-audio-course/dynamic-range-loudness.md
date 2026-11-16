---
layout: layout.njk
title: "MEDIAART 2G03: Dynamic Range and Loudness"
---

# [MEDIAART 2G03](../outline/index.html): Dynamic Range and Loudness

## The two problems of dynamic range

<img src="../screenshot-signal-some-parts-lower-some-higher.png" alt='A screenshot of a "typical" audio signal with some parts with lower levels, some with higher, as described in the text.' style="width: 100%"/>

If we take a typical audio signal, like the one represented on the image above, one of the basic things that we will almost always be able to observe about such signals is that they have parts in them that are at lower amplitudes, lower levels, and parts in them that are at higher levels or higher amplitudes. And this is an important consideration because of two problems or challenges that come up. 

### Problem #1

Challenge #1 (one of the two "problems" of dynamic range) has to do with noise in the final listening environment. Let's say we've got a recording project. Someone has mixed all the various elements of the project together and then rendered it to a new soundfile. Next, they give it to someone who's going to listen to it in some environment, and that environment will almost certainly have a substantial noise floor in it. In the diagram below, that noise floor is represented as a dashed line: 

<img src="../diagram-signal-louder-quieter-noisefloor.png" alt='Diagram of a signal with louder and quieter parts in relation to noisefloor, as described in the text' style="width: 100%"/>

For the sake of argument, let’s say that the noise floor is measured at around 50 db SPL. The long curved line represents the imaginary audio project that's being played in that environment, with a part that is much louder and another part that is much quieter. There is, in other words, a “dynamic range” between these two parts, the louder and the quieter.  

Let’s consider the louder part first (towards the left of the image). In the underlying file or signal, those might be the parts that peak around 0 dBFS, the digital maximum.  And because that part is quite “loud”, the person who is listening, in whatever environment they're in, will adjust the “volume” (ie. Gain) on their system so that that loud part plays at 85 db SPL (or some other “comfortably” “suitably” loud level for listening). 85 dB SPL is that kind of level where you probably wouldn't want to listen to all day at that level: it’s comfortably loud and is the kind of level that people will often use for listening in detail to music that they really love. 

Now, let's say that we let a little bit of time pass, and so we arrive at the right side of the diagram. Now we’re in a moment where the levels really are much lower. Maybe they are 40 dB below where we started. We could say that there's a dynamic range of 40 db that we have traversed in this transition. So now we're going to expect that our sound pressure levels in the room are also going to be about 40 dB lower. So instead of it being 85 SPL, they are going to be around 45 dB SPL. That’s somewhat lower than the level of our 50 dB SPL noise floor. We’ll probably still hear both things (signal and noisefloor), but we definitely won't hear the signal as well anymore because of the way it's competing with that noise floor. 

So let’s back up and re-summarize the problem (problem #1) typified in this example so far: typically we’re going to set our playback systems so that the higher levels in the system produce sound pressure levels that are at a comfortable maximum for some given situation. And then as a result of that, the quieter levels in the signal typically have to compete with the noise floor in that situation, making them harder to hear. What's the point of producing something if people aren't going to hear it?... 

### Problem #2...

There’s a second problem with dynamic range, that has to do with the “stability of loudness”. Let's say that we have a signal like the one shown in the diagram below: 

<img src="../diagram-long-quiet-section-followed-by-louder.png" alt='Diagram of a signal with a long quieter section followed by a louder section, as described in the text' style="width: 100%"/>

The solid line represents our average levels. And let's say that they're at about -20 dBFS in our digital file. And let's say that we're listening at around 80 dB SPL, which again is a kind of a comfortably loud level for listening to music and so on. Now we don't change anything except we get to a later point in the signal and the average levels go up by 20 dB, to around 0 dBFS. Now we can predict we’ll be listening at more like 100 dB SPL, which is really too loud to be safe and comfortable under most circumstances. So what's going to happen is that the listener will have to turn down the playback volume to compensate for this instability or unpredictability of the loudness. And if you have a signal where people are constantly being forced to turn down and turn up the volume, that is going to be very annoying to listeners and they're probably not going to want to listen to what you're asking them to listen to at all. So that's the second problem with dynamic range. 

## Strategies to reduce dynamic range

We saw (above) that there are two problems that arise during listening, because of the dynamic range of our signals: (1) the quieter parts tend to be obscured by the noise floor in the listening environment, and (2) later louder parts may annoy listeners by forcing them to turn down their playback volume/gain (or conversely: to have to turn things up when things get annoyingly quiet). Because of these two problems, we’re typically going to want to reduce the dynamic of range of what we deliver to an audience, at least a little bit (perhaps more than a little bit).

We will want to reduce the dynamic range in ways that are appropriate to the context in which we imagine people are going to listen. For example, if we're producing something for an immaculate acoustically-designed contemporary theatre where the noise floor is very low, we will be able to produce recordings with a somewhat wider dynamic range, because the quiet parts of our audio won't be competing with as much of a noise floor. If we're making audio that we think people are going to listen to in very noisy places, like on the subway or in a car or on headphones in noisy places, we're probably going to have to need to reduce the dynamic range quite a bit more, if we want the quieter parts of that audio to still be perceived and to be for their details to be appreciated.  

We have a number of strategies at our disposal for gently reducing the dynamic range. Some of them are things that we’ve already discussed in earlier weeks and modules.  

1. For example, when we're mixing a project, we have multiple tracks playing in parallel, and as we make that project, we're making decisions about the balance between those different tracks. And we're probably going to do that in a way that manages the dynamic range to some extent. When a particular source or region is too quiet, maybe we will push up its level a little bit.  

2. As another example: when we take special care to produce low noise recordings, we are helping to manage the dynamic range because that activity of producing relatively low noise recordings then gives us signals that we can make somewhat louder in our mix without worrying about introducing noise. So it has a kind of indirect impact on dynamic range. 

3. And another example: when we manage the spectrum with filters, when we have a sound that let's say has some bass rumble that is moderately annoying, but maybe not too annoying. And then we use filters to remove that noise from that part of the spectrum. Maybe now the rest of that signal is able to be played at a different level where it speaks more clearly. And so our management of the specrum (with EQ) is related to our management of the overall dynamic range. 

### 4. Introducing Compression

We can produce recordings with reasonably context appropriate dynamic range using these existing strategies (above) at our disposal. But we can take this further using a tool known as compression.  And in introducing this term, we have to be clear, first of all, that when we're talking about compression in these modules about dynamic range, we're really talking about the compression of dynamic range. We're not talking about the rather unrelated topic of “data compression”, which is about making files and making files smaller and about making data more transmissible over the internet (although “data compression” is also a topic of importance for audio work, as we’ll see in other modules in this course). Our topic now is about the compression of dynamic range – it's about something that makes quieter parts closer to stronger parts. 

Audio compression plugins are plugins that push the quieter parts closer to the loud parts, on a relatively fast, “micrological”, moment-to-moment basis. From moment to moment, very, very quickly, they make changes to the levels of the audio that bring quieter things closer to louder things.  

“Limiting” is a closely-related strategy – essentially a special form of compression, done in a stronger way and with particularly strict parameters, so that levels do not go above a specific level and so that we use the full detail of our digital format. The difference between compression and limiting is something we're going to come back to in another model, but suffice it to say that both are strategies that will be commonly used to reduce the dynamic range in our projects, in especially detailed, fast-moving ways.

(Compression is covered in more detail in another page in this web garden.)

## Assessing dynamic range

A key consideration as we start to manage the dynamic range in projects is going to be: how do we assess this? How do we know when we've done a good job of this? How do we know when we have the dynamic range of a project where it needs to be? 

There are really two ways of going about this. One way is the subjective way. The normal form that this takes is the comparison of your material, the material that you're working on, with other material that's already been finished and which you know has an appropriate dynamic range. For example, if you're trying to produce a song in a specific genre, maybe you play it back-to-back with another song by an artist that you admire, in which you're pretty sure the dynamic range is being managed well. And you play them back to back on the same system without adjusting the playback volume/gain and make subjective observations about the differences between what you hear.  

The other way is the “objective” way, which basically refers to using specialized meters in software in order to get numerical measurements about the dynamic range and loudness of the material. And on that basis you can still compare to other material that's known to have an appropriate dynamic range. But now rather than basing it on your subjective observations, you're basing it on numbers. 

So there are these two ways that we can assess dynamic range. I think we can use both methods to whatever extent we're able. I think we can always pull off the subjective method. The objective method might be more difficult if we don't have access to those specialized meters. But even when we do have access to those specialized meters, I think we're still always going to want to fall back on that subjective method because the meters are probably not showing us everything about what's happening in the dynamics of the audio that we're working with. 

There’s a “unit” that sometimes appears on the specialized meters for loudness and dynamic range: loudness units full-scale or LUFS. Sometimes you'll see this abbreviation LUFS on metres in audio software, and that stands for loudness units full scale.  

<img src="../equal-loudness-curves-PUBLICDOMAIN.png" alt='Diagram of equal loudness curves, as described in text' style="width: 100%"/>

Above is a diagram that we've seen in earlier modules: the equal loudness curves. The red ones are contemporary measurements for the equal loudness curves. And the blue ones are the historical Fletcher-Munson curves that were developed in the 130s. And to review: what these curves show, overall, is how hearing is more and less sensitive at different frequencies, and how generally speaking more energy is required in the lowest and highest frequencies to get the same impression of loudness.  

What loudness units full-scale (LUFS) does is (first) it takes an audio signal and it puts it through two filters in such a way as to reverse the effect of the equal loudness curves. And so what we get, is a new version of the signal that emphasizes the frequencies that required less energy.  

To get loudness units full-scale, the second thing that happens is that the filtered audio is measured.  And in theory, since the filtered audio should now have more energy in the parts of the spectrum where we are most sensitive, measuring the average levels of this signal should be closer to being a measurement of how loud the signal would appear to us. It gives you a very, very rough measurement of how different signals might affect us differently in terms of loudness.

The final part of how LUFS are typically used in loudness metres is that such metres will typically measure the amount of energy at different ranges of time, e.g. short-term, medium-term, over the entire range of a track, etc. 