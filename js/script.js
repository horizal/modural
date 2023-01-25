let scene = new THREE.scene();

let camera = new THREE.PerspectiveCamera(35, window.innerHeight / window.innerWidth, 0.1, 3000);
camera.position.z = 100;

let rendu = new THREE.WebGLRenderer();

rendu.setSize(window.innerWidth, window.innerHeight);
rendu.setClearColor(0x132644)

document.body.appendChild(rendu.domElement);

//------------------- déposer et créer la forme --------------------------

let forme = new THREE.group();
let geometrie = new THREE.TorusKnotGeometry(10, 3, 100, 16);
let materiel = new THREE.MeshNormalMaterial({
    color: 0xff000,
    transparent: true,
    opacity: 1,
    wireframe: true,
    wireframelinewidth: 5,
    wireframelinejoin: 'round',
    wireframelinecap: 'round'
});

forme.add(new THREE.mesh(geometrie, materiel));
scene.add(forme);
//---------------------------------------------------------------------------
let control = new THREE.OrbitControls(camera);
control.update();


let animer = function () {
    requestAnimationFrame(animer)
    forme.rotation.x += 0.005
    forme.rotation.y += 0.005
    rendu.render(scene, camera);
}

animer();




