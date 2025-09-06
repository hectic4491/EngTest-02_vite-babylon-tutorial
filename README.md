# ReadMe

This is the ReadMe for vite-babylon-tutorial.

## Setup

Steps to setting up this vite project.

All scripts will be using bash.

### Prerequisites

- node.js 22 or higher.

### Steps

From our bash terminal, create and move into the root project folder.

```bash
mkdir TestEng-02
cd TestEng-02
```

Initialize vite.

```bash
npm create vite@latest
```

Then, follow the terminal prompts:

1. Set a name for the actual project.
    - e.g: "vite-babylon-tutorial"

2. Select a framework.
    - e.g: "Vanilla"

3. Select a variant.
    - e.g: "JavaScript"

Then, move into the project folder. Install vite. Run the server.

```bash
cd vite-babylon-tutorial
npm install
npm run dev
```

Now the server is up and running. Close the server with ctrl+c.

Install Babylon.js:

```bash
npm install -D @babylonjs/core
```

Remove the following uneeded files:

- counter.js
- javascript.svg

Empty this file:

- main.js
- style.css

Edit index.html:

- Change the title.
- Add ```<link rel="stylesheet" href="/style.css">``` after the second ```<meta>``` and before ```<title>```.
- Remove the div.

Now we're ready to start using Babylon.js

---

## 4 Essential Elements

To display a piece of 3D art on a web page using babylon.js, we need 4 essential elements.

1. **The HTML ```<canvas></canvas>``` element.**
    - This is an HTML container in which the GPU draws our render.

2. **The Babylon.js Engine.**
    - This is basically the brain of our Babylon.js app which transforms the logic we type into rendered 3D Graphics.

3. **The Scene.**
    - A scene the 3D space where the engine renders the 3D objects.

4. **The Camera.**
    - The role of the camera is to display a certain space within a scene.

---

## Let's Start

This is enough code to get us set up with a Babylon.js scene:

```JavaScript
// main.js

import * as BABYLON from '@babylonjs/core';

const canvas = document.getElementById("renderCanvas");

const engine = new BABYLON.Engine(canvas);

const createScene = function() {
  const scene = new BABYLON.Scene(engine);

  return scene;
}

const scene = createScene();

engine.runRenderLoop(function() {
  scene.render();
});
```

---

## Let's adjust our style.css

We want the canvas to take the full screen size, so let's adjust the CSS of the document.

```css
/*style.css*/

html, body {
  overflow: hidden;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

#renderCanvas {
  width: 100%;
  height: 100%;
  touch-action: none;
}
```

## We have an issue

Let's throw in a camera and mesh to see this issue...

```javascript
// main.js

import * as BABYLON from '@babylonjs/core';

const canvas = document.getElementById("renderCanvas");
const engine = new BABYLON.Engine(canvas);

const
 createScene = function() {
  const scene = new BABYLON.Scene(engine);

  scene.createDefaultCameraOrLight(true, false, true);

  const box = new BABYLON.MeshBuilder.CreateBox();

  return scene;
}


const scene = createScene();

engine.runRenderLoop(function() {
  scene.render();
});
```

When we run this, everything loads fine. However, as we adjust the browser size, the canvas graphics become distorted. To fix this, we need to apply the engine's resizing method on browser resize. This requires a window event listener.

```JavaScript
// main.js

// ... (previous code)E

/**
 * This simple function will keep the engine and canvas
 * the same size as the browser window without distortion. 
 **/ 
window.addEventListener('resize', function() {
  engine.resize();
})
```

---

## Creating Meshes

An object inside the scene is often referred to as a Mesh. It could be a box, sphere, torus knot, any complex shape, or even a model made in 3D Modeling software, like blender.

Meshes are composed of a set of triangles. The triangles are made out of Segments and Points (i.e. Vertices). The more segments we have, the more triangles we get.

Babylon.js offers us a big-set of built-in meshes that we can use in our scenes.

They take in 3 main arguments:

- ```name```: the name of the Mesh
- ```options```: adjust the properties of the Mesh here.
- ```scene```: which scene to render the Mesh in.

e.g:
Some Sphere Properties:

- ```segments```: how many "edges" the Mesh should use.
  - Meshes are composed of a set of triangles. The triangles are made out of Segments and Points (i.e. Vertices). The more segments we have, the more triangles we get. I.e. more "Detail".
- ```diameter```: Set the diameter of the sphere.
- ```diameterY```,```X```,```Z```: Change the diameter of the sphere in different axis

## Height Maps

A height map is an image that stores height data in grey pixel colors. Each level of grey represents a higher point. The closer the color is to white, the higher the point. The closer the color is to black, the lower the point.