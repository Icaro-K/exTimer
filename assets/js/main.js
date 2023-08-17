function relogio() {
    const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let start;
let contador = 0;
let pausa = 0;

function timer(contador){
    const tempo = new Date(contador * 1000);
    return tempo.toLocaleTimeString('pt-BR', {
        hour12: false, timeZone: 'UTC'
    });
}

function startChrono() {
    start = setInterval(function(){
    contador++;
    relogio.textContent = timer(contador);
    }, 1000);
}


iniciar.addEventListener('click', function(event) {
    if (pausa = 0) {
        startChrono();
    } else {
        startChrono(pausa)
    }
    relogio.style.color = 'black';
    iniciar.disabled = true;
    pausar.disabled = false;
    zerar.disabled = false;
});

pausar.addEventListener('click', function(event) {
    clearInterval(start);
    pausa = contador;
    relogio.style.color = 'red';
    iniciar.disabled = false;
});

zerar.addEventListener('click', function(event){
    clearInterval(start);
    contador = 0;
    pausa = 0;
    relogio.textContent = '00:00:00';
    relogio.style.color = 'black';
    pausar.disabled = true;
    zerar.disabled = true;
});
}
relogio();

