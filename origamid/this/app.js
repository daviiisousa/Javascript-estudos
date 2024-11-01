function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function () {
    console.log(` ${this.nome} andou `);
  };
}

const jose = new Pessoa("jose", 18);
console.log(jose);

const maria = new Pessoa("maria", 25);
console.log(maria);
maria.andar()

