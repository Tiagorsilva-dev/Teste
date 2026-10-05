interface CadastroProps{
    nome?:string;
    email:string;
    status: boolean;
}

const novoUsuario: CadastroProps = {
    email:"Tetste@",
    status: true
}

console.log(novoUsuario);