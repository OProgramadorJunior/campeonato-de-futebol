/*
Um time possui um nome e jogadores que podem ser adicionados ou removidos. Um time completo é formado por
5 jogadores, sendo 1 goleiro, 2 defensores e 2 atacantes. Além disso, o programa deve controlar os resultados
obtidos pelo time (vitórias, empates e derrotas). Ao final de cada partida, os resultados de cada time devem ser
atualizados. Uma vitória vale 3 pontos, empate vale 1 e derrota não pontua.
Uma partida é composta de dois times, onde um é o time da casa e o outro é o visitante. Além da data da partida,
o programa deve guardar o placar da partida (quantos gols o time da casa fez e quantos gols o time visitante fez).
Desta forma, será possível saber quem venceu a partida ou se houve empate.
O programa deve permitir cadastrar várias partidas e depois simular a execução destas partidas, atualizando
estatísticas de times e jogadores. Na simulação, considere a pontuação total das habilidades de cada time (quem
tem a maior pontuação, tem mais chance de sair vitorioso). Além disso, se o time que estiver jogando em casa tem
uma chance adicional. Você pode definir sua própria fórmula, mas ela deve estar explicada no código (javadoc).
*/

import { JogadorAtacante } from "./models/jogadorAtacante/jogadorAtacante.entity";
import { JogadorGoleiro } from "./models/jogadorGoleiro/jogadorGoleiro.entity";
import { Time } from "./models/time/time.entity";

async function main() {
    let g1 = new JogadorGoleiro(181, 89,"Bruno", "2000-06-29", 0);
    let a1 = new JogadorAtacante(40, 80, "Romario", "1976-07-11", 10);
    let azul = new Time("Azul");
    
    console.log("Nome: " + g1.getNome());
    console.log("Idade: " + g1.getIdade());
    console.log("Habilidade: " + g1.getHabilidade());
    console.log("Camisa: " + g1.getCamisa());
    console.log("Funcao: " + g1.getFuncao());
    
    console.log("\nNome: " + a1.getNome());
    console.log("Idade: " + a1.getIdade());
    console.log("Habilidade: " + a1.getHabilidade());
    console.log("Camisa: " + a1.getCamisa());
    console.log("Funcao: " + a1.getFuncao());
    
    azul.setJogador(g1);
    azul.setJogador(a1);
    console.log("\n" + azul.getJogadores());
    console.log("Habilidade Time: " + azul.totalHabilidade());
    
}

main();