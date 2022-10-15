function verificar() {
    var data = new Date()
    var ano = data.getFullYear() //Aqui é a data e o ano com 4 Dígitos
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) { // fano.value.length == 0 Vai pegar o ano digitado, cumprimento e o value se é igaul a zero.
        window.alert('Verifique os dados e tente novamente')

    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') // Isso aqui é a mesmo coisa no Html se eu fizer <img id ='foto'. Beleza?

        if (fsex[0].checked) {


            if (idade >= 0 && idade < 10) {
                genero = 'Criança'
                    //Criança
                img.setAttribute('src', '_imagens/fotobebemasculino.jpg')
            } else if (idade < 21) {
                genero = 'Jovem'
                    //Jovem
                img.setAttribute('src', '_imagens/fotojovemmasculino.jpg')
            } else if (idade < 50) {
                genero = 'Homem adulto'
                    //Adulto
                img.setAttribute('src', '_imagens/fotoadultomasculino.jpg')

            } else {
                genero = 'um Homem Idoso'
                    //Idoso
                img.setAttribute('src', '_imagens/fotoidosomasculino.jpg')
            }




        } else if (fsex[1].checked) {


            if (idade >= 0 && idade < 10) {
                genero = 'Criança'
                    //Criança
                img.setAttribute('src', '_imagens/fotobebefeminino.jpg')
            } else if (idade < 21) {
                genero = 'Jovem Mulher'
                    //Jovem
                img.setAttribute('src', '_imagens/fotojovemfeminino.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', '_imagens/fotoadultofeminino.jpg')
            } else {
                genero = 'uma Mulher Idosa'
                    //Idoso
                img.setAttribute('src', '_imagens/fotoidosofeminino.jpg')
            }


        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade}`
        res.appendChild(img) // appendChild, ou seja, vou adicionar um elemento depois do comando acima.

    }
}