class funcionario{
    constructor(nome,idade,salariobase,){
        this.nome = nome;
        this.idade = idade;
        this.salariobase = salariobase;
        salariobase = 1500
    }


    descricao(){console.log(`o nome desse funcionario é ${this.nome} e sua idade é ${this.idade}`)};
   
}

class professor extends funcionario{
    constructor(disciplina,nome,idade,salariobase){
        super(nome,idade,salariobase);
        this.disciplina = disciplina;
        this.horasdeaulaporsemana = 70
        this.valortotal
    }

    calcularsalario(valorhoraaula){
         this.valortotal = this.horasdeaulaporsemana*valorhoraaula;

         //colocando a material atual do professor
         console.log(`este professor é da área de ${this.disciplina}`)

         //colocando texto no console.log antes de falar o valor do salario
         console.log(`atualmente, o ${this.nome} ganha:`);

         //mostrando o valor no console.log
        console.log("R$",this.valortotal, '\n');
    }


}

//criando os objetos professores

let professor1 = new professor("matematica", "roberto", 24, 10.000);
let professor2 = new professor ("programação", "Cristiano Benites", 24, 20.000);

// descrevendo o professor 1

professor1.descricao()

//descrevendo o professor 2

professor1.calcularsalario(200)


//descrevendo o Cristiano

professor2.descricao()

//calculando quando o Cristiano ganha

professor2.calcularsalario(50000000000);