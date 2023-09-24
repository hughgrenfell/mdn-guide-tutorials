/*
The following libraries can be used with WebGL:
-> Three.js
-> PlayCanvas
-> Babylon.js

This code will demonstrate 3D graphics using Three.js
*/

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const x = 0, y = 0;

const someShape = new THREE.Shape();

someShape.moveTo( window.innerWidth / 2, window.innerHeight / 2 );
someShape.arc(10, 10, 55, 0, 2 * Math.PI);

const geometry = new THREE.ShapeGeometry( someShape );
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

const light = new THREE.AmbientLight("rgb(255,255,255)"); // soft white light
scene.add(light);

const spotLight = new THREE.SpotLight("rgb(255,255,255)");
spotLight.position.set(1000, 1000, 1000);
spotLight.castShadow = true;
scene.add(spotLight);

function draw() {
    renderer.render(scene, camera);
    requestAnimationFrame(draw);
}

draw();

