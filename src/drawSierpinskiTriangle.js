var canvas2Dcontext = document.getElementById("sierpinskiCanvas").getContext("2d");
var szerokoscCanvasa = 500;
var wysokoscCanvasa = 600;
var dlugoscBokuTrojkataStopniaZero = 500;

function sierpinski(Ax, Ay, Bx, By, Cx, Cy, stopienRekurencji) {
    if (stopienRekurencji > 0) {
        var wspolrzednaXSrodkaBokuBC = (Bx + Cx) / 2;
        var wspolrzednaYSrodkaBokuBC = (By + Cy) / 2;

        var wspolrzednaXSrodkaBokuAC = (Ax + Cx) / 2;
        var wspolrzednaYSrodkaBokuAC = (Ay + Cy) / 2;

        var wspolrzednaXSrodkaBokuAB = (Ax + Bx) / 2;
        var wspolrzednaYSrodkaBokuAB = (Ay + By) / 2;

        var nowyStopienRekurencji = stopienRekurencji - 1;
        sierpinski(Ax, Ay, wspolrzednaXSrodkaBokuAB, wspolrzednaYSrodkaBokuAB, wspolrzednaXSrodkaBokuAC, wspolrzednaYSrodkaBokuAC, nowyStopienRekurencji, canvas2Dcontext);
        sierpinski(wspolrzednaXSrodkaBokuAB, wspolrzednaYSrodkaBokuAB, Bx, By, wspolrzednaXSrodkaBokuBC, wspolrzednaYSrodkaBokuBC, nowyStopienRekurencji, canvas2Dcontext);
        sierpinski(wspolrzednaXSrodkaBokuAC, wspolrzednaYSrodkaBokuAC, wspolrzednaXSrodkaBokuBC, wspolrzednaYSrodkaBokuBC, Cx, Cy, nowyStopienRekurencji, canvas2Dcontext);
    }
    else {
        canvas2Dcontext.moveTo(Ax, Ay);
        canvas2Dcontext.lineTo(Bx, By);
        canvas2Dcontext.lineTo(Cx, Cy);
        canvas2Dcontext.lineTo(Ax, Ay);
    }
}


function rysujTrojkatSierpinskiego() {
    var wspolrzednaXSrodkaCanvasa = szerokoscCanvasa / 2;
    var wspolrzednaYSrodkaCanvasa = wysokoscCanvasa / 2;
    var glebokoscRekurencji = document.getElementById("stopien").value;

    var promienKolaWpisanegoWTrojkat = (dlugoscBokuTrojkataStopniaZero / 6) * Math.sqrt(3);
    var promienKataOpisnagoNaTrojkacie = (dlugoscBokuTrojkataStopniaZero / 3) * Math.sqrt(3); 

    var wspolrzednaXPunktuA = wspolrzednaXSrodkaCanvasa - (dlugoscBokuTrojkataStopniaZero / 2);
    var wspolrzednaYPunktuA = wspolrzednaYSrodkaCanvasa + promienKolaWpisanegoWTrojkat; 

    var wspolrzednaXPunktuB = wspolrzednaXSrodkaCanvasa + (dlugoscBokuTrojkataStopniaZero / 2);
    var wspolrzednaYPunktuB = wspolrzednaYSrodkaCanvasa + promienKolaWpisanegoWTrojkat;

    var wspolrzednaXPunktuC = wspolrzednaXSrodkaCanvasa;
    var wspolrzednaYPunktuC = wspolrzednaYSrodkaCanvasa - promienKataOpisnagoNaTrojkacie;

    sierpinski(wspolrzednaXPunktuA, wspolrzednaYPunktuA, wspolrzednaXPunktuB, wspolrzednaYPunktuB, wspolrzednaXPunktuC, wspolrzednaYPunktuC, glebokoscRekurencji);
    canvas2Dcontext.fillStyle = 'orange';
    canvas2Dcontext.fill(); 
    canvas2Dcontext.strokeStyle = 'black';
    canvas2Dcontext.lineWidth = 2; 
    canvas2Dcontext.stroke();
}

