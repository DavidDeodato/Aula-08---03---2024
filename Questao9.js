console.log('somas:')

class Somadordenotas{
    constructor(){
        this.total = 0
        
    }


    AdicionarNota(nota){
        this.total += nota;
        console.log(this.total);
    }

    
}

//criando objeto somador
let somador = new Somadordenotas(10,10);

//adicionando as notas para serem somadas

somador.AdicionarNota(10);
somador.AdicionarNota(8);
somador.AdicionarNota(6);




