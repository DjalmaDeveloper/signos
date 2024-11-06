var diatxt = document.querySelector('input#diatxt')
var mestxt = document.querySelector('input#mestxt')
var res = document.querySelector('div#res')


function buscar(){
    if (diatxt.value.length == 0 || mestxt.value.length == 0){
        window.alert('Digite o dia e o mês por favor. Ambos os campos devem ser preenchidos')
    }
    else{
        var dia = Number.parseInt(diatxt.value)
        var mes = Number.parseInt(mestxt.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'signo')
        
        if (((dia >= 21 && dia <= 31) && mes == 3) || ((dia >= 1 && dia <= 19) && mes == 4)){
            res.innerHTML = `<p>Seu signo é Áries</p>`
            img.setAttribute('src', 'images/1-aries.png')
        }
        else if (((dia >= 20 && dia <= 30) && mes == 4) || ((dia >= 1 && dia <= 20) && mes == 5)){
            res.innerHTML = `<p>Seu signo é Touro</p>`
            img.setAttribute('src', 'images/2-touro.png')
        }
        else if (((dia >= 21 && dia <= 31) && mes == 5) || ((dia >= 1 && dia <= 20) && mes == 6)){
            res.innerHTML = `<p>Seu signo é Gêmeos</p>`
            img.setAttribute('src', 'images/3-gemeos.png')
        }
        else if (((dia >= 21 && dia <= 30) && mes == 6) || ((dia >= 1 && dia <= 22) && mes == 7)){
            res.innerHTML = `<p>Seu signo é Câncer</p>`
            img.setAttribute('src', 'images/4-cancer.png')
        }
        else if (((dia >= 23 && dia <= 31) && mes == 7) || ((dia >= 1 && dia <= 22) && mes == 8)){
            res.innerHTML = `<p>Seu signo é Leão</p>`
            img.setAttribute('src', 'images/5-leao.png')
        }
        else if (((dia >= 23 && dia <= 31) && mes == 8) || ((dia >= 1 && dia <= 22) && mes == 9)){
            res.innerHTML = `<p>Seu signo é Virgem</p>`
            img.setAttribute('src', 'images/6-virgem.png')
        }
        else if (((dia >= 23 && dia <= 30) && mes == 9) || ((dia >= 1 && dia <= 22) && mes == 10)){
            res.innerHTML = `<p>Seu signo é Libra</p>`
            img.setAttribute('src', 'images/7-libra.png')
        }
        else if (((dia >= 23 && dia <= 31) && mes == 10) || ((dia >= 1 && dia <= 21) && mes == 11)){
            res.innerHTML = `<p>Seu signo é Escorpião</p>`
            img.setAttribute('src', 'images/8-escorpiao.png')
        }
        else if (((dia >= 22 && dia <= 30) && mes == 11) || ((dia >= 1 && dia <= 21) && mes == 12)){
            res.innerHTML = `<p>Seu signo é Sagitário</p>`
            img.setAttribute('src', 'images/9-sagitario.png')
        }
        else if (((dia >= 22 && dia <= 31) && mes == 12) || ((dia >= 1 && dia <= 19) && mes == 1)){
            res.innerHTML = `<p>Seu signo é Capricórnio</p`
            img.setAttribute('src', 'images/10-capricornio.png')
        }
        else if (((dia >= 20 && dia <= 31) && mes == 1) || ((dia >= 1 && dia <= 18) && mes == 2)){
            res.innerHTML = `<p>Seu signo é Aquário</p>`
            img.setAttribute('src', 'images/11-aquario.png')
        }
        else if (((dia >= 19 && dia <= 29) && mes == 2) || ((dia >= 1 && dia <= 20) && mes == 3)){
            res.innerHTML = `<p>Seu signo é Peixes</p>`
            img.setAttribute('src', 'images/12-peixes.png')
        }
        else{
            res.innerHTML = `<p>Data Inválida! Insira um Valor Válido!</p>`
            //img.setAttribute('src', 'images/12-peixes.png')
        }
    
    }
    
    /*
    Áries 21/03-19/04
    Touro 20/04-20/05
    Gêmeos 21/05-20/06
    Câncer 21/06-22/07
    Leão 23/07-22/08
    Virgem 23/08-22/09
    Libra 23/09-22/10
    Escorpião 23/10-21/11
    Sagitário 22/11-21/12
    Capricórnio 22/12-19/01
    Aquário 20/01-18/02
    Peixes 19/02-20/03
    */
   res.appendChild(img)
   res.style.textAlign = 'center'
   img.style.margin = 'auto'
}
