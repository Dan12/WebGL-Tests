//
// initBuffers
//
// Initialize the buffers we'll need. For this demo, we just have
// one object -- a simple two-dimensional cube.
//
function initBuffers() {
  
  //setting up buffer for triangle
  triangleBuffer = initArrayBuffer(triangleVetricies, triangleVetricies.length/3, triangleVertColors);
  
  //setting up buffer for square
  squareBuffer = initArrayBuffer(squareVerticies, 5, squareVertColors);
  
  //radius, colors
  cubeBuffer = createCube(1,
    [1.0,0.0,1.0,1.0,
     1.0,0.0,0.0,1.0,
     0.0,1.0,0.0,1.0,
     0.0,0.0,1.0,1.0,
     1.0,1.0,0.0,1.0,
     0.0,1.0,1.0,1.0]);
}