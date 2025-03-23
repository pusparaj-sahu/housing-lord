import * as THREE from 'three';

// Create scene, camera and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create box geometry
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Add orbital spheres
const orbitRadius = 2;
const orbitSpeed = 0.01;
const sphereGeometry = new THREE.SphereGeometry(0.1, 32, 32);
const sphereMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 });

const orbital1 = new THREE.Mesh(sphereGeometry, sphereMaterial);
const orbital2 = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(orbital1);
scene.add(orbital2);
// Add testimonial card
const testimonialGeometry = new THREE.PlaneGeometry(1.5, 1);
const testimonialMaterial = new THREE.MeshPhongMaterial({ 
    color: 0xffffff,
    side: THREE.DoubleSide
});
const testimonialCard = new THREE.Mesh(testimonialGeometry, testimonialMaterial);
testimonialCard.position.set(-2, 1, 0);
testimonialCard.rotation.y = Math.PI / 6;
scene.add(testimonialCard);

// Add text texture for testimonial
const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 256;

context.fillStyle = '#ffffff';
context.fillRect(0, 0, canvas.width, canvas.height);

context.font = '24px Arial';
context.fillStyle = '#000000';
context.textAlign = 'center';
context.fillText('Amazing VR Experience!', canvas.width/2, 60);

context.font = '18px Arial';
context.fillText('The property viewing was incredibly', canvas.width/2, 100);
context.fillText('realistic and helped me make my decision.', canvas.width/2, 130);

context.font = '16px Arial';
context.fillText('- Sarah Johnson', canvas.width/2, 180);

const texture = new THREE.CanvasTexture(canvas);
testimonialCard.material.map = texture;
testimonialCard.material.needsUpdate = true;

// Add lights
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// Position camera
camera.position.z = 5;

// Animation loop
let time = 0;
function animate() {
    requestAnimationFrame(animate);

    // Rotate cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // Update orbital positions
    time += orbitSpeed;
    orbital1.position.x = Math.cos(time) * orbitRadius;
    orbital1.position.z = Math.sin(time) * orbitRadius;
    
    orbital2.position.x = Math.cos(time + Math.PI) * orbitRadius;
    orbital2.position.z = Math.sin(time + Math.PI) * orbitRadius;

    renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();
