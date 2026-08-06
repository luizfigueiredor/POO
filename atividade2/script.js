// Objeto Aluno

//Atributos = Nome, Idade, Curso, Matricula

//Métodos = aprender(), estudar(), apresentar()

class Aluno {

    //Método / Função
    constructor(nome, idade, curso, matricula) {
    
        //Atributos
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.matricula = matricula;
    }

    aprender() {
    console.log(`O(A) aluno(a) ${this.nome} está aprendendo`);
    }

    estudar() {
    console.log(`O(A) aluno(a) ${this.nome} está estudando`);
    }

    apresentar() {
    console.log(`O(A) aluno ${this.nome} está se apresentando`);
    }
}

//objeto
const aluno1 = new Aluno("Luiz", 20, "Publicidade", "65824");
console.log("Aluno 1:", aluno1);

const aluno2 = new Aluno("Julia", 22, "Direito", "68496");
console.log("Aluno 2:", aluno2);

const aluno3 = new Aluno("Beatriz", 19, "Psicologia", "21564");
console.log("Aluno 3:", aluno3);

console.log("---------------------------------");
console.log("Atributos do Aluno 1:");
console.log("- ", aluno1.nome);
console.log("- ", aluno1.idade);
console.log("- ", aluno1.curso);
console.log("- ", aluno1.matricula);
console.log("---------------------------------");
console.log("Atributos do Aluno 2:");
console.log("- ", aluno2.nome);
console.log("- ", aluno2.idade);
console.log("- ", aluno2.curso);
console.log("- ", aluno2.matricula);    
console.log("---------------------------------");
console.log("Atributos do Aluno 3:");
console.log("- ", aluno3.nome);
console.log("- ", aluno3.idade);
console.log("- ", aluno3.curso);
console.log("- ", aluno3.matricula);
console.log("---------------------------------");

aluno1.aprender();
aluno2.estudar();
aluno3.apresentar();