---
layout: layout.njk
title: "MEDIAART 3D03: CSS Flexbox and Grid"
---

# [MEDIAART 3D03](../outline/index.html): CSS Flexbox and Grid

There are two very general concepts of distributing things in space that we might need in different situations. In one concept, we pile things up in a certain direction, and as we pile them up the space grows to accommodate additional items - this is a use case where CSS flexbox gives us lots of elegant controls. In another concept, we take a known amount of space and we divide it among the things that exist - this is a case where CSS grid is a particularly useful concept. This page has links to some resources for both concepts, and a simple example of each.

Here's a complete guide to the contemporary use of CSS flexbox: [CSS Flexbox Layout Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

And here's a simple example of using flexbox to distribute things (the class inner and the extra div inside "contained" is to give the paragraphs a fixed width which makes it easier to demonstrate the flex "wrapping" behaviour in action):

```
<html>
  <head>
    <style type="text/css">
.container {
  display: flex;
  flex-wrap: wrap;
}
.contained {
  flex-grow: 1;
}
.inner {
  width: 400px;
}
    </style>
  </head>

  <body>

<div class="container">
 <div class="contained"><div class="inner">In Weeks Seven through Nine (Mon 23 Feb - Fri 13 Mar), we'll work through some more advanced content and activities in each of the six areas/learning outcomes, while also conceiving, planning, and proposing a second project (project #2) that must be more ambitious/scaled than project #1 was. The last class meeting (Wed 11 Mar) will be devoted to last minute peer and instructor assistance with the full proposal for project #2, which is due by 10 PM on Fri 13 Mar. 

There will be no scheduled class meetings on Mon 16 Mar and Wed 18 Mar, while I inspect and approve all of the proposals. You are strongly encouraged to begin working in earnest on the execution of project #2 immediately, prior to receiving my feedback on your proposal.

During both part B and most of part C, you'll be able to complete the six asynchronous (on your own time), open-book, re-doable tests on each area/learning outcome, repeating each test as many time as necessary to receive the necessary 80% (between Mon 23 Feb and 10 PM on Mon 30 Mar, after which point the tests will become no longer available to complete, strictly). You are strongly encouraged to start attempting these tests early in the window in which they are available, to complete them without assistance or collaboration, and to use the possibility of repeated attempts as a way of learning and preparing for the final exam.</div></div>
 <div class="contained"><div class="inner">In Weeks Seven through Nine (Mon 23 Feb - Fri 13 Mar), we'll work through some more advanced content and activities in each of the six areas/learning outcomes, while also conceiving, planning, and proposing a second project (project #2) that must be more ambitious/scaled than project #1 was. The last class meeting (Wed 11 Mar) will be devoted to last minute peer and instructor assistance with the full proposal for project #2, which is due by 10 PM on Fri 13 Mar. 

There will be no scheduled class meetings on Mon 16 Mar and Wed 18 Mar, while I inspect and approve all of the proposals. You are strongly encouraged to begin working in earnest on the execution of project #2 immediately, prior to receiving my feedback on your proposal.

During both part B and most of part C, you'll be able to complete the six asynchronous (on your own time), open-book, re-doable tests on each area/learning outcome, repeating each test as many time as necessary to receive the necessary 80% (between Mon 23 Feb and 10 PM on Mon 30 Mar, after which point the tests will become no longer available to complete, strictly). You are strongly encouraged to start attempting these tests early in the window in which they are available, to complete them without assistance or collaboration, and to use the possibility of repeated attempts as a way of learning and preparing for the final exam.</div></div>
 <div class="contained"><div class="inner">In Weeks Seven through Nine (Mon 23 Feb - Fri 13 Mar), we'll work through some more advanced content and activities in each of the six areas/learning outcomes, while also conceiving, planning, and proposing a second project (project #2) that must be more ambitious/scaled than project #1 was. The last class meeting (Wed 11 Mar) will be devoted to last minute peer and instructor assistance with the full proposal for project #2, which is due by 10 PM on Fri 13 Mar. 

There will be no scheduled class meetings on Mon 16 Mar and Wed 18 Mar, while I inspect and approve all of the proposals. You are strongly encouraged to begin working in earnest on the execution of project #2 immediately, prior to receiving my feedback on your proposal.

During both part B and most of part C, you'll be able to complete the six asynchronous (on your own time), open-book, re-doable tests on each area/learning outcome, repeating each test as many time as necessary to receive the necessary 80% (between Mon 23 Feb and 10 PM on Mon 30 Mar, after which point the tests will become no longer available to complete, strictly). You are strongly encouraged to start attempting these tests early in the window in which they are available, to complete them without assistance or collaboration, and to use the possibility of repeated attempts as a way of learning and preparing for the final exam.</div></div>
 <div class="contained"><div class="inner">In Weeks Seven through Nine (Mon 23 Feb - Fri 13 Mar), we'll work through some more advanced content and activities in each of the six areas/learning outcomes, while also conceiving, planning, and proposing a second project (project #2) that must be more ambitious/scaled than project #1 was. The last class meeting (Wed 11 Mar) will be devoted to last minute peer and instructor assistance with the full proposal for project #2, which is due by 10 PM on Fri 13 Mar. 

There will be no scheduled class meetings on Mon 16 Mar and Wed 18 Mar, while I inspect and approve all of the proposals. You are strongly encouraged to begin working in earnest on the execution of project #2 immediately, prior to receiving my feedback on your proposal.

During both part B and most of part C, you'll be able to complete the six asynchronous (on your own time), open-book, re-doable tests on each area/learning outcome, repeating each test as many time as necessary to receive the necessary 80% (between Mon 23 Feb and 10 PM on Mon 30 Mar, after which point the tests will become no longer available to complete, strictly). You are strongly encouraged to start attempting these tests early in the window in which they are available, to complete them without assistance or collaboration, and to use the possibility of repeated attempts as a way of learning and preparing for the final exam.</div></div>
</div>

  </body>
</html>
```

Here's a complete guide to the contemporary use of CSS grid: [CSS Grid Layout Guide](https://css-tricks.com/complete-guide-css-grid-layout/)

And here's a simple example of using grid to make a 2x2 grid of cells:

```
<html>
  <head>
    <style type="text/css">
.container {
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-template-rows: repeat(2,1fr);
  width: 100%;
  height: 100%;
}
.contained {
  border: 1px solid black;
}
    </style>
  </head>

  <body>

<div class="container">
 <div class="contained">my first div</div>
 <div class="contained">my second div</div>
 <div class="contained">my third div</div>
 <div class="contained">my fourth div</div>
</div>

  </body>
</html>
```
