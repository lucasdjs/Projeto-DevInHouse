//gera guid
const guid = Math.random().toString(36).substr(2, 9);

//carrega no storage
function carregar(){
    const valor = JSON.parse(localStorage.getItem(produto));
    
}

function adicionar(){
            //pega produto no input produto
                const produto = String(document.getElementsByName('produto')[0].value);
             //salva no storage
                localStorage.setItem(guid, JSON.stringify(produto))
             
                    //alerta se nao tiver nada escrito na inserção de produto
                     if(produto === ''){
                    alert("Insira o produto");
                      }
                 else{      

                                 //Lista produtos no elemento containerProdutos
                                let containerProdutos = document.getElementById('containerProdutos');
                                //cria div
                                let divProduto = document.createElement('div')
                                //cria o checkbox
                                let novoCheckBox = document.createElement('input');
                                novoCheckBox.type = 'checkbox';
                                novoCheckBox.className = 'pega';
                                novoCheckBox.onclick = function(){
                                    abrir();

                                };                            
    
                                //cria a label para produto
                                let nomeProduto = document.createElement('label');
                                nomeProduto.innerHTML = produto;
                                nomeProduto.id = 'label'
                        
                             //removendo produto
                                let deletar = document.createElement('button');
                                deletar.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
                                deletar.className = 'btn btn-danger button_delete'
                                deletar.onclick = function(){
                                divProduto.parentNode.removeChild(divProduto)
                              
                            }
                                       
            //quebra linha
                    let br = document.createElement('br');

                    divProduto.appendChild(novoCheckBox);
                    divProduto.appendChild(nomeProduto);
                    divProduto.appendChild(deletar);
                    divProduto.appendChild(br);
    
                    containerProdutos.appendChild(divProduto)
                 
            //apagar oque ta escrito e insere o foco novamente
            document.getElementsByName('produto')[0].value = '';
                document.getElementsByName('produto')[0].focus();
            }
            
    
    }
    
//abre a popup

function abrir(){
document.getElementsByClassName('popup')[0].style.display = "block";
}
   //risca o texto
    function riscar(){

    document.getElementById('label').style.textDecoration = "line-through";
   
    }

    

function inserirValor(){
riscar();

    let valor =  document.getElementById('popup-text');
    const value = valor.value;
   const mostrarTotal = document.getElementById('mostrarTotal') ;
   const mostrarH1 = document.getElementById('insereValor')
   mostrarH1.innerHTML = ("Inserir produto") ;
    mostrarTotal.innerHTML = (' R$' + value);
    document.getElementsByClassName('popup')[0].style.display = "none";
    localStorage.setItem(guid, value);
}















