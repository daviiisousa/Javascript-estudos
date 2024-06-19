function calcular(){
    let num = document.getElementById('numero')
    let tab = document.getElementById('selecttab')
    if(num.value.length == 0 ){
        alert('porfavor digite um numero')
    } else{
        let v = Number(num.value)
        let n = 1
        tab.innerHTML = ''
        while (n <= 10) {
            let item = document.createElement('option')
            item.text = `${v} x ${n} = ${v*n}`
            item.value = `tab${n}`
            tab.appendChild(item)
            n++
        }
    }
}