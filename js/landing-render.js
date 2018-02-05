var camera, scene, renderer, gui, composer;
var models = ['apple', 'starfruit'];

var geomData = [], matData = [], group;

var mouse = new THREE.Vector2();

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
    renderer.setClearColor(0xbfe7ff);
    container.appendChild( renderer.domElement );
    
    camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 1, 1000 );
    camera.position.set(0, 0, 75);
    // controls = new THREE.OrbitControls(camera, renderer.domElement);
    // controls.rotateSpeed = 2.0;
    // controls.panSpeed = 0.8;
    // controls.zoomSpeed = 1.5;

    scene = new THREE.Scene();

    var hemisphereLight = new THREE.HemisphereLight(0xfceafc, 0x000000, .8)

    var shadowLight = new THREE.DirectionalLight(0xffffff, .5);

    shadowLight.position.set(150, 75, 150);

    var shadowLight2 = shadowLight.clone();
    shadowLight2.castShadow = false;
    shadowLight2.intensity = .2;
    shadowLight2.position.set(-150, 75, -150);

    var shadowLight3 = shadowLight.clone();
    shadowLight3.castShadow = false;
    shadowLight3.intensity = .1;
    shadowLight3.position.set(0, 125, 0);

    scene.add(hemisphereLight);
    scene.add(shadowLight);
    scene.add(shadowLight2);
    scene.add(shadowLight3);

    geomData.push(new THREE.SphereGeometry(1, 64, 64));
    geomData.push(new THREE.BoxGeometry(1, 1, 1,));
    geomData.push(new THREE.ConeGeometry(1, 1, 32));
    geomData.push(new THREE.TetrahedronGeometry(1));
    geomData.push(new THREE.TorusKnotGeometry(1, .4, 64, 64));

    // matData.push(new THREE.MeshStandardMaterial({
    //     color: 0xd9486b,
    //     emissive: 0x790f15,
    //     roughness: .14,
    //     flatShading: false,
    //     metalness: .3
    // }));

    // matData.push(new THREE.MeshStandardMaterial({
    //     color: 0xb3f28b,
    //     emissive: 0x68841f,
    //     metalness: .5,
    //     flatShading: false,
    //     roughness: .06
    // }));

    matData.push(new THREE.MeshStandardMaterial({
        color: 0xfcfa37,
        emissive: 0xbd4215,
        metalness: .5,
        flatShading: false,
        roughness: .06
    }));

    matData.push(new THREE.MeshStandardMaterial({
        color: 0x5c70fb,
        emissive: 0x1235ae,
        roughness: 0,
        flatShading: false,
        metalness: 0
    }));

    matData.push(new THREE.MeshStandardMaterial({
        color: 0xbe9a47,
        emissive: 0x676925,
        roughness: .16,
        flatShading: false,
        metalness: 0
    }));

    matData.push(new THREE.MeshStandardMaterial({
        color: 0xb3f28b,
        emissive: 0x68841f,
        metalness: .5,
        flatShading: false,
        roughness: .06
    }));

    var numShapes = 10;
    group = new THREE.Group();

    for(var i=0; i<numShapes; i++){

        var geom = geomData[Math.floor(Math.random()*geomData.length)];
        var mat = matData[Math.floor(Math.random()*matData.length)]
        var mesh = new THREE.Mesh( geom, mat );
        var s = 4+Math.random()*10;
        mesh.scale.set(s, s, s);

        mesh.position.set( Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5 ).normalize();
        mesh.position.multiplyScalar( Math.random() * 200 );
        mesh.rotation.set( Math.random() * 2, Math.random() * 2, Math.random() * 2 );
        group.add( mesh );

    }

    scene.add(group);

    window.addEventListener( 'resize', resize );

}


function update(){
    group.rotation.y+=.0015;
    group.rotation.z+=.001;
}

function animate(){
    update();
    // composer.render();
    renderer.render(scene, camera);
    window.requestAnimationFrame(animate);
}

THREE.DefaultLoadingManager.onLoad = function ( ) {

    // document.getElementById('loading').style.display = 'none';
    init();
    animate();

};

var loader = new THREE.JSONLoader();

for(var i=0; i<models.length; i++){
    var path = 'assets/' + models[i] + '.json';

    loader.load(

        path, 

        function(geom, mat){
            geomData.push(geom);
        }

    )
}
