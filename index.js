class Fibbo {
    constructor() {
        this.fullSequency = [];
    }

    start() {
        this.fullSequency = [1, 1]
        for (let i = 0; i < 9999; i++) {
            const tamanho = this.fullSequency.length;
            const termo1 = parseInt(this.fullSequency[tamanho - 2]);
            const termo2 = parseInt(this.fullSequency[tamanho - 1]);
            this.fullSequency.push(termo1 + termo2);
        }
    }

    loc(index) {
        return this.fullSequency[index - 1];
    }

    END() {
        this.fullSequency = []
    }

    selectSearch(minIndex, maxIndex) {
        const numMin = this.fullSequency[minIndex - 1];
        const numMax = this.fullSequency[maxIndex - 1];
        let fList = [];

        for (let num of this.fullSequency) {
            if (numMin <= num && num<= numMax) {
                fList.push(num);
            }
        }
        return fList;
    }
}

// Exemplo

const Fibonacci = new Fibbo();

// Inicia a Função
Fibonacci.start();

// Procura um Número na Sequência (Index Começa em 1). Aqui Procuramos o Quinto Número de Sequência
console.log(Fibonacci.loc(5));

// Devolve uma Lista do Primeiro Número até o Décimo
console.log(Fibonacci.selectSearch(1, 10));

// Devolve Todos os Números da Sequência
const full = Fibonacci.fullSequency;

// Finaliza a Função
Fibonacci.END()