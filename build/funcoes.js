"use strict";
/*interface CursoProps {
    id:string;
    nome:string;
    preco:number;

    promocao: (preco:number)=>void;
}

function mostraPromocao(preco:number){
    console.log(`Promocao no curso ${preco}`);

}

const novoCurso:CursoProps = {
    id:"1",
    nome:"TypeScript",
    preco:200,
    promocao: mostraPromocao

}


console.log(novoCurso.promocao(350));
*/
Object.defineProperty(exports, "__esModule", { value: true });
let somaNumeros = (valor1, valor2) => {
    console.log("Resultado ", valor1 + valor2);
    return valor1 + valor2;
};
const resultado = somaNumeros(15, 20);
console.log(resultado);
