const relogio = document.getElementById('relogio');
const data = document.getElementById('data');

function formatarValor(valor) {
    return valor < 10 ? '0' + valor : valor;
}

function atualizarTimer() {
    const objDate = new Date();

    const hora = formatarValor(objDate.getHours());
    const min = formatarValor(objDate.getMinutes());
    const seg = formatarValor(objDate.getSeconds());
    
    relogio.innerHTML = `${hora}:${min}:${seg}`;

    const dia = formatarValor(objDate.getDate());
    const mes = formatarValor(objDate.getMonth() + 1);
    const ano = formatarValor(objDate.getFullYear());

    data.innerHTML = `${dia}/${mes}/${ano}`;
}

setInterval (atualizarTimer, 1000);

atualizarTimer();