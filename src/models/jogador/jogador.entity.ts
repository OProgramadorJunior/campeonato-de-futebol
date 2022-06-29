export class Jogador {
    
    private nome: string;
    
    private idade: number;
    
    private gols: number;
    
    private camisa: number;
    
    habilidade: number;
    
    funcao: string;
    
    public constructor (pNome: string, pData: string, pCamisa: number) {
        this.nome = pNome;
        this.idade = this.setIdade(pData);
        this.gols = 0;
        this.camisa = pCamisa;
        this.habilidade = 0;
        this.funcao = "";
    }
    
    public setCamisa(pCamisa: number) {
        this.camisa = pCamisa;
    }
    
    private setIdade(pData: string): number {
        return new Date().getFullYear() - new Date(pData).getFullYear();
    }
    
    public getNome(): string {
        return this.nome;
    }
    
    public getGols(): number {
        return this.gols;
    }
    
    public getCamisa(): number {
        return this.camisa;
    }
    
    public getIdade(): number {
        return this.idade;
    }
    
    public getHabilidade(): number {
        return this.habilidade;
    }
    
    public getFuncao(): string {
        return this.funcao;
    }
    
    public somaGol() {
        this.gols = (this.gols + 1);
    }
}