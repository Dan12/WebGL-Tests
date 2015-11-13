// Update the rotation for the next draw, if it's time to do so.
function animate(){
  var currentTime = (new Date).getTime();
  if (lastCubeUpdateTime) {
    var delta = currentTime - lastCubeUpdateTime;

    var scaleUpdate = (30 * delta) / 1000.0;
    cubeRotation += scaleUpdate;
    cubeXOffset += xIncValue * scaleUpdate;
    cubeYOffset += yIncValue * scaleUpdate;
    cubeZOffset += zIncValue * scaleUpdate;

    if (Math.abs(cubeYOffset) > 2.5) {
      xIncValue = -xIncValue;
      yIncValue = -yIncValue;
      zIncValue = -zIncValue;
      cubeYOffset = 2.5*Math.sign(cubeYOffset);
    }
  }

  lastCubeUpdateTime = currentTime;
}