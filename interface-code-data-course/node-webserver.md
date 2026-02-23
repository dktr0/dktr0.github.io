---
layout: layout.njk
title: "MEDIAART 3D03: Using node to run a webserver"
---

# [MEDIAART 3D03](../outline/index.html): Using node to run a webserver

## Path 1: The quickest way (but not completely robust, see also path 2 below)

If you need to run a web server primarily in order to check how a website/web project you are working on works when served, then it is enough to change your present working directory (i.e. in the terminal) to the directory containing the files you wish to serve and then issue the following command (which assumes you have node and npm installed):

```
npx http-server -c-1
```

The ```-c-1``` option in the command above tells the node-based http-server to not "cache" any files it serves. All of the files that the server serves to web browsers will be marked as un-cacheable, which will mean that if a reload happens it will request all of those files again. In a situation of low traffic with files that may be changing constantly (i.e. because you are working on them, changing them, etc) this is certainly what you would want.

With the node http-server running, you should now be able to access the files through your web browser with at least one of the following URLs:

```
http://localhost:8080
http://127.0.0.1:8080
```

## Path 2: A bit more robust than path 1

The method above works for quick self-testing. The method described in this section is basically the same thing, but adds some things that should help it to work even when you are not connected to the Internet, and when the requests for pages come from machines other than the one with the web server (such as in our class showcase).

To set it up so that node can find the code for the http-server even when you are not on the Internet, do the following two things once (while connected to the Internet), in the folder of your website/web project.

1. ```npm init```

After npm init a series of questions will pop up. Enter a title for the first question (probably doesn't really matter what it is, and you could always change it later), and then just press enter to accept the defaults for all the other questions. npm init will make two files called package.json package-lock.json that together are used to manage JavaAScript "dependencies" of your project (things your project depends on - which could include a webserver if your project needs to be served via a webserver). After that do this:

2. ```npm install http-server```

That second step will install the http-server dependency (the same one we were using with npx http-server -c-1) in a new folder called node_modules under your present folder. In this way the code of the http-server will be there in that folder even when you are not connected to the global Internet.

If you are using MacOS, ChromeOS or "real" Linux you are probably done at this stage, now just issuing the following command in the directory of your project, like in path 1, will launch your webserver even if you are not connected to the Internet (for Windows/WSL users see below):

```
npx http-server -c-1
```

And then you could access the files from the browser via the web server with one of the two following URLs (just like in path 1):

```
http://localhost:8080
http://127.0.0.1:8080
```

But you could also access the files with your IP address on whatever network you are on (and with any luck so can other people on that network), for example ```http://192.168.0.53:8080``` if 192.168.0.53 is your address on the network. Hint: when you launch http-server with npx you can see a little report of the URLs that should be usable to access the pages you are serving.

## Path 2: a further comment about Windows and WSL

*** TODO ****
