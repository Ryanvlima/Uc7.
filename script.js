class Personagem {    
    constructor(nome, ataque, defesa, vida, posicao) {
        this.nome = nome;
        this.ataque = ataque;
        this.defesa = defesa;
        this.vida = vida;
        this.posicao = posicao;
        this.vivo = true;
    }

    morrer() {
        this.vida = 0;
        this.vivo = false;
        console.log(`O ${this.nome} morreu!`);
    }

    tomarDano(quantidade) {
        if (this.vivo) {
            this.vida = this.vida - quantidade;
            console.log(`${this.nome} sofreu ${quantidade} de dano e agora tem ${this.vida} de vida`)

            if(this.vida <= 0) {
                this.morrer();
            }
        } else {
            console.log(`${this.nome} não pode mais sofrere dano!`)
        }
    }

    atacar(inimigo) {
        if(inimigo.vivo && this.vivo) {
            console.log(`${this.nome} atacou o ${inimigo.nome} com a força de ${this.ataque}`);
            inimigo.tomarDano(this.ataque);
        } else {
            console.log("Não é possível atacar na condicação de morto.");
        }
    }

    recuperarVida() {
        // se o persongaem estiver vivo
    }
}

class Arqueiro extends Personagem {
    constructor(nome, ataque, defesa, vida, posicao, totalFlechas) {
        super(nome, ataque, defesa, vida, posicao);
        this.totalFlechas = totalFlechas;
    }

    atacar(inimigo) {
        if(this.totalFlechas > 0) {
            super.atacar(inimigo);
            this.totalFlechas -= 1;
        } else {
            console.log("Não é possível atacar sem flechas");
        }
    }

    carregarFlechas(quantidade) {
        
    }
}

class Guerreiro extends Personagem {

}

const inimigo1 = new Personagem("Orc", 10, 30, 50, 1);
const arqueiro1 = new Arqueiro("Legolas", 5, 10, 60, 1, 3);

console.log(arqueiro1);
console.log(inimigo1);

arqueiro1.atacar(inimigo1);
arqueiro1.atacar(inimigo1);
arqueiro1.atacar(inimigo1);
arqueiro1.atacar(inimigo1);
arqueiro1.atacar(inimigo1);