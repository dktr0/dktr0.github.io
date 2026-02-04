---
layout: layout.njk
title: "MEDIAART 3D03: Incorporating Punctual into a website"
---

# [MEDIAART 3D03](../outline/index.html): Incorporating Punctual into a website

Here's an example of incorporating the live coding language Punctual into a website, for example as a way of having generative visual art in the background of the website.

For this to work, you'll need to grab the latest version of the file punctual.js from within [the Punctual repository at github](https://github.com/dktr0/Punctual). You can click the big green button that says "Code" and then "Download Zip" to download the whole Punctual repository, within which you'll find the file punctual.js. Then you can copy that file to the folder containing your website.

Once you have punctual.js in the folder where you are working, here is a barebones example of a web page that loads Punctual, tells it to start rendering frames of animation, and then "defines" a specific Punctual "program" (in the variable t that is then passed to the define call). Note the use of backticks in defining t - this allows line breaks to work nicely (normally you can't just have plain linebreaks like that in a JavaScript literal string).

```
<html>
  <head>
  </head>
  <body>

<script type="module">
import * as P from "./punctual.js";
window.punctual = new P.Punctual();
window.punctual.startAnimation();
var t = `
[0,0,0] ++ circle (osc [0.2,0.3]) 0.2 >> blend;
[0,0,0] ++ circle (osc [0.4,0.5]) 0.1 >> blend;
`;
window.punctual.define({zone:0,text:t,time: Date.now()/1000.0});
</script>

  </body>
</html>
```

One more important note: Punctual will not work if you just open the webpage using the open mechanism of your browser. You need to serve it via a webserver. One easy way to do that is to use the web server that is part of (sort of) node and npm. Launching that would look like this (need to be in the folder where your website is):

```
npx http-server -c-1
```

And then you would access what the web server is serving with this url in your browser:

```
http://localhost:8080
```


