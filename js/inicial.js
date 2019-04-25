start()

function start(){
    validateButtons()
}

function validateButtons(){
    var span = document.getElementById('span')
    var btnIniciar = document.getElementById('btnIniciar')
    var btnMenu = document.getElementById('btnMenu')
    var namePlayer = document.getElementById('namePlayer')
    
    btnIniciar.onclick = function(){
        if(namePlayer.value.trim() != ''){
            var name = namePlayer.value
            window.location = "jokempo.html?variavel="+name
        }else{
            span.className = span.className.replace('none', '').trim()
        }
    }

    btnMenu.onclick = function(){
        window.location = "index.html"
    }
}