---
layout: layout.njk
title: "MEDIAART 3D03: Using eleventy as a static site generator"
---

# [MEDIAART 3D03](../outline/index.html): Using eleventy as a static site generator"

eleventy (also known as 11ty) is an awesome static-site generator. I use it to manage my own web garden. Here's [the official website, including community forums, conferences, and other awesome resources](https://www.11ty.dev/)

Installing the eleventy static-site generator (in a project already initialized with npm init): ```npm install @11ty/eleventy --save-dev```

Running eleventy as a development web server: ```npx eleventy --serve```

Then you can connect to the HTML site it publishes/serves by pointing your browser to: ```http://localhost:8080```

(You can also run eleventy just to build a site without serving it: ```npx eleventy```

As you make changes in your project folder, eleventy will automatically notice changes, rebuild the site and serve the new files. Nice, eh?

So, let's make a simple "markdown" file called index.md in your project folder (e.g. using nano or another text editor):

```
---
title: My Index Page
---

# This is a level one heading

## This is a level two heading

### This is a level three heading

- This is an unordered list
- Second item
- Third item

[This is a web link to this very page](index.html)
[This is a web link to a remotely located page](https://www.mcmaster.ca)
```

You should see the browser auto-update to the new version of the site, and if you poke around with ls you'll see (a) that a new directory called _site has been created and (b) that it contains a file called index.html that was made from the index.md markdown file.

Let's make second markdown file called page2.md:

```
---
title: Page two
---

# This is page two

It has less content than the index. You can directly put HTML inside markdown when you need to do something that the automatic conversions don't cover!

<hr/>

<img src="spongebob.png"/>
```

If you make a file in the project folder called eleventy.config.js, you can configure various special things such as changing the name of the output folder ("docs" in the example below), and automatically copying certain files without translation to the output folder or even all files of a certain kind (the bottom two lines in the example below):

```
export default function(eleventyConfig) {
  eleventyConfig.setOutputDirectory("docs");
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("background.jpg");
  eleventyConfig.addPassthroughCopy("**/*.png");
  eleventyConfig.addPassthroughCopy("**/*.zip");
};
```

If in the header of a markdown file you set the field layout, e.g. like so:
```
---
layout: layout.njk
title: Web/Digital Gardening
---
```

And then you have a folder called _includes with a file called layout.njk, then that markdown file will be rendered using that "template" for the generated html. Here's [a link to the layout.njk file from my web garden at whatever the present time is](https://github.com/dktr0/dktr0.github.io/blob/master/_includes/layout.njk) (so it might change...)... (I imagine it might be different later on!):

