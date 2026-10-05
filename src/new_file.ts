/*let loja:object;

loja = {
    nome: "BK",
    endereco: "Alamedas 67",
    status: true
}*/


interface LojaProps{
    nome:string;
    endereco:string;
    status:boolean;
}

const BurguerK: LojaProps = {
    nome: "Burguer K",
    endereco:"Alamedas 67",
    status: true,
}

//console.log(BurguerK);

function novaLoja({nome, endereco, status}:LojaProps) {
    console.log(nome, endereco, status)
}

novaLoja({nome:"Tiago", endereco:"Alamedas",status: false})       