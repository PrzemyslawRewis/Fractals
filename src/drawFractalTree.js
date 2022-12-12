var canvas = document.getElementById("fractalTree");
var canvas2Dcontext = canvas.getContext('2d');


function rysuj(dlugoscGalezi, katObrotu = 0, wspolrzednaXPoczatkuGalezi = 400, wspolrzednaYPoczatkuGalezi = 600) {

    var kat = document.getElementById("inputangle").value 
    canvas2Dcontext.beginPath();
    canvas2Dcontext.save(); 
    canvas2Dcontext.translate(wspolrzednaXPoczatkuGalezi, wspolrzednaYPoczatkuGalezi);
    canvas2Dcontext.rotate(katObrotu * Math.PI / 180);  
    canvas2Dcontext.moveTo(0, 0); 
    canvas2Dcontext.lineTo(0, -dlugoscGalezi); 
    canvas2Dcontext.stroke();

    if (dlugoscGalezi < 10) {
        canvas2Dcontext.restore(); 
        return; 
    }
    rysuj(dlugoscGalezi * 0.8, -kat, 0, -dlugoscGalezi); 
    rysuj(dlugoscGalezi * 0.8, +kat, 0, -dlugoscGalezi); 
    canvas2Dcontext.restore(); 
}

function rysujDrzewo() {
    canvas2Dcontext.clearRect(0, 0, canvas.width, canvas.height); 
    if (document.getElementById("inputangle").value > 0 && document.getElementById("inputangle").value < 51) { 
        if (document.getElementById("inputbranch").value > 0 && document.getElementById("inputbranch").value < 121)
            rysuj(document.getElementById("inputbranch").value);
        else
            alert("Proszę wybrać długości gałezi z zakresu [1,120]");

    }
    else
        alert("Proszę wybrać wartość kąta z zakresu [1,50]");

}


