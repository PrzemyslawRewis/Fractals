var canvas2Dcontext = document.getElementById("kochFlake").getContext("2d");
canvas2Dcontext.translate(100, 100);
function rysujPlatekKocha() {

    for (var i = 0; i < 3; i++) {
        rysujKrzywaKocha(200, document.getElementById("stopienPlatkaKocha").value);
        canvas2Dcontext.translate(200, 0);
        canvas2Dcontext.rotate(120 * Math.PI / 180);  
    }

}

function rysujKrzywaKocha(bok, stopien) {

    canvas2Dcontext.beginPath(); 
    canvas2Dcontext.save(); 
    canvas2Dcontext.moveTo(0, 0); 
    canvas2Dcontext.lineTo(bok, 0); 
    canvas2Dcontext.stroke(); 

    if (stopien > 0) {
        var b = bok / 3;
        rysujKrzywaKocha(b, stopien - 1);
        canvas2Dcontext.translate(b, 0);
        canvas2Dcontext.rotate(-60 * Math.PI / 180);  
        rysujKrzywaKocha(b, stopien - 1);
        canvas2Dcontext.translate(b, 0); 
        canvas2Dcontext.rotate(120 * Math.PI / 180); 
        rysujKrzywaKocha(b, stopien - 1);
        canvas2Dcontext.translate(b, 0);
        canvas2Dcontext.rotate(-60 * Math.PI / 180); 
        rysujKrzywaKocha(b, stopien - 1); 
    }
    canvas2Dcontext.restore(); 
}