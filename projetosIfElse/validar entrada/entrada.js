const bandas = [
    {
        nome: "Proverbio x",
        musicos: ["Eddie Blue", "Isaias", "Dj Regis"]
    },
    {
        nome: "Metal Nobre",
        musicos: ["JT", "Adriel", "Pedro"]
    },
    {
        nome: "Fruto Sagrado",
        musicos: ["Paulo", "Pedro", "Tiago"]
    }
];

function validarEntrada() {
    const nomeMusico = document.getElementById("nomeMusico").value;
    const nomeBanda = document.getElementById("nomeBanda").value;

    let autorizado = false;
    bandas.forEach(banda => {
        if (banda.nome === nomeBanda) {
            if (banda.musicos.includes(nomeMusico)) {
                autorizado = true;
            }
        }
    });

    const resultado = document.getElementById("resultado");
    resultado.textContent = autorizado ? "Acesso Autorizado!" : "Acesso Negado!";
    
    document.getElementById("nomeMusico").value = "";
    document.getElementById("nomeBanda").value = "";
    
}