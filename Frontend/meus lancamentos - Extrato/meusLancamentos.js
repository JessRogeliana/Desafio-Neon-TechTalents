/* Função para criar lançamentos tabela a partir de info cadastrada na página de Honer */

function insereTabela(item, data, tipo, valor, acoes) {

    var lancamentos = document.getElementById("tabela");
    var qtdLinhas = lancamentos.rows.length;
    var linha = lancamentos.insert(qtdLinhas);

    var cellItem = linha.insertCell(0);
    var cellData = linha.insertCell(1);
    var cellTipo = linha.insertCell(2);
    var cellValor = linha.insertCell(3);
    var cellAcoes = linha.insertCell(4);

    cellItem.innerHTML = item;
    cellData.innerHTML = data;
    cellTipo.innerHTML = tipo;
    cellValor.innerHTML = valor;
    cellAcoes.innerHTML = acoes;
}

document.querySelector("botao-novo-lancamento").addEventListener('click', insereTabela);



/* Função para alterar e excluir os dados preenchidos na tabela */
/*
var lancamentos, index;

function alteraTabela(item, data, tipo, valor, acoes) {
    lancamentos.rows[index].cells[0].innerHTML = item;
    lancamentos.rows[index].cells[1].innerHTML = data;
    lancamentos.rows[index].cells[2].innerHTML = tipo;
    lancamentos.rows[index].cells[3].innerHTML = valor;
    lancamentos.rows[index].cells[4].innerHTML = acoes;
}

function preencheCampos() {
    for(var i=0; i < lancamentos.rows.length; i ++) {

        lancamentos.rows[i].onclick = function() {
            index = this.rowIndex;
            document.getElementById("icon-editar").
        }
    }
}
*/


/* ----------  OUTRA OPÇÃO --------------- */


var botaoEditar = document.querySelector("icone-editar");
botaoEditar.addEventListener('click', alteraTabela())

function alteraTabela() {

}
