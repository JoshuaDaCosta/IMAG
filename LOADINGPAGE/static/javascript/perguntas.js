


// entidades
var aluno =document.getElementById('aluno')

// fim entidades
var container=document.getElementById('container')
var icone=document.getElementById('icone')
var items=document.querySelector('div#container >ul')


// parte apenas do aluno
aluno.addEventListener("click", function(){



// parte das classes dos alunos
    container.innerHTML='<h1>Qual é sua classe?</h1>'+'<ul><li><a id="classe10" href="#">10ª classe</a></li><li><a id="classe11" href="#">11ª classe</a></li><li><a id="classe12" href="#">12ª classe</a></li><li><a id="classe13" href="#">13ª classe</a></li></ul>'

    var classe10 =document.getElementById('classe10')
    var classe11 =document.getElementById('classe11')
    var classe12=document.getElementById('classe12')
    var classe13=document.getElementById('classe13')


    classe10.addEventListener("click", function(){
         container.innerHTML='<h1>Qual é sua curso?</h1>'+'<ul><li><a id="infodegest" href="#">Informática de Gestão</a></li><li><a id="contdegest" href="#">Contabilidade de Gestão</a></li><li><a id="admdegest" href="#">Administração Pública de Gestão</a></li><li><a id="findegest" href="#">Finanças de Gestão</a></li><li><a id="grh" href="#">Gestão de Recursos Humanos</a></li></ul>'
         var informatica=document.getElementById('infodegest')
            informatica.addEventListener('click', function(){

                container.innerHTML='<h1>{{user}}Qual é o turno que vai escolher?</h1>'+'<ul><li><a id="manha" href="#">Manhã</a></li></ul>'

            })
    })
    classe11.addEventListener("click", function(){
         container.innerHTML='<h1>Qual é sua curso?</h1>'+'<ul><li><a id="infodegest" href="#">Informática de Gestão</a></li><li><a id="contdegest" href="#">Contabilidade de Gestão</a></li><li><a id="admdegest" href="#">Administração Pública de Gestão</a></li><li><a id="findegest" href="#">Finanças de Gestão</a></li><li><a id="grh" href="#">Gestão de Recursos Humanos</a></li></ul>'
         var informatica=document.getElementById('infodegest')
            informatica.addEventListener('click', function(){

                container.innerHTML='<h1>Qual é o turno que vai escolher?</h1>'+'<ul><li><a id="tarde" href="#">Tarde</a></li></ul>'

            })
    })
    classe12.addEventListener("click", function(){
         container.innerHTML='<h1>Qual é sua curso?</h1>'+'<ul><li><a id="infodegest" href="#">Informática de Gestão</a></li><li><a id="contdegest" href="#">Contabilidade de Gestão</a></li><li><a id="admdegest" href="#">Administração Pública de Gestão</a></li><li><a id="findegest" href="#">Finanças de Gestão</a></li><li><a id="grh" href="#">Gestão de Recursos Humanos</a></li></ul>'
         var informatica=document.getElementById('infodegest')
            informatica.addEventListener('click', function(){

                container.innerHTML='<h1>Qual é o turno que vai escolher?</h1>'+'<ul></li><li><a id="noite" href="#">Noite</a></li></ul>'

            })
    })
    classe13.addEventListener("click", function(){
         container.innerHTML='<h1>Qual é sua curso?</h1>'+'<ul><li><a id="infodegest" href="#">Informática de Gestão</a></li><li><a id="contdegest" href="#">Contabilidade de Gestão</a></li><li><a id="admdegest" href="#">Administração Pública de Gestão</a></li><li><a id="findegest" href="#">Finanças de Gestão</a></li><li><a id="grh" href="#">Gestão de Recursos Humanos</a></li></ul>'
         var informatica=document.getElementById('infodegest')
            informatica.addEventListener('click', function(){

                container.innerHTML='<h1>Qual é o turno que vai escolher?</h1>'+'<ul><li><a id="manha" href="#">Manhã</a></li><li><a id="tarde" href="#">Tarde</a></li><li><a id="noite" href="#">Noite</a></li></ul>'

            })
    })
//fim da parte das classes do alunos



})
//fim da parte do aluno