var canvas;
var gl;

var cubeRotation = 0.0;
var cubeXOffset = 0.0;
var cubeYOffset = 0.0;
var cubeZOffset = 0.0;
var lastCubeUpdateTime = 0;
var xIncValue = 0.4;
var yIncValue = -0.1;
var zIncValue = 0.3;

var mvMatrix;
var shaderProgram;
var vertexPositionAttribute;
var vertexColorAttribute;
var perspectiveMatrix;
var vertexNormalAttribute;

var triangleVetricies = [
 2,2,2,
 3,2,2,
 3,2,3,
 2,2,2,
 3,2,2,
 3,3,2
];
var triangleVertColors = [
 1.0,0.0,0.0,1.0,
];
var triangleBuffer;

var squareVerticies = [
 -2,2,2, //corner 1
 -3,2,2, //diagonal 1
 -2,3,2, //diagonal 2
 -3,3,2, //corner 2
 -2,3,3 //diagonal 3
 ];
var squareVertColors = [
 0.0,1.0,0.7,1.0,
];
var squareBuffer;

var cubeBuffer;

var ambientVals = [0.3,0.3,0.4];
var constLightingDirection = [1,1,1];
var lightingDirection = constLightingDirection;
var directVals = [0.9,0.9,0.9];