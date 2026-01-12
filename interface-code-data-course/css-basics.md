---
layout: layout.njk
title: "MEDIAART 3D03: CSS basics"
---

# [MEDIAART 3D03](../outline/index.html): CSS basics

CSS (short for "cascading style sheets") is a language that was added to the HTML specification as a way of separating (to some extent) information about how and where things should appear from the underlying structure of what those things are and how they are organized. This separation accomplishes many things, including making it easier for the same content to be displayed in different ways.

The [CSS Zen garden](https://csszengarden.com/) is a particularly nice example of just changing the CSS to display the same HTML in radically different ways.

In practice, CSS tends to appear both in separate files (usually given the extension .css to clearly indicate them) as well as directly in HTML files. CSS is not so much a separate language from HTML, more like a kind of language within a language.

## A simple CSS example based on classes

Classes in HTML and CSS are a common way of identifying elements (in an HTML document) that have something in common, and then treating them all the same way in terms of their "styling" (how and where they appear).
In HTML, any tag can be given a "class" by adding the class property inside the opening tag. Here's an example:

```
<div class="paragraph">This is my paragraph.</div>
<div class="paragraph">This is another paragraph.</div>
```

Then, in CSS, we can specify the properties that will be given to all elements of that class - here's an example that continues, in CSS, from the example above (the . at the beginning of the code is what says that paragraph is the name of a class):

```
.paragraph {
  color: red;
}
```

And we can insert that in an HTML document (for now) by creating a ```<style>``` tag in the ```<head>``` of the document, giving the style tag the property type=text/css, and then putting the CSS code above inside the style tag as its contents. The overall result of all of the above would look like this:

```
<html>
<head>
  <title>Title</title>
  <style type="text/css">
.paragraph {
  color: red;
}
  </style>
</head>
<body>
  <div class="paragraph">This is a paragraph.</div>
  <div class="paragraph">This is another paragraph.</div>
</body>
</html>
```

Specifying color is a particularly common/basic thing to do with CSS and it can be done in different ways. I recommend using HSL (hue saturation lightness). A CSS property for color specified with HSL would look like this (this is red): ```color: hsl(0, 100%, 50%);```

There are many different HTML elements and so many, many different CSS properties that might apply to them. Adding to the complexity, the major browsers are rarely completely consistent with each other in terms of how these things are displayed. So "styling" web pages with CSS is a neverending exercise of artistic play and experimentation... Nonetheless, here are some more basic properties to play with:

- background-color works the same way as color
- font-size (specify in percent, em-s, i.e. 2em = 200%, or in pixels, e.g. 10px, or in points, e.g. 18pt)
- font-family (e.g. Courier for monospace/fixed width for use with ASCII art!)
- margin-left margin-top margin-right margin-bottom are properties for keeping other things at least that far away from a thing (just like font-size, specify them in percent, pixels, ems, points...)
- padding padding-left padding-top padding-right padding-bottom are properties for creating a space inside this thing (between its border and its content)
- border border-left border-top border-right border-bottom are for drawing borders around things - all three of them require three values - a width (e.g. 1px), a style (e.g. solid) and a color (e.g. red)

## More about CSS "selectors"

A class, as discussed in the preceding section, is one example (the most common, and generally useful) of a CSS selector, something that lets us say which things certain style properties apply to. There are two more basic ways of selecting things with HTML and CSS that everyone should know about.

If we don't put any character before the name of a selector then it will mean "do this for all HTML elements of that HTML type". For example, the following will make all divs have a red foreground/text color. ```div { color: red; }```

If we put a # before the name of a selector then it is an "id" - and is meant to uniquely identify a single element from the document. Here are two examples that go together (in CSS and in HTML) of how that would be used:

```#myRedParagraph { color: red; }```

```<div id="myRedParagraph">This is a red paragraph and there should only be one of these.</div>```

We'll come back later to the question of what happens when multiple style rules apply to something, and possibly the use of fancier selectors (e.g. "all divs that are children of something of a particular class").

## Stylesheets as separate files, and as inline-in-an-HTML-element

It's most common for CSS info to be put in a separate file because (a) there can be a lot of it and it can get distracting and (b) this allows a single carefully designed/maintained stylesheet to be used across many HTML files in a larger project/website and (c) we can even have separate complete stylesheets for different user configurations/needs and just switch which stylesheet is being used, independently of the content it is being used with.
If we place the following tag in the <head> of our HTML document, it will tell that document to get CSS style info from the text file style.css which is in the same folder/directory as the HTML file: ```<link rel="styleSheet" href="style.css" type="text/css" media="screen"/>```

We can also place CSS info directly in HTML using the style attribute. This isn't a great practice though, because it makes things very hard to maintain/edit/update (one of the ways you can sometimes tell something has been generated with machine tools is lots of this sort of thing): ```<div style="color: red;">This is a red div</div>```

## CSS Further References

- [Mozilla developers network CSS reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
- [W3Schools CSS reference](https://www.w3schools.com/cssref/index.php)
- [cssreference.io](https://cssreference.io/)
