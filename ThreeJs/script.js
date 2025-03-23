const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.z = 3;
scene.add(camera);
const box = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: 0xFFD700});
const mesh = new THREE.Mesh(box, material);
scene.add(mesh);
const canvas = document.querySelector("#draw");
const renderer = new THREE.WebGLRenderer({canvas:canvas,antialias:true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera); 
const clock = new THREE.Clock();
function animate(){
    window.requestAnimationFrame(animate);
    renderer.render(scene, camera);
    mesh.rotation.y = clock.getElapsedTime()*2;
}
animate();