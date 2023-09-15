import { Pessoa } from "../model/Pessoa";

let pessoa = new Pessoa('João Da Silva', '11111111111', new Date(2000, 9, 15), '000000000', 'Rua Número 1',170,70);

pessoa.falar(); 

pessoa.falarFrase("O DIA ESTA LINDO HOJE!!!");
