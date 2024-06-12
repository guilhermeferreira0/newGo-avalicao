class Senha {
    constructor(
        conteudo
    ) {
        this.conteudo = conteudo;
    }

    getConteudo() {
        return this.conteudo;
    }

    validaSenha() {
        if (this.conteudo.length > 30) {
            console.log('Limite maximo');
            return;
        }

        else if (this.conteudo.length < 10) {
            console.log('Limite minimo 10');
            return;
        };

        this.verificaLetras();
    }

    verificaLetras() {
        const minusMaius = this.conteudo.replace(/D/gi)
        console.log(minusMaius);
        if (minusMaius.includes('undefined')) {
            console.log('Precisa de ao menos uma letra maiuscula e minuscula!!!');
            return false;
        }
            
            const numeros = this.conteudo.replace(/D/g);
            if (numeros.includes('undefined')) {
                console.log('Senha precisa de pelo menos um numero!!!');
                console.log(numeros);
            return false;
        }

        const simbolos = this.conteudo.replace(/\!\?\@\?/g);
        if (simbolos.includes('undefined')) {
            console.log('Senha precisa de pelo menos um simbolo!!!');
            return false;
        }
    }

    forçaSenha() {
        return 
    }
}

const p1 = new Senha('aibic213213');

p1.verificaLetras();