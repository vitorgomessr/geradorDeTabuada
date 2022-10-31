function tabuar(){
    var numero = document.getElementById('txtnum')
    var res = document.getElementById('res')
    var tab = document.getElementById('seltab')

    if(numero.value.lenght != 0){
        var num = Number(numero.value)
        tab.innerHTML = ``
        for(var aux = 0; aux<=10; aux++){
            var item = document.createElement('option')
            item.text = `${num} x ${aux} = ${num*aux}`
            tab.appendChild(item)
        }
    }else{
        window.alert(`Por favor, inisira os dados.`)
    }

}