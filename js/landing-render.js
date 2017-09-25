var camera, scene, renderer, controls, gui;
var angle = 0;
var clock = new THREE.Clock();
var time; var startTime = new Date().getTime();

var box;
var shape;

function resize(){
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
}

function init() {
	var container = document.getElementById( 'container' );
	renderer = new THREE.WebGLRenderer({antialias: true});
	renderer.shadowMap.enabled = true;
	renderer.shadowMap.type = THREE.PCSoftShadowMap;
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight);
	renderer.setClearColor(0xededed);
	container.appendChild( renderer.domElement );
	// container.style.position = "absolute";
	// container.style.zIndex = 5000;
	
	// camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
	var width = window.innerWidth, height = window.innerHeight;
	camera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 1, 1000 );
	camera.position.set(0, 0, 1);
	// controls = new THREE.OrbitControls(camera, renderer.domElement);
	// controls.rotateSpeed = 2.0;
	// controls.panSpeed = 0.8;
	// controls.zoomSpeed = 1.5;

	scene = new THREE.Scene();

	var directionalLight = new THREE.DirectionalLight(0xffffff, .7);
	directionalLight.position.set(1, -1, 0).normalize();
	directionalLight.castShadow = true;
	var ambientLight = new THREE.AmbientLight(0xffffff);
	var pointLight = new THREE.PointLight(0xffffff);
	pointLight.position.set(0, 0, 0);

	scene.add(ambientLight);
	scene.add(directionalLight);
	scene.add(pointLight);

	var texture = new THREE.TextureLoader().load('assets/img/render.png');
	texture.wrapT = texture.wrapS = THREE.RepeatWrapping;
	var geom = new THREE.PlaneBufferGeometry(1, 2, 256, 256);
	// var geom = new THREE.SphereBufferGeometry(1, 1, 256, 256);

	shapeMat = new THREE.ShaderMaterial({
		transparent: true,
		// wireframe: true,
		uniforms : {
			"time" : { type: "f", value : 0.0 },
			"texture" : { type : "t", value : texture},
			"speed" : { type : "f", value : 1.},
		},
		side : THREE.DoubleSide,
		depthTest: false,
		vertexShader : document.getElementById('vertexShader').textContent,
		fragmentShader : document.getElementById('fragmentShader').textContent
	});

	shape = new THREE.Mesh(geom, shapeMat);
	var s = 1000;
	shape.scale.set(s, s, s);
	shape.rotation.x = Math.PI/2.5;
	shape.position.set(100, 500, 0);
	scene.add(shape);

	camera.position.set(2.64, -2.77, -.14);

	window.addEventListener('resize', resize);
}

function update(){
	time = new Date().getTime() - startTime;
	shapeMat.uniforms['time'].value += .00025;
	camera.lookAt(scene.position);
	// controls.update();
}

function animate(){
	update();
	renderer.render(scene, camera);
	window.requestAnimationFrame(animate);
}

init();
animate();