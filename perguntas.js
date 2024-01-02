
//DIRECTOR
function clickDir(){
     document.getElementById("inicioDeEscolhas").style.display="none";
     document.getElementById("dadosPessoaisDir").style.display="block";
}
dir.addEventListener("click", clickDir)

/*
aqui, o joshua cria a relação com a base de dados do Firebase, de pois de criar a validação do director, poderá aparecer a próxima tela(menu) que será criada:
*/































// ALUNO

//quando o aluno clica
function clickAlu(){
     document.getElementById("inicioDeEscolhas").style.display="none";
     document.getElementById("OpcaoAlu").style.display="block";
}
alu.addEventListener("click", clickAlu)


//quando é clicado na opção cursos
function clickCursos(){
     document.getElementById("OpcaoAlu2").style.display="none";
     document.getElementById("OpcaoAluInfo").style.display="block";  
}
info.addEventListener("click", clickCursos)
adm.addEventListener("click", clickCursos)
fin.addEventListener("click", clickCursos)
GRH.addEventListener("click", clickCursos)
cont.addEventListener("click", clickCursos)

//quando é clicado na opção classes
function clickClass(){
     document.getElementById("OpcaoAluInfo2").style.display="none";
     document.getElementById("OpcaoAluInfoClass").style.display="block";  
}
dezClass.addEventListener("click", clickClass)
onzeClass.addEventListener("click", clickClass)
dozeClass.addEventListener("click", clickClass)
trezeClass.addEventListener("click", clickClass)


//quando é clicado na opção turno
function clickCTurn(){
     document.getElementById("OpcaoAluInfoClass2").style.display="none";
     document.getElementById("OpcaoAluInfoClassTurn").style.display="block";  
}
manha.addEventListener("click", clickCTurn)
tarde.addEventListener("click", clickCTurn)
noite.addEventListener("click", clickCTurn)

//quando é clicado na opção sala
function clickSala(){
     document.getElementById("OpcaoAluInfoClassTurn2").style.display="none";
     document.getElementById("dadosPessoaisAlu").style.display="block";  
}
salaDez.addEventListener("click", clickSala)
salaOnze.addEventListener("click", clickSala)
salaDoze.addEventListener("click", clickSala)


// PROFESSOR
function clickProf(){
     document.getElementById("inicioDeEscolhas").style.display="none";
     document.getElementById("OpcaoProf").style.display="block";
}
     prof.addEventListener("click", clickProf)

function clickProfCursos(){
     document.getElementById("OpcaoProf2").style.display="none";
     document.getElementById("OpcaoProfInfo").style.display="block";
}
     InfoCurso.addEventListener("click", clickProfCursos)


function clickProfCursosClass10(){
     document.getElementById("OpcaoProfInfo2").style.display="none";
     document.getElementById("OpcaoProfInfoDisc10").style.display="block";
}
     decProf.addEventListener("click", clickProfCursosClass10)

function clickProfCursosClass11(){
     document.getElementById("OpcaoProfInfo3").style.display="none";
     document.getElementById("OpcaoProfInfoDisc11").style.display="block";
}
     decPriProf.addEventListener("click", clickProfCursosClass11)

function clickProfCursosClass12(){
     document.getElementById("OpcaoProfInfo4").style.display="none";
     document.getElementById("OpcaoProfInfoDisc12").style.display="block";
}
     decSegProf.addEventListener("click", clickProfCursosClass12)

function clickProfCursosClass13(){
     document.getElementById("OpcaoProfInfo5").style.display="none";
     document.getElementById("OpcaoProfInfoDisc13").style.display="block";
}
     decTerProf.addEventListener("click", clickProfCursosClass13)


