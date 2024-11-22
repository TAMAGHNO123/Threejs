import * as THREE from 'three';

// Create a scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0');

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;



// Create and add a dodecahedron to the scene

//MeshLambertMaterial is named after the mathematician Johann Heinrich Lambert,The MeshLambertMaterial simulates this behavior by providing a matte finish to objects.which means that it is suitable for rendering surfaces that are not shiny, such as chalk, unpolished wood, or other non-reflective materials.

//Emissive in Three.js is a property that allows a material to appear to emit light, independent of external light sources.

// a mesh is a fundamental object that represents a 3D shape or model. It consists of geometry and a material, which together define its structure and appearance

// scene.add() method is used to add objects, such as meshes, lights, cameras, and other elements, to a scene for rendering.


const dodecahedronGeometry = new THREE.DodecahedronGeometry();
const material = new THREE.MeshLambertMaterial({ color: '#468585', emissive: '#468585' });
const dodecahedron = new THREE.Mesh(dodecahedronGeometry, material);
dodecahedron.position.y = 2;
scene.add(dodecahedron);




// Create and add a box to the scene
const boxGeometry = new THREE.BoxGeometry();
const box = new THREE.Mesh(boxGeometry, material);
box.position.y = -2.5;
scene.add(box);

// Create a light
const light = new THREE.SpotLight(0x006777, 1);
light.position.set(1, 1, 1);
scene.add(light);

// Create a renderer
const canvas = document.getElementById('canvas');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

// Animation loop

//animate() function creates a continuous animation loop for 3D objects in a Three.js scene.


/* requestAnimationFrame(animate); -------->>>> Tells the browser to call the animate() function before the next repaint
 Creates a recursive loop for smooth animation
 Optimizes performance by syncing with the display's refresh rate
 Automatically pauses when the tab is not active, saving system resources
*/


renderer.setPixelRatio(window.devicePixelRatio);



 renderer.render(scene, camera);

//Add orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableZoom = true;