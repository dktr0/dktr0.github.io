---
layout: layout.njk
title: "MEDIAART 3D03: Web 1.0 practice submission"
---

# [MEDIAART 3D03](../outline/index.html): Web 1.0 practice submission (practice #4)

Using nano from the terminal, and typing things one character at a time, create a small webpage in a single file called index.html that demonstrates explores both HTML and CSS. There's no need to make it super fancy - the important thing is that you understand each element of code (each "word", each symbol, each line) and that you are able to change and add to it while holding on to that understanding.

To submit the page on Avenue, please ZIP into a ZIP folder first, then submit it in the relevant folder on Avenue. That's it!

## A note about testing your web page

The best way to test your web page is to "serve it to yourself" - like in [the instructions for using node to run a webserver](../node-webserver/index.html). At the terminal, change your present working directory to the folder where your web page is (if you're not already there), do ```npm install http-server``` and then ```npx http-server -c-1``` to launch the web server. Now you should be able to access what you are serving from the web browser with ```http:/127.0.0.1:8080```. If you called your file index.html (as per the instructions) that's the file it will automatically serve from that folder - if you call it something different you'd need to add that as part of the URL, e.g. ```http://127.0.0.1:8080/somethingDifferent.html```

You can also (sort of) test web pages by using the "Open" menu item in the browser (or pressing Ctrl-O on Windows/Linux, Cmd-O on Mac) and selecting the file. However, this is not a great habit. For very simple web pages it will work, but as you start to do fancier things with your web pages you'll quickly reach a point where the simple open mechanism doesn't work anymore (opening those fancy web pages in this way makes them not work). So it's a good habit to use the method above instead, running a local webserver to serve the web page(s) to yourself.

