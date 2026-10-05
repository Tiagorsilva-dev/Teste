"use strict";
/*let loja:object;

loja = {
    nome: "BK",
    endereco: "Alamedas 67",
    status: true
}*/
Object.defineProperty(exports, "__esModule", { value: true });
const BurguerK = {
    nome: "Burguer K",
    endereco: "Alamedas 67",
    status: true,
};
//console.log(BurguerK);
function novaLoja({ nome, endereco, status }) {
    console.log(nome, endereco, status);
}
novaLoja({ nome: "Tiago", endereco: "Alamedas", status: false });
