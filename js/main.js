// para fazer comentario na linha, faz //
// para comentar em varias linhas utiliza 

function clicou(){
    document.getElementById("agradecimento").innerHTML="<b>Obrigado por clicar<b>";
    //console.log(document.getElementById("agradecimento"));

    //alert("Obrigado por clicar")
}

function redirecionar(){
    window.open("http://globallabs.academy/");
    window.location.href="http://globallabs.academy/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML="Obrigado por passar o mouse";
    elemento.innerHTML="Obrigado por passar o mouse";
    //alert("Trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML="Passe o mouse aqui";
    elemento.innerHTML="Passe o mouse aqui";
}

function load(){
    alert("Página carregada.");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}


/*
function soma(n1,n2){
    return n1+n2;
}
*/

/*
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome,novo_nome);
}

var validar=0;

function validaIdade(idade){
    if (idade>=18){
        validar=true
    }else{
        validar=false
    }
    return validar;
}

var idade=prompt("Qual sua idade");
validaIdade(idade)
console.log(validar);

alert(soma(5,10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));

*/

/* var d=new Date();
alert(d.getMonth()+1);
*/

/*
var count;
for(count=0; count<=5; count++){
    alert(count);

}
*/

/*
var count=5;
while (count<5){
    console.log(count);
    alert(count);
    count++;
}
*/


/*
var idade=prompt("Qual sua idade?")
if (idade>=18){
    alert("Você é maior de idade");
} else{
    alert("Você é menor de idade");
};
*/

/* var nome="Johnattan"
var idade="28";
var idade2="10";
var frase="Japão é o melhor time do mundo";
//alert(nome+" tem "+idade+" anos");
//alert(idade+idade2);
console.log(nome);
console.log(idade+idade2);
console.log(frase.toLowerCase());
alert(frase.replace("Japão","Brasil"));
 */
/*
 var lista=["maçã","pêra","laranja"];
 console.log(lista[1]);
 */
 //alert(lista[1]);
 //lista.push("uva"); - adiciona elementos
  //lista.pop() - retira elementos
  //console.log(lista);
  //console.log(lista.toString);
  //console.log(lista.join("-"))

  //console.log(lista.length);
  //console.log(lista.reverse());

  //var fruta = {nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}
  //console.log(fruta.nome);
  //alert(frutas[1].nome);