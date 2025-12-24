import './style.css'
import Alpine from 'alpinejs';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

Alpine.start()

// color configuration
// const primary_color=0x1a1b26;
// const contrast_color=0x0db9d7;


// create first scene render
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / 600, 0.1, 1000 );

// const canvas : HTMLCanvasElement = document.getElementById('canvas1')! as HTMLCanvasElement
// const renderer = new THREE.WebGLRenderer({canvas: canvas, antialias:true});
// renderer.setSize( window.innerWidth, 600 );
// renderer.setClearColor(primary_color)

// for(let i=-50; i<=50; i++){
//   for(let j=-50; j<=50; j++){
//     const geometry = new THREE.BoxGeometry( 0.1, 0.1, 0.1 );
//     const material = new THREE.MeshBasicMaterial( { color: contrast_color } );
//     const cube = new THREE.Mesh( geometry, material );
//     cube.position.set(i, -5, j)
//     scene.add( cube );
//   }
// }

// const controls = new OrbitControls( camera, renderer.domElement );

// camera.position.z = 5;
// function animate() {
//   controls.update();
//   renderer.render( scene, camera );
// }

// renderer.setAnimationLoop( animate );