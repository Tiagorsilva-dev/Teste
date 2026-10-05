/*interface TecnologiaProps{
    id:string;
    nome:string;
    slug?: string [];
}

let tec1: TecnologiaProps= {
    id:"12",
    nome:"Computer",
    slug:["PHP","Python"],
}*/

interface TecnologiaProps{
    id:string;
    nome:string;
    descricao?: string
}

interface NomeProps{
    tecnologia:TecnologiaProps[];
}

let frontend:NomeProps = {
    tecnologia:[
        {id:"1", nome:"Tec"},
        {id:"43",nome:"Tec2", descricao:"Astec" }
    ]
}

console.log(frontend);