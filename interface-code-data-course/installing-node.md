---
layout: layout.njk
title: "MEDIAART 3D03: Installing node.js"
---

# [MEDIAART 3D03](../outline/index.html): Installing node.js (and verifying it is installed)

To install node.js on MacOS, go to [https://nodejs.org/en/download](https://nodejs.org/en/download), scroll down to where it says "get a prebuilt Node.js" change the OS to MacOS, set the architecture to x64 (older Macs) or ARM (newer Macs, i.e. M1 etc)and then click just below that to download the macOS Installer (.pkg).

To install node.js on Windows (Debian virtual machine via WSL) or ChromeBook (Debian virtual machine) we'll use apt:

```
sudo apt update
sudo apt install nodejs
sudo apt install npm
```

Whatever method you use, you should be able to verify that node and npm (an adjacent program used to install libraries/plugins/addons to nodejs) by entering the following at your terminal:
```
node --version
npm --version
```

For example, the above commands tell me I am using v20.19.2 of node an version 9.2.0 of npm. If you get an error message instead of a nice clean version number, you either haven't installed node/npm or there's something wrong with your installation.

JavaScript is a language that grew up inside of (and with) web browsers. node.js is a special variation of JavaScript that runs by itself, outside of a web browser. It's useful for learning, and (later) for creating web servers and other things that have something to do with the web but don't belong in a web browser. It's a more "generic" JavaScript, I guess.
