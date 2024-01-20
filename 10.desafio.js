/** Crie uma classe para representar pessoas 
 * Para cada pessoa teremos atributos nomes, peso e altura.
 * AS pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso/(altura*altura));
 * Instancie uma pessoa chamado José que tenha 70kg de peso e 1,75 de altura e peça ao josé para dizer o valor do seu IMC.
 */

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC() {
        return this.peso / (this.altura * this.altura);
    }
    classificarImc() {
        const imc = this.calcularIMC();

        if (imc < 18.5) {
            return 'Abaixo do Peso: ';
        } else if (imc >= 18.5 && imc < 25) {
            return 'Peso normal: ';
        } else if (imc >= 25 && imc < 30) {
            return 'Acima do peso: ';
        } else if (imc >= 30 && imc < 40) {
            return 'Obeso: ';
        } else {
            return 'Obesividade grave: ';
        }
    }
}

const jose = new Pessoa('jose', 70, 1.75);
console.log(jose.classificarImc());
const daniel = new Pessoa('daniel', 89, 1.78);
console.log(daniel.classificarImc());