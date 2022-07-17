
function listarCompras() {
    if (typeof(Storage) !== "undefined") {
        
        let produtos = localStorage.getItem("produtos");
        document.write("<h1>Lista de Compras do Cliente</h1>")
        if (produtos == null)
            document.write("<h3>Sem lista de Compras<h3>");
        else {
           produtos = JSON.parse(produtos);
           produtos.forEach(produto => {
               document.write("<ul>");
               document.write("<li>produto: "+produto.nome_produto+"</li>");
               document.write("<li>quantidade: "+produto.quantidade+"</li>");
               document.write("<li>valor: "+produto.valor+" Reais</li>");
               document.write("</ul>");
       
           });

       }
      
    }
    else alert("seu navegador é antigo!");
}
function cpf_usuario() {
    let u_cpf = localStorage.getItem("cpf_user1");
    
    document.write("<h3>O cpf do cliente é "+u_cpf+"</h3>");
        
}

function btn_fim() {
    document.write("<center><input id='btn_all'  type=button value='finalizar' onclick=localStorage.clear()>")

}

function compras_fim(){
    document.write("<h2>Compras finalizadas</h2>");

}


