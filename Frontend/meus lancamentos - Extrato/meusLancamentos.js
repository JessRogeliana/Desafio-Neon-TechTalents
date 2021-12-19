const listaExtrato = [{        
    id: 1,
    item: 'Água',
    data: '2021-10-11',
    tipo: 'entrou',
    valor: 20.00
}, {        
    id: 2,
    item: 'luz',
    data: '2021-05-09',
    tipo: 'saiu',
    valor: 100.00
} ]  

window.addEventListener('DOMContentLoaded', () =>  {

    /* chamada api */

    let trList = '';
    for (let i = 0; i < listaExtrato.length; i++) {
        var linhaExtrato = listaExtrato[i]
        trList += 
        `
        <tr id="lancamento" class="lancamento">

            <td class="hide" class="id">${linhaExtrato.id}</td>
            <td class="item" scope="row">${linhaExtrato.item}</td>
            <td class="data">${linhaExtrato.data}</td>
            <td class="tipo">${linhaExtrato.tipo}</td>
            <td class="valor false">R$ ${linhaExtrato.valor}</td>
            <td class="acoes">
                <button type="button" class="btn editingTRbutton" data-bs-toggle="modal" data-target="#editModal" data-bs-target="#exampleModal" onclick="abrirModal(${i})"> 
                    <svg class="icon-editar" xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>                                
                    </svg>
                </button>
                <svg class="icon-excluir" value="Delete" onclick="deleteRow(this)" xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
            </td>
        </tr>
    `
    }
    document.getElementById('tabelaLancamento').innerHTML = trList;
    
})

function abrirModal(index) {
    alteraCamposModal(listaExtrato[index]);
}

/* Pega valor da tabela e insere no form/modal */
function alteraCamposModal(linhaExtrato) {
    document.getElementById('item').value = linhaExtrato.item
    document.getElementById('data').value = linhaExtrato.data
    document.getElementById('tipo').value = linhaExtrato.tipo
    document.getElementById('valor').value = linhaExtrato.valor
}

/*event -> salvar -> trocar dados para tabela -> usar elementos por id */

/* Pega valor inserido/atual do form/modal */
function submeterFormulario() {
    const item = document.getElementById('item').value 
    const data = document.getElementById('data').value
    const tipo = document.getElementById('tipo').value
    const valor = document.getElementById('valor').value

    listaExtrato[index][1] = item.value;
    listaExtrato[index][2] = data.value;
    listaExtrato[index][3] = tipo.value;
    listaExtrato[index][4] = valor.value; 
}


/* Substituir valor tabela pelo inserido no form */
/*
function alteraCamposModal(linhaExtrato) {
    document.getElementById('submeterFormulario').addEventListener('click', function () {

    })
}
alteraCamposModal(listaExtrato[index]);

*/




/*  EXCLUIR DADOS TABELA */
$(document).on("click", ".icon-excluir", function () {
    var botaoExcluir = $(this).index('.icon-excluir') + 1;
    console.log("after deletion");
    console.log(botaoExcluir);
      
    document.getElementById("tabela").deleteRow(botaoExcluir);      
});




/* FILTRO */ 
var filtroDataInicial = document.getElementById('data-inicio').value;
var filtroDataFinal = document.getElementById('data-final').value;
var listaDatas = document.querySelectorAll('data');

function filtroData() {
    let datasFiltradas = listaDatas.filter(result => {
        var retorno = result.data >= filtroDataInicial && result.data <= filtroDataFinal;
    })   
    console.log(datasFiltradas)

    for(var i= 0; i < listaDatas.length; i++) {
        if (    listaDatas[i].value.filter(item => !retorno.includes(item))    ) {
            listaDatas[i].patentNode.classList.add('hide')
        } else {
            listaDatas[i].patentNode.classList.remove('hide')
        }
    }
}
/* includes/some */
/* falta descobrir como mostrar apenas os elementos filtrados na tela. Preciso inserir valores para testar */




/* CONVERTE DATA USA EM BR */
function converteDataBr(dataAmericana) {
    return dataAmericana.split('-').reverse().join('-');
}




/* SALDO CONTA */
var listaValores = document.querySelectorAll('valor')
var saldo = document.querySelector('saldo-principal')

function somaCamposValor() {
    var soma = 0
    for (let i = 0; i < listaValores.length; i++) {
        soma += listaValores[i].value
    }
    saldo.value += soma
}




/* CHAMADAS */



