class animal{
    constructor(nome,idade){
        this.name = nome
        this.idade = idade
    }

    descrever(){console.log(`a idade do animal é ${this.idade} e seu nome é ${this.name}`);

    }

}

var cachorro = new animal('jack', 7);
var gato = new animal ('bolinha', 4);

gato.descrever ()
cachorro.descrever ()