/* CRIAR LANÇAMENTOS TABELA */

var tabela = document.getElementById('tabela-lancamento')

function extraiInfoApi() {
    var lancamento = {
        id: id,
        item: item,
        data: data,
        tipo: tipo,
        valor: valor
    }
    return lancamento
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td
}

function montaTr(lancamento) {
    var lancamentoTR = document.createElement("tr");
    pacienteTr.classList.add('lancamento');

    var idTd = montaTd('lancamento.id', "hide");
    idTd.classList.add('id');
    var itemTd = montaTd('lancamento.item', "item");
    var dataTd = montaTd('lancamento.data', "data");
    var tipoTd = montaTd('lancamento.tipo', "tipo");
    var valorTd = montaTd('lancamento.valor', "valor");
    if (tipoTd.value == "saiu") {
        valorTd.classList.add('false')
    } else {
        valorTd.classList.add('true')
    }
    var acoesTd = document.createElement('td');

    lancamentoTR.appendChild(idTd);
    lancamentoTR.appendChild(itemTd);
    lancamentoTR.appendChild(dataTd);
    lancamentoTR.appendChild(tipoTd);
    lancamentoTR.appendChild(valorTd);
    lancamentoTR.appendChild(acoesTd);

    return lancamentoTR
}

function adicionaTabela(id, item, data, tipo, valor) {
    var lancamento = extraiInfoApi();
    var lancamentoTR = montaTr(lancamento);

    tabela.appendChild(lancamentoTR);
}



/* CRIAR TD AÇÕES */
function preencheTdAcoes() {
    var botaoTdAcoes = document.createElement('button');
    var svgTdAcoesEditar = document.createElement('svg');
    var svgTdAcoesExcluir = document.createElement('svg');
    var pathTdAcoesEditar = document.createElement('path');
    var pathTdAcoesExcluirA = document.createElement('path');
    var pathTdAcoesExcluirB = document.createElement('path');

    pathTdAcoesEditar.textContent = 'd="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"';

    pathTdAcoesExcluirA.textContent = 'd="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"'

    pathTdAcoesExcluirB.textContent = 'fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"'

    svgTdAcoesEditar.appendChild('pathTdAcoesEditar');
    svgTdAcoesExcluir.appendChild('pathTdAcoesExcluirA');
    svgTdAcoesExcluir.appendChild('pathTdAcoesExcluirB');

    botaoTdAcoes.appendChild('svgAcoesEditar');

    acoesTd.appendChild('botaoTdAcoes');
    acoesTd.appendChild('svgTdAcoesExcluir');
}




/* EDITAR E EXCLUIR DADOS TABELA */
var lancamentos, index;
var botaoAcoes = document.querySelector('btn')

function alteraTabela(item, data, tipo, valor) {
    lancamentos.rows[index].cells[1].innerHTML = item;
    lancamentos.rows[index].cells[2].innerHTML = data;
    lancamentos.rows[index].cells[3].innerHTML = tipo;
    lancamentos.rows[index].cells[4].innerHTML = valor;
}

function preencheCamposForm() {
    for(var i=0; i < lancamentos.rows.length; i ++) {

        lancamentos.rows[i].botaoAcoes.onclick = function() {
            index = this.rowIndex;
            document.getElementById("description").value = lancamentos.rows[index].cells[1].innerText;
            document.getElementById("date").value = lancamentos.rows[index].cells[2].innerText;
            document.getElementById("status").value = lancamentos.rows[index].cells[3].innerText;
            document.getElementById("amount").value = lancamentos.rows[index].cells[4].innerText;
        }
    }
}
/*
function excluiLancamento() {
    for(var i = 0; i< pessoas.rows.length; i++) {
        if ( index == i) {
            lancamentos.deleteRow(index);
            return 
        }
    }
}
*/

var listaLancamentos = document.querySelectorAll('lancamento');
listaLancamentos.forEach(function(lancamento) {
    lancamento.addEventListener('click',function() {
        console.log('fui clicado');
        this.remove();
        //target.parentNode.remove()
    })
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










/* ----------  OUTRA OPÇÃO --------------- */

/* CRIAR LANÇAMENTOS TABELA (a partir de info cadastrada na página de Honer - Fazer chamada pela API) */
/*
function insereTabela(id, item, data, tipo, valor, acoes) {

    var lancamentos = document.getElementById("tabela");
    var qtdLinhas = lancamentos.rows.length;
    var linha = lancamentos.insert(qtdLinhas);

    var cellId = linha.insertCell(0);
    var cellItem = linha.insertCell(1);
    var cellData = linha.insertCell(2);
    var cellTipo = linha.insertCell(3);
    var cellValor = linha.insertCell(4);
    var cellAcoes = linha.insertCell(5);

    cellId.innerHTML = id;
    cellItem.innerHTML = item;
    cellData.innerHTML = data;
    cellTipo.innerHTML = tipo;
    cellValor.innerHTML = valor;
    cellAcoes.innerHTML = acoes;

    preencheCamposForm()
}

document.querySelector("botao-novo-lancamento").addEventListener('onClick', insereTabela(parametros chamar pela API));
*/


/* CHAMADA DA API (?) */ 



