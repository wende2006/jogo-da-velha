var jogador = "x";
var contador = 0;
var playerXScore = 0;
var playerOScore = 0;

function jogar(celula){
    if(celula.innerHTML == ""){
        celula.innerHTML = jogador;
        contador++;

        if(verificarVitoria()) {
            if (jogador === 'x') {
                playerXScore++;
                document.getElementById('playerXScore').textContent = playerXScore;
            } else {
                playerOScore++;
                document.getElementById('playerOScore').textContent = playerOScore;
            }
            alert("Jogador " + jogador + " venceu!");
            reiniciar();
        } else if (contador === 9) {
            alert("Empate!");
            reiniciar();
        } else {
            if(jogador == "x"){
                jogador = "o";
            } else {
                jogador = "x";
            }
        }
    }
}

function verificarVitoria() {
    var quadrados = document.getElementsByClassName('quadrado');
    var combinacoesVitoria = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
        [0, 4, 8], [2, 4, 6] // Diagonais
    ];

    for (var i = 0; i < combinacoesVitoria.length; i++) {
        var [a, b, c] = combinacoesVitoria[i];
        if (quadrados[a].innerHTML !== '' &&
            quadrados[a].innerHTML === quadrados[b].innerHTML &&
            quadrados[a].innerHTML === quadrados[c].innerHTML) {
            return true;
        }
    }
    return false;
}

function reiniciar(){
    var quadrados = document.getElementsByClassName('quadrado');
    for (var i = 0; i < quadrados.length; i++) {
        quadrados[i].innerHTML = '';
    }
    jogador = "x";
    contador = 0;
}
