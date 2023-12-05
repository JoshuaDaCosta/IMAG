alert("oi, aluno ")
    var inicio=document.querySelector("#inicio")
    var iniciobtn=document.getElementById("link-inicio")
    var livros =document.querySelector("#livros")
    var livrosbtn=document.getElementById("link-livros")
    var pesquisa =document.querySelector(".pesquisa")
    var pesquisabtn=document.getElementById("pesquisa")
    var removebtn=document.getElementById("remove")
    var sele=document.querySelector(".sele")
    var link=document.getElementById("es")
    var notificacao=document.querySelector(".notificacao")
    var notificacaonbtn=document.getElementById("notificacao")
    var removenbtn=document.getElementById("removen")

    iniciobtn.addEventListener("click", function(){
        inicio.style.display="flex"
        livros.style.display="none"

    })
    livrosbtn.addEventListener("click", function(){
        inicio.style.display="none"
        livros.style.display="flex"


    })
    pesquisabtn.addEventListener("click", function(){
        pesquisa.style.display="flex"
        sele.style.display="block"
        link.style.color="var(--bg-az)"
        link.style.fontWeight="800"


    })
    removebtn.addEventListener("click", function(){
        pesquisa.style.display="none"
        sele.style.display="none"
        link.style.color="black"
        link.style.fontWeight="100"

    })
    notificacaonbtn.addEventListener("click", function(){
        notificacao.style.display="flex"
        sele.style.display="block"
        link.style.color="var(--bg-az)"
        link.style.fontWeight="800"



    })
    removenbtn.addEventListener("click", function(){
        notificacao.style.display="none"
        sele.style.display="none"
        link.style.color="black"
        link.style.fontWeight="100"


    })
