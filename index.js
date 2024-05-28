

function lerVotos() {
    let voto;
    do {
        voto = parseInt(prompt("1- WindowsServer,2- Unix,3- Linux,4- Netware,5- Mac OS,6- Outro ou 0- para sair"));
        if (voto >= 1 && voto <= 6) {
            votos[voto - 1]++; 
        } else if (voto !== 0) {
            alert("Opção inválida! Digite um número entre 1 e 6.");
        }
    } while (voto !== 0);
}

function calcularPorcentagem() {
    const totalVotos = votos.reduce((acc, curr) => acc + curr, 0);
    const porcentagens = votos.map(voto => (voto / totalVotos) * 100);
    return porcentagens;
}


function exibirResultados() {
    const opcoes = ["Windows Server", "Unix", "Linux", "Netware", "Mac OS", "Outro"];
    const porcentagens = calcularPorcentagem();
    for (let i = 0; i < opcoes.length; i++) {
        console.log(`${opcoes[i]}: ${porcentagens[i].toFixed(2)}%`);
    }
}


lerVotos();
exibirResultados();




