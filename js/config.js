function verificar() {
    let data = new Date
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERROR] Verifique os dados e tente novamente')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.border = '2px solid rgb(59, 59, 212)'
        img.style.borderRadius = '150px'
        img.style.marginTop = '35px'
        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/bebe_menino.png')
            } else if(idade < 21) {
                img.setAttribute('src', 'img/jovem_homen.png')
            } else if(idade < 50) {
                img.setAttribute('src', 'img/homen.png')
            } else if(idade < 120){
                img.setAttribute('src', 'img/idoso.png')
            } else {
                img.setAttribute('src', 'img/osso.png')
            }
        } else if(fsex[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/bebe_menina.png')
            } else if(idade < 21) {
                img.setAttribute('src', 'img/jovem_mulher.png')
            } else if(idade < 50){
                img.setAttribute('src', 'img/mulher.png')
            } else if(idade < 120){
                img.setAttribute('src', 'img/idosa.png')
            } else {
                img.setAttribute('src', 'img/osso.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} Anos!`
        res.style.textAlign = 'center'
        res.appendChild(img)
    }
}