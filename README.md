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
