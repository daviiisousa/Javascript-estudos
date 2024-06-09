const p ={
    primeiroNome: "Davi",
    segundoNome: "Sousa",
    idade      : 18,
    NomeInteiro: function(){
        return this.primeiroNome + " " + this.segundoNome
    }
}        
console.log(p.NomeInteiro())
