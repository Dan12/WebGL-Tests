//
// drawScene
//
// Draw the scene.
//
function drawScene() {

  initScene();

  // Now move the drawing position a bit to where we want to start
  // drawing the cube.
  mvTranslate([-0.0, 0.0, -12.0]);

  // Save the current matrix, then rotate before we draw.
  mvPushMatrix();
  mvRotate(cubeRotation, [1, 0, 1]);
  
  // draw triangle
  drawArrayBuffer(triangleBuffer[0], triangleBuffer[1], triangleBuffer[2], gl.TRIANGLES);
  
  //draw square
  drawArrayBuffer(squareBuffer[0], squareBuffer[1], undefined, gl.TRIANGLE_STRIP);
  
  mvPushMatrix();
  mvTranslate([cubeXOffset, 0.0, 0.0]);
  mvTranslate([-2,0,-3]);
  //draw cube
  drawArrayBuffer(cubeBuffer[0], cubeBuffer[1], cubeBuffer[2], gl.TRIANGLES);
  mvPopMatrix();
  
  //draw another cube
  mvPopMatrix();
  mvRotate(cubeRotation*0.2, [1,0,1]);
  mvScale(2,1,1);
  drawArrayBuffer(cubeBuffer[0], cubeBuffer[1], cubeBuffer[2], gl.TRIANGLES);

  //animate
  animate();
}

function initScene(){
  gl.viewport(0, 0, canvas.width, canvas.height);
  
  //console.log(canvas.width+","+canvas.height+","+gl.viewportWidth+","+gl.viewportHeight);
  
  // Clear the canvas before we start drawing on it.
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  // Establish the perspective with which we want to view the
  // scene. Our field of view is 45 degrees, with a width/height
  // ratio of 640:480, and we only want to see objects between 0.1 units
  // and 100 units away from the camera.
  perspectiveMatrix = makePerspective(45, canvas.width/canvas.height, 0.1, 100.0);

  // Set the drawing position to the "identity" point, which is
  // the center of the scene.

  loadIdentity();
  
  setupLighting();
}