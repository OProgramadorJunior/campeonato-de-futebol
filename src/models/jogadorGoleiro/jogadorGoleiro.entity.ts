import { Jogador } from "../jogador/jogador.entity";

export class jogadorGoleiro extends Jogador {
    cobertura: number;
    desarme: number;

    goleiro (nome, altura, reflexo) {
        this.nome = nome,
        this.altura = altura,
        this.reflexo = reflexo,
        this.score = 0;
    }

    calculo_goleiro (jogador)
    {
        let altura = jogador.altura
        let reflexo = jogador.reflexo

    jogador.score = altura 6 + reflexo * 4;
    console.log(jogador.score)
    return jogador.score;
    }

    score_altura (altura) //função para concatenar a pontuação de altura 0 a 100
    {
        let resultado
        if (altura <= 210 && altura > 0)
        {
        resultado = Math.round(altura100/210);
        }
        else
        {
            console.log('Altura invalida!');
        }
        return resultado;
    }
}