function verificar() {
    var data= new Date()
    var ano= data.getFullYear() /*getFullYear ano atual com 4 digitos*/
    var fano= document.getElementById('txtano') /* ID txtano do type name*/
    var res= document.querySelector('div#res') /*ID res do resultado */

    /*Se o ano for igual a ZERO ou maior que o ano atual alert ERROR*/ 
    if(fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')

    } else {
        var fsex= document.getElementsByName('radsex')
        var idade= ano - Number(fano.value) /*Calcular a idade */
        var genero= '' /*variavel genero iniciar com string  vazia */
        /* Declarando variavel img recendo as imagens */
        var img= document.createElement('img')
        img.setAttribute('id', 'foto')

    } if (fsex[0].checked) { /*fsex[0] e a primeira posição MASCULINO*/
        genero= 'Homem'
        if(idade >=0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'foto-bebe-h.jpg')
             } else if (idade < 21){
                 //jovem
                 img.setAttribute('src', 'foto-jovem-h.jpg')
             } else if (idade < 50) {
                 //Adulto
                 img.setAttribute('src', 'foto-homem.jpg')
             } else {
                 //Idoso
                 img.setAttribute('src', 'foto-idoso-h.jpg')
             }

    } else if (fsex[1].checked) {
        genero= 'Mulher'

    if(idade >=0 && idade < 10) {
           img.setAttribute('src', 'foto-bebe-m.jpg')
        } else if (idade < 21){
            //jovem
            img.setAttribute('src', 'foto-jovem-m.jpg')
        } else if (idade < 50) {
            //Adulto
            img.setAttribute('src', 'foto-mulher.jpg')
        } else {
            //Idoso
            img.setAttribute('src', 'foto-idosa-m.jpg')
        }

    }
    /*Centralizar o res */
    res.style.textAlign= 'center'
    /*Imprimir na tela */
    res.innerHTML= `Detectamos ${genero} com ${idade} anos.`
    /*Imprimir as imagens na tela */
    res.appendChild(img)
    }
