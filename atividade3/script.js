// Objeto Produto

//Atributos = Nome, Preço, Estoque

//Métodos = vender(), repor(), alterarPreco()

class Produto {

    //Método / Função
    constructor(nome, preco, estoque) {
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }

    vender() {
      console.log(`O produto ${this.nome} foi vendido`);
    }
    
    repor() {
      console.log(`O produto ${this.nome} foi reposto`);
    }

    alterarPreco(novoPreco) {
      this.preco = novoPreco;
      console.log(`O preço do produto ${this.nome} foi alterado para R$ ${this.preco}`);
    }
}

//objeto
const produto1 = new Produto("Notebook", 4599, 10);
console.log("Produto 1:", produto1);
const produto2 = new Produto("Smartphone", 3599, 20);
console.log("Produto 2:", produto2);
const produto3 = new Produto("TV", 1599, 15);
console.log("Produto 3:", produto3);

console.log("---------------------------------");
console.log("Atributos do Produto 1:");
console.log("- ", produto1.nome);
console.log("- ", produto1.preco);
console.log("- ", produto1.estoque);
console.log("---------------------------------");
console.log("Atributos do Produto 2:");
console.log("- ", produto2.nome);
console.log("- ", produto2.preco); 
console.log("- ", produto2.estoque);
console.log("---------------------------------");
console.log("Atributos do Produto 3:");
console.log("- ", produto3.nome);
console.log("- ", produto3.preco);
console.log("- ", produto3.estoque);
console.log("---------------------------------");   

produto1.vender();
produto2.repor();
produto3.alterarPreco(1799);