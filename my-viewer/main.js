import * as THREE from 'https://unpkg.com/three@0.164.1/build/three.module.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.164.1/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'https://unpkg.com/three@0.164.1/examples/jsm/controls/OrbitControls.js';



// Сцена
const scene = new THREE.Scene();

// Камера
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 1, 3);

// Рендерер
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Світло
const light = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
scene.add(light);

// Камера управління
const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

// Завантаження GLB
const loader = new GLTFLoader();
loader.load('model.glb', function (gltf) {
  scene.add(gltf.scene);
}, undefined, function (error) {
  console.error(error);
});

// Анімація
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();
