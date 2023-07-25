function media(){
    var form = document.getElementById("form")
    var NOME = form.Nome.value;
    var PROVA1 = form.Prova1.value;
    var PROVA2 = form.Prova2.value;
    var TRABALHO = form.Trabalho.value;
      var media = (eval(PROVA2)+eval(PROVA1)+eval(TRABALHO))/3;
    
      form.Media.value = media;

    if(media>=6)
    alert
    (NOME  + "voce foi aprovado com media de " + media);
    else
    alert
    (NOME + "voce foi aprovado com media de " + media);
}
function limpar(){
    var form= document.getElementById("form")
    form.Nome.value="";
    form.Prova1.value
    form.Prova2.value
    form.TRABALHO.value
    form.Media.value
    }