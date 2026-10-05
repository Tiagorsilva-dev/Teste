interface ProdutosProps {
    readonly id:string;
    nome:string;
    descricao: string
}

let produto1: ProdutosProps={
    id:"1",
    nome:"Brinquedo",
    descricao:"Max Steel"
}

console.log(produto1);