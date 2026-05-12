---
layout: layout.njk
title: dktr0's LocoMotion tutorial
---

# dktr0's LocoMotion tutorial

You can use LocoMotion at it's ["standalone" website](https://dktr0.github.io/LocoMotion) or on Estuary (selecting LocoMotion from the drop-down language menu). At the standalone you get a simple demo program to start with.

The simplest LocoMotion program is just this: ```dancer```

It gives you a random model/dancer from the LocoMotion universe, and they are performing a random dance/animation.

We can select specific models like this - and here are also most of the basic/standard models/dancers in the LocoMotion universe (just use one of these lines for now):
```
dancer { url="sunstone" }
dancer { url="camille" }
dancer { url="ordroid" }
dancer { url="dataghost" }
dancer { url="cactus" }
dancer { url="daffy" }
dancer { url="lily" }
dancer { url="willy" }
dancer { url="ant" }
dancer { url="branch" }
dancer { url="leafy" }
dancer { url="oak" }
dancer { url="raccoon" }
dancer { url="mushy" }
```

A specific dancer, positioned in xyz space, and with a specific numbered dance/animation: ```dancer { url="daffy", animation = 3, x = -2, y = 2 }```

Making something vary/oscillate with a sine oscillator - the range of the oscillator's output is 0-1: ```dancer { url="daffy", x = osc 1 }```

Change the range of a 0-1 thing to some other range: ```dancer { url="daffy", x = range (-3) 3 (osc 1) }```

Step sequencing with step and phase: ```dancer { url="daffy", x = step [-3,3] (phase 1 0) }```

Rotation around the y axis: ```dancer { url="daffy", ry = 90 }```

A scene demonstrating various other things we can do:
```
dancer { url="daffy" };
sphere { x = -5, colour = hsv 0.33 1 1 };
box { sx = 100, sy = 0.1, sz = 100 }; -- changing the size of a box in specific dimensions to make a plane
point { y = 5, x = 10, z = 5, intensity = 3, colour = hsv 0.66 0.33 1 }; -- a not-default point light looks much better!
camera { lx = 0, ly = 0, lz = 0, y = 3 }; -- using lx lyz lz and to make the camera look at a specific point from whatever location
```
