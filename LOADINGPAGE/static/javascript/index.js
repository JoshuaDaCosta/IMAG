function loading(){
    document.getElementById("content").style.display='block';
    document.getElementById("preload").style.display='none';
}


    document.querySelector("header > section>:nth-child(1)").addEventListener('click', function(){
       document.querySelector("header > section>:nth-child(2)").style.display="flex"

    })
    document.querySelector("header > section>:nth-child(2) label").addEventListener('click', function(){
       document.querySelector("header > section>:nth-child(2)").style.display="none"

    })

//window.location.href = link;