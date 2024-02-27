/*Crea un contatore che tenga conto del tempo che passa, utilizzando sessionStorage.
  Aggiornando la pagina il valore prosegue, chiudendo la pagina - ovviamente - ricomincia.
 Il valore del contatore deve aggiornarsi ad ogni secondo.  */


document.addEventListener("DOMContentLoaded", function () {
    let currentTime;

    if (sessionStorage.getItem("current_time")) {
     currentTime = parseInt(sessionStorage.getItem("current_time"));
    } else {
     currentTime = 0;
    }
  
    
    const refreshTimer= function () {
      currentTime++;
      sessionStorage.setItem("current_time", currentTime);
      document.getElementById("contatore").innerText = currentTime;
    };
  
    setInterval(refreshTimer, 1000);
  
    document.getElementById("contatore").innerText = currentTime.toString;
  });

  let start = sessionStorage.getItem("startTime");
  if (!start) {
  start = Date.now();
  sessionStorage.setItem("startTime", start);
}

var tempoPassato = Math.floor((Date.now() - inizio) / 1000);
document.getElementById("contatore").textContent = tempoPassato + " secondi";

setInterval(function () {
  sessionStorage.setItem("tempo Passato", tempoPassato);
  tempoPassato = Math.floor((Date.now() - inizio) / 1000);
  document.getElementById("contatore").textContent = tempoPassato + " secondi";
}, 1000);


