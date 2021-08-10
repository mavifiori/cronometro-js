window.onload= function(){
    var segundos = 00;
    var minutos =00;
    var addSegundos = document.getElementById("segundos");
    var addMinutos = document.getElementById("minutos");
    var boStart = document.getElementById("button-start");
    var boStop = document.getElementById("button-stop");
    var boReset = document.getElementById("button-reset");
    var Interval;
    boStart.onclick= function(){
        clearInterval(Interval);
        Interval= setInteral(iniciarTempo,10);
    }
    boStop.onclick= function(){
        clearInterval(Interval);
    }
    boReset.onclick= function(){
        clearInterval(Interval);
        segundos ="00";
        minutos = "00";
        addMinutos.innerHTM = minutos;
        addSegundos.innerHTM = segundos;
    }

    function iniciarTempo(){
        minutos ++;
        if (minutos<=9){
            addMinutos.innerHTML ="0" + minutos;
        }
        if (minutos>9){
            addMinutos.innerHTML = minutos;
        }
        if (minutos>99){
            console.log("segundos");
            segundos ++;
            addSegundos.innerHTML ="0"+ segundos;
            minutos = 0;
            addMinutos.innerHTML = "0" + 0;

        }
        if (segundos > 9 ){
            addSegundos.innerHTML = segundos;
        }
    }
}