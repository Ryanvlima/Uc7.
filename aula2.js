class Conta {
    constructor(numero, saldo = 0) {
        this.numero = numero;
        this.saldo = saldo;
    }

    sacar(valor) {
        if(this.saldo >= valor && valor > 0) {
            this.saldo -= valor;
        } else {
            console.log("Saldo insuficiente");
        }
    }

    depositar(valor) {
        if(valor > 0) {
            this.saldo += valor;
        }
    }

    toString() {
        return `Numero: ${this.numero} - Saldo: ${this.saldo}`;
    }
}

class ContaCorrente extends Conta{
    constructor(numero, saldo = 0, limiteChequeEspecial = 200) {
        super(numero, saldo);
        this.limiteChequeEspecial = limiteChequeEspecial;
    }

    sacar(valor) {
        //super.sacar(valor);
        const valorDisponivelSaque = this.saldo + this.limiteChequeEspecial;

        if(valor > 0 && valorDisponivelSaque >= valor) {
            this.saldo -= valor;
        } else {
            console.log("Saldo insuficiente");
        }
    }
}

class ContaPoupanca extends Conta{

}

let contaC = new ContaCorrente(2001, 500);
console.log(contaC.toString());
contaC.sacar(650);
console.log(contaC.toString());
