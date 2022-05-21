function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 13
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'img/manhã.png'
        document.body.style.background = '#5690aa'
    } else if (hora >= 12 && hora <= 18) {
        //boa tarde
        img.src = 'img/tarde.png'
        document.body.style.background = '#918779'
    } else {
        //boa noite
        img.src = 'img/noite.png'
        document.body.style.background = '#e78d33'
    }
}