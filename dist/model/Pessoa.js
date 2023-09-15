"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    nome;
    cpf;
    data_nascimento;
    telefone;
    endereco;
    altura;
    peso;
    constructor(_nome, _cpf, _data_nascimento, _telefone, _endereco, _altura, _peso) {
        this.nome = _nome;
        this.cpf = _cpf;
        this.data_nascimento = _data_nascimento;
        this.telefone = _telefone;
        this.endereco = _endereco;
        this.altura = _altura;
        this.peso = _peso;
    }
    /**
     * Retorna o CPF da pessoa
     * @returns
     */
    getNome() {
        return this.nome;
    }
    setNome(_nome) {
        this.nome = _nome;
    }
    getCPF() {
        return this.cpf;
    }
    setCPF(_cpf) {
        this.cpf = _cpf;
    }
    getData_nascimento() {
        return this.data_nascimento;
    }
    setData_nascimento(_data_nascimento) {
        this.data_nascimento = _data_nascimento;
    }
    getTelefone() {
        return this.telefone;
    }
    setTelefone(_telefone) {
        this.telefone = _telefone;
    }
    getEndereco() {
        return this.endereco;
    }
    setEndereco(_endereco) {
        this.endereco = _endereco;
    }
    getAltura() {
        return this.altura;
    }
    setAltura(_altura) {
        this.telefone = _altura;
    }
    getPeso() {
        return this.peso;
    }
    setPeso(_peso) {
        this.peso = _peso;
    }
    mostraPessoa() {
        console.log(`Nome: ${this.nome}
    CPF:${this.cpf} 
    Data:${this.data_nascimento}
    Telefone:${this.telefone} 
    Endereço:${this.endereco}
    Altura:${this.altura}
    Peso:${this.peso}`);
    }
    falar() {
        console.log(`${this.nome} está falando`);
    }
    falarFrase(_frase) {
        console.log(`${this.nome} fala: ${_frase}`);
    }
}
exports.Pessoa = Pessoa;
//# sourceMappingURL=Pessoa.js.map