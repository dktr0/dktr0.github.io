---
layout: layout.njk
title: "MEDIAART 3D03: HTML basics"
---

# [MEDIAART 3D03](../outline/index.html): HTML basics

HTML is the language that we use to outline the *structure* of what is displayed in the web browser. It is short for Hyper Text Markup Language - the word "markup" is meant to signal that the language started as something that is added to a pre-existing text (in order to indicate its structure).

The key element of HTML is the HTML "tag", which is something that looks like this: ```<div>This is a div</div>```

The above example is a div, and like many (but not all) HTML elements it consists of an opening tag ```<div>```, a closing tag ```</div>```, and the "contents" of the div which are everything that appears between the opening and closing tag.

At the top level, a web page is an ```<html>``` element - everything in the page will be contained within this element.

The ```<html>``` element always contains two child elements: a ```<head>``` and a ```<body>```. The ```<head>``` basically contains metadata, information "about" the document, while the ```<body>``` basically contains the things that appear in the document/webpage.

Here's a list of the basic tags we should know about and be ready to use in this course, mostly demonstrated with examples:

- A ```<div>``` is a "block" level part of a document's structure, such as a paragraph of text, but it can also often be used for other things to do with aligning and dividing space on the webpage: ```<div>This is a div</div>```
- ```<span>This is a span, usually used to style some text within a paragraph.</span>```
- An ```<a>``` tag is used to create links (and also to identify points of navigation within a document). Here's an example of a link to another webpage: ```<a href="https://dktr0.github.io">link to dktr0's web garden</a>```
- An ```<img>``` is used to include an image in the document: ```<img src="put url here"/>``` - note in this that there is no opening and closing tag, just a single tag - that's why the slash appears at the end of the tag instead of not being there or being at the beginning (that's the syntax for a tag that is simultaneously an opening and closing tag).
- ```<ul>``` and ```<ol>``` are unordered and ordered lists. They contain some number of ```<li>``` elements (short for "list item"). Here's an unordered list with three things in it: ```<ul><li>item one</li><li>item two</li><li>item three</li></ul>```
- A ```<title>``` tag containing the title for the document should be a child of the ```<head>``` element (unlike the above examples, which should all appear within the ```<body>``` element): ```<title>This is a title, and must be a child of the head element.</title>```
- When we look at CSS (a second key language mostly used for describing how and where things appear in webpages) we'll use the ```<style>``` and ```<link>``` tags to connect CSS information to an HTML page.

We can inspect the HTML source of web pages using our web browser. With most browsers we can right click somewhere on a page and select an action called something like "View page source".

There are lots of good references to the use of HTML tags online, and here are some recommended ones:

- [W3Schools HTML tag reference](https://www.w3schools.com/TAGS/default.asp)
- [The Mozilla developers network HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference)
- [htmlreference.io](https://htmlreference.io/)

We can experiment with HTML authoring by using a text editor (like nano) to create text files containing HTML, and then use the "Open file" feature of our browser. (And then at another time, we'll look at other ways of accessing web content that we author.)
