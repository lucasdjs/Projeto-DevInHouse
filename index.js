function adicionar(){
//pega produto no input produto
    let produto = String(document.getElementsByName('produto')[0].value);

//Lista produtos no elemento containerProdutos
let mostrar = document.getElementById('containerProdutos');

//cria div
let divProduto = document.createElement('div')
//cria o checkbox
let novoCheckBox = document.createElement('input');
novoCheckBox.type = 'checkbox';
//cria a label para produto
let nomeProduto = document.createElement('label');
nomeProduto.innerHTML = produto;
//quebra linha
let br = document.createElement('br');

divProduto.appendChild(novoCheckBox);
divProduto.appendChild(nomeProduto);
divProduto.appendChild(br);

mostrar.appendChild(divProduto)

//apagar oque ta escrito e insere o foco novamente
document.getElementsByName('produto')[0].value = '';
    document.getElementsByName('produto')[0].focus();
    }








