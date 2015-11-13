function setupLighting(){
  lightingDirection = (Matrix.Rotation(cubeRotation*(Math.PI/180),Vector.create([1,0,1])).x(Vector.create(constLightingDirection))).elements;
}