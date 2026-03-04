---
layout: layout.njk
title: "MEDIAART 3D03: Notes on three.js"
---

# [MEDIAART 3D03](../outline/index.html): Notes on three.js

three.js is a library for accelerated 3D graphics in the browser. it is a substantial JavaScript library built on top of an API (a set of JavaScript features) built-in to the browser called WebGL. WebGL programming is very nitpicky and low-leve - ThreeJS builds on top of this to provide a simpler interface oriented to conventional 3D tasks, such as the things commonly done in programming video games and virtual environments.

There are lots of fancy three.js examples on [the official examples page at threejs.org](https://threejs.org/examples/).

We might begin by experimenting with some simple threejs concepts in [this web-based live coding editor](https://jsfiddle.net/zycqb61k/).

However, we'll probably soon hit things we can't do in the live coding editor, or will want to make something more permanent as part of our projects, so the rest of these web garden notes are aimed at those scenarios.

To begin, we can use npm to set up a project that already has the three.js JavaScript libraries available. Closely tracking the installation/"hello world" example at the threejs website, that might look something like this:
```
mkdir threejs-test
cd threejs-test
npm init
npm install three
npm install --save-dev vite
npx vite
```

Note that "vite" in the above is another simple web server (like http-server), and one well-suited to some nuances of how three.js has been organized. Working through the first bit of [the threejs "Creating a scene tutorial"](https://threejs.org/manual/#en/creating-a-scene) but adapting it to all be in a single HTML file (for transparency) would yield something that looks like this:

```
<html>
<body>
  <script type="module">
import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh(geometry,material);
scene.add(cube);

camera.position.z = 5;

function animate(time) {
  cube.rotation.x = time / 2000;
  cube.rotation.y = time / 1000;
  renderer.render(scene,camera);
}
renderer.setAnimationLoop(animate);

  </script>
</body>
</html>
```

At this point, deeper learning about threejs.org will likely involve wandering in multiple directions through:
- the [manual](https://threejs.org/manual/)
- the [detailed documentation of all of the functionality of three.js](https://threejs.org/docs/)
- the [aforementioned official, curated list of examples](https://threejs.org/examples/) - by visiting an example and then looking at the HTML and JavaScript source code for that example

Immediately below, is my own rewriting of some of the threejs.org tutorial materials into a single reference example that I think demonstrates a code style that will assist in scaling up to more complex projects. We'll work with this reference example in our class meetings. Note that it uses a 3D model file loaded from the [LocoMotion project](https://github.com/dktr0/LocoMotion). There are also sites where you can log-in and download (relatively) free 3D models of different kinds.

```
<html>
<body>
  <script type="module">
import * as THREE from "three";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';

// make a scene, a camera, and a renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.setAnimationLoop(function(){renderer.render(scene,camera);});

function addLighting() {
  const ambientLight = new THREE.AmbientLight("red",1);
  scene.add(ambientLight);
  const lightAbove = new THREE.PointLight("green",25);
  lightAbove.position.set(0,2,2);
  scene.add(lightAbove);
  const lightBelow = new THREE.PointLight("blue",25);
  lightBelow.position.set(0,-2,2);
  scene.add(lightBelow);
}

function addSimpleMesh() {
  const geometry = new THREE.BoxGeometry(1,1,1);
  // const geometry = new THREE.CircleGeometry(7,24); // radius, number of segments
  // const geometry = new THREE.ConeGeometry(6,8,16); // radius, height, number of segments
  // const geometry = new THREE.CylinderGeometry(1,1,4,12); // top radius, bottom radius, height, number of segments
  // const geometry = new THREE.PlaneGeometry(9,9); // width, height
  // const geometry = new THREE.SphereGeometry(1,12,8); // radius, widthSegments, heightSegments
  const material = new THREE.MeshPhongMaterial( { color: "hsl(127,100%,50%)" } );
  const mesh = new THREE.Mesh(geometry,material); 
  scene.add(mesh);
  return mesh;
}

async function addTextMesh() {
  const loader = new FontLoader();
  const font = await loader.loadAsync('./node_modules/three/examples/fonts/helvetiker_regular.typeface.json');
  const geometry = new TextGeometry("example",{ font: font, size: 1, depth: 0.1, curveSegments: 12 });
  const material = new THREE.MeshPhongMaterial( { color: "hsl(127,100%,50%)" } );
  const text = new THREE.Mesh(geometry,material);
  scene.add(text);
  return(text);
}

async function addGLTFMesh() {
  const loader = new GLTFLoader();
  const gltf = await loader.loadAsync('https://dktr0.github.io/LocoMotion/models/Diver.glb');
  scene.add(gltf.scene);
}

// add things to the scene, and note that some of them are "asynchronous"
addLighting();
var simpleMesh = await addSimpleMesh();
var textMesh = await addTextMesh();
var gltfMesh = await addGLTFMesh();

const startTime = Date.now(); // current timestamp in milliseconds
function updateScene() {
  const time = Date.now() - startTime;
  if(simpleMesh != null) {
    simpleMesh.rotation.x = time / 2000;
    simpleMesh.rotation.y = time / 1000;
    if (time > 10000) {
      scene.remove(simpleMesh);
      simpleMesh = null;
    }
  }
}
setInterval(updateScene,1000/60); // update the scene 60 times per second

  </script>
</body>
</html>
```
