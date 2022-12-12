const scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 3000);

var renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas') });
renderer.setSize(500, 500);

var swiatlo1 = new THREE.AmbientLight(0xffffff, 0.6); 
scene.add(swiatlo1);
var swiatlo2 = new THREE.PointLight(0xffffff, 0.6); 
scene.add(swiatlo2);


var kostkaMengera = new THREE.Object3D(); 
kostkaMengera.position.set(0, 0, -2000); 
scene.add(kostkaMengera);


rysujKostkeMengera(-100, 0, 0);
requestAnimationFrame(render);


function render() {
    kostkaMengera.rotation.x += 0.01;
    kostkaMengera.rotation.y += 0.03;
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}


function rysujKostkeMengera(wspolrzednaXPoczatkuKostki, wspolrzednaYPoczatkuKostki, wspolrzednaZPoczatkuKostki, szerokoscMalejKostki = 100, stopienRekurencji = 2) {
    if (stopienRekurencji == 0) {
        rysujKostke(0, 0, 0, wspolrzednaXPoczatkuKostki, wspolrzednaYPoczatkuKostki, wspolrzednaZPoczatkuKostki, szerokoscMalejKostki * 3); 
        return;
    }


    for (var i = -1; i <= 1; i++) {
        for (var j = -1; j <= 1; j++) {
            for (var k = -1; k <= 1; k++) {
                var ileZer = 0;
                if (i == 0) ileZer++;
                if (j == 0) ileZer++;
                if (k == 0) ileZer++;

                if (ileZer < 2) {
                    rysujKostkeMengera(
                        (wspolrzednaXPoczatkuKostki + i * szerokoscMalejKostki),
                        (wspolrzednaYPoczatkuKostki + j * szerokoscMalejKostki),
                        (wspolrzednaZPoczatkuKostki + k * szerokoscMalejKostki),
                        (szerokoscMalejKostki / 3),
                        stopienRekurencji - 1
                    );
                }
            }
        }
    }
}


function rysujKostke(i, j, k, x, y, z, szerokosc) {

    var geometry = new THREE.BoxGeometry(szerokosc, szerokosc, szerokosc); 
    var material = new THREE.MeshPhongMaterial({ color: "orange" }); 
    var kostka = new THREE.Mesh(geometry, material); 


    kostka.position.set(
        x + (i * szerokosc),
        y + (j * szerokosc),
        z + (k * szerokosc)
    );

    kostkaMengera.add(kostka); 
}