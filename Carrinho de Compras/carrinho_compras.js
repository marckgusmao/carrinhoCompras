let form = document.getElementById("formcarrinho_compras");
let btn = document.getElementById("gerar");
let relatorio = document.getElementById("relatorio")
let totalcompras = document.getElementById("totalCompras")

//vetor que inicia vazio
let nomes = [];
let valores = [];
let quantidades = [];
/*comum de valor unico inicando vazio (númerica)*/
let subtotal = 0
let totalCompras = 0
/*comum de valor unico inicando vazio (caracter)*/
let mostrarRel = ""
let mostrartotalCompras = 0

form.addEventListener("submit", function (event) {
    event.preventDefault();

    nomes.push(form.nome_produto.value);
    valores.push(Number(form.valor_produto.value));
    quantidades.push(Number(form.quantidade_produto.value));

    console.log(nomes);
    console.log(valores);
    console.log(quantidades);
    console.log(totalCompras);

});

btn.addEventListener("click", function (event) {
    event.preventDefault();
    mostrarRel = ""
    mostrartotalCompras = 0

    for (let i = 0; i < nomes.length; i++) {

        subtotal = valores[i] * quantidades[i];
        totalCompras = totalCompras + (valores[i] * quantidades[i]);
        mostrarRel += `<p>Nome do produto: ${nomes[i]} | Valor do produto: ${valores[i]} | Quantidade do produto: ${quantidades[i]} | Valor total produto: ${subtotal} | Valor total Compra: ${totalCompras}  </p>`

    }

    relatorio.innerHTML = "";
    relatorio.innerHTML = mostrarRel;
});