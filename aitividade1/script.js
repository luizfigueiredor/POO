//Objeto Professor

//Atributos = nome, idade, materia, turma, salario


//Métodos = Ensinar, Aplicar Prova, Receber Salrio, Apresentar

class Professor {

    //Método / Função
    constructor(nome, idade, materia, turma, salario) {
     
        //Atributos
        this.nome = nome;
        this.idade = idade;
        this.materia = materia;
        this.turma = turma;
        this.salario = salario;
    }


    //metodo
    ensinar() {
    console.log(`O professor ${this.nome} está dando aula`);
    }

    aplicar_prova() {
    console.log(`O(A) professor(a) ${this.nome} está aplicando prova de ${this.materia}`);
    }

    receber_salario() {
    console.log(`O(A) professor(a) ${this.nome} recebeu o salário de R$${this.salario}`);
    }
}

//Objeto
const professor1 = new Professor("Pedro", 25, "Biologia", "3º Ano", 3250);
console.log("Professor 1:", professor1);

const professor2 = new Professor("Beatriz", 20, "Matemática", "2º Ano", 3000);
console.log("Professor 2:", professor2);

const professor3 = new Professor("Ana", 30, "História", "1º Ano", 2950);
console.log("Professor 3:", professor3);

console.log("---------------------------------");
console.log("Atributos do Professor 1:");
console.log("- ", professor1.nome);
console.log("- ", professor1.idade);
console.log("- ", professor1.materia);
console.log("- ", professor1.turma);
console.log("- ", professor1.salario);
console.log("---------------------------------");   

console.log("Atributos do Professor 2:");
console.log("- ", professor2.nome);
console.log("- ", professor2.idade);
console.log("- ", professor2.materia);
console.log("- ", professor2.turma);
console.log("- ", professor2.salario);
console.log("---------------------------------");

console.log("Atributos do Professor 3:");
console.log("- ", professor3.nome);
console.log("- ", professor3.idade);   
console.log("- ", professor3.materia);
console.log("- ", professor3.turma);
console.log("- ", professor3.salario);
console.log("---------------------------------");


//Métodos
professor1.ensinar();
professor2.aplicar_prova();
professor3.receber_salario();