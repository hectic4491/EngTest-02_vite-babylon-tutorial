import * as BABYLON from '@babylonjs/core';


// * Canvas & Engine
const canvas = document.getElementById("renderCanvas");
const engine = new BABYLON.Engine(canvas);


// * Create Scene function
const
 createScene = function() {
  const scene = new BABYLON.Scene(engine);

  scene.createDefaultCameraOrLight(true, false, true);
  // const box = new BABYLON.MeshBuilder.CreateBox();

  // /* Here are the options for a sphere. */
  // const sphere = new BABYLON.MeshBuilder.CreateSphere(
  //   'mySphere', // name
  //   {
  //     segments: 8,
  //     diameter: 0.3,
  //     diameterY: 0.4
  //   }, // 
  //   scene /* scene; When you only have 1 scene,  */
  // );      /* this arguement doesn't do anything. */


  // /* Here's some options for a box. */
  // const customizedBox = BABYLON.MeshBuilder.CreateBox(
  //   'customizedBox',
  //   {
  //     size: 0.1,
  //     width: 2,
  //     height: 0.05,
  //     depth: 0.5,
  //     faceColors: [ // Order: +X, -X, +Y, -Y, +Z, -Z (?? Is this true ??)
  //       new BABYLON.Color4(1, 0, 0, 1), // r, g, b, a
  //       new BABYLON.Color4(0, 1, 0, 1),
  //       new BABYLON.Color4(0, 0, 1, 1),
  //       new BABYLON.Color4(1, 1, 0, 1),
  //       new BABYLON.Color4(0, 1, 1, 1),
  //       new BABYLON.Color4(1, 0, 1, 1)
  //     ]
  //   }
  // )


  // /* Ground */ 
  // const ground = new BABYLON.MeshBuilder.CreateGround(
  //   '',
  //   {
  //     height: 10,
  //     width: 10,
  //     subdivisions: 5, // Same as segments for a sphere.
  //     subdivisionsX: 10, // Among other things, these are useful for height maps.
  //   }
  // );

  // ground.material = new BABYLON.StandardMaterial();
  // ground.material.wireframe = true;


  const heightMapMesh = new BABYLON.MeshBuilder.CreateGroundFromHeightMap(
    '',
    '/height-map-1.png',
    {
      height: 10,
      width: 10,
      subdivisions: 64,
      maxHeight: 2,
      minHeight: 0
    }
  )

  heightMapMesh.material = new BABYLON.StandardMaterial();
  heightMapMesh.material.wireframe = true;

  return scene;
}


// * Create the scene
const scene = createScene();


// * Render Loop
engine.runRenderLoop(function() {
  scene.render();
});
/**
 * This simple function will keep the engine and canvas
 * the same size as the browser window without distortion. 
 **/ 
window.addEventListener('resize', function() {
  engine.resize();
})