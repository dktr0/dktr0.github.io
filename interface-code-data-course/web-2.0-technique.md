---
layout: layout.njk
title: "MEDIAART 3D03: Web 2.0 technique"
---

# [MEDIAART 3D03](../outline/index.html): Web 2.0 technique

## Databases and AxioDB

AxioDB official document is [here](https://axiodb.in/)

One would install axiodb in an npm-managed project folder like so: ```npm install axiodb```

Here's a "hello world" axiodb example, lightly modified from the official examples provided in the librarie's documentation. It's a node.js program that creates a database, and a specific collection/table within that database, if they don't already exists, inserts a new entry in the collection/table, and prints all of the entries that are already in the database.

```
import { AxioDB } from 'axiodb';
const axio = new AxioDB(false);
const database = await axio.createDB('HelloWorldDB');
const collection = await database.createCollection('posts');
await collection.insert( { post: 'an example post' } );
const results = await collection.query({}).exec();
for (var n in results.data.documents) {
  console.log("post " + n + ": " + results.data.documents[n].post);
}
```

## AJAX updating of info (via GET method)

```
<script>
function loadStuff() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log("received: " + this.responseText);
      document.getElementById('results').innerHTML = this.responseText;
    }
  };
  xhttp.open("GET","getAllPosts", true);
  xhttp.send();
}
loadStuff();
setInterval(loadStuff,2000);
</script>
```

## HTML form submission (via POST method)

```
<form id="myform" action="/submit" method="POST">
  <input type="text" name="message"/>
  <button type="button" onclick="document.getElementById('myform').submit()">Submit</button>
</form>
```

## Using express to write custom webservers

One would install it like so: ```npm install express```

A "hello world" express example that basically recreates what you get by running the simple node http-server (and things like that):

```
import express from 'express';
const app = express();
app.use(express.static('./'));
app.listen(3000, () => { console.log('listening on port 3000'); } );
```

## A more complete example

Here's the complete example we developed during class of a very crude social media site that receives and also displays anonymous posts. All the basic ingredients of web 2.0 are here, in a minimal form!

index.html

```
<html>
<body>
<form id="myform" action="/submit" method="POST">
  <input type="text" name="message"/>
  <button type="button" onclick="document.getElementById('myform').submit()">Submit</button>
</form>
<div id="results"></div>
<script>
function loadStuff() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log("received: " + this.responseText);
      document.getElementById('results').innerHTML = this.responseText;
    }
  };
  xhttp.open("GET","displayAllPosts", true);
  xhttp.send();
}
loadStuff();
setInterval(loadStuff,2000);
</script>
</body>
</html>
```

server.js

```
import express from 'express';
const app = express();
app.use(express.static('./'));
app.get('/displayAllPosts', displayAllPosts); 
app.use(express.urlencoded({ extended: true })); // note: different middleware required
app.post('/submit', submit);

import { AxioDB } from 'axiodb';
const axio = new AxioDB(false);
const database = await axio.createDB('HelloWorldDB');
const collection = await database.createCollection('posts');

async function submit(req,res) {
  await anonymousPost(req.body.message);
  res.sendFile("/home/dktr0/mar09/index.html"); // this isn't ideal, but it will work for now
}

async function displayAllPosts(req,res) {
  const allThePosts = await getAllPosts();
  var output = "<html><body><div>";
  for (var n in allThePosts) {
    output = output + "<div class='postClass'>";
    output = output + allThePosts[n].post;
    output = output + "</div>";
  }
  output = output + "</div></body></html>";
  res.send(output);
}

async function anonymousPost(msg) {
  await collection.insert( { post: msg } );
}

async function getAllPosts() {
  const results = await collection.query({}).exec();
  return results.data.documents;
}

app.listen(3000, () => { console.log('listening on port 3000'); } );
```





