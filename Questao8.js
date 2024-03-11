class animal{
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
    
    }

    descrever(){
        console.log(`o nome deste animal é ${this.nome} e sua idade é, atualmente, ${this.idade}`)}
}

class gato extends animal{
    constructor(nome,idade,cor){
        super(nome,idade);
        this.cor = cor;
    }

    miar(){
        console.log(`miaauuuuuuuuu`)
    }


}

//criando os objetos "cachorro" que usa da classe animal e o "gato" que usa da classe gato
let cachorro = new animal("jack", 5);
let gato1 = new gato('bolinha', 4);

//chamando os métodos 

//chamando método para descrever o cachorro
cachorro.descrever();

//chamando método para descrever o gato

gato1.descrever();

//chamando método para fazer o som do gato

gato1.miar();
