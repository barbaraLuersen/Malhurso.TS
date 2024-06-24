import { useState } from "react";
import Botao from "../Botao/Botao";
import CampoSelecao from "../CampoSelecao/CampoSelecao";
import CampoTexto from "../CampoTexto/CampoTexto";
import "./Formulario.css";
import { IColaborador } from "../../shared/interfaces/IColaborador";

interface FormularioProps {
  aoColaboradorCadastrado: (colaborador: IColaborador) => void
  times: string[]
}

const Formulario = ({ aoColaboradorCadastrado, times }: FormularioProps) => {
  //Como funciona o useState
  //Sempre que queremos que o componente reaja a alguma alteração no
  //valor de uma variável e se renderize novamente, precisamos indicar
  //isto utilizando o useState. Do contrário, o valor vai ser alterado
  //mas o DOM não será atualizado.
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  const [data, setData] = useState("");


  const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    aoColaboradorCadastrado({ nome, cargo, imagem, time, data });
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h1 className="titulo">
          Preencha os dados para criar o card do colaborador.
        </h1>
        <div>
          <CampoTexto
            label="Nome"
            obrigatorio={true}
            placeholder="Digite seu nome"
            valor={nome}
            aoAlterar={(valor) => setNome(valor)}
          />
          <CampoTexto
            label="Cargo"
            obrigatorio={true}
            placeholder="Digite seu cargo"
            valor={cargo}
            aoAlterar={(valor) => setCargo(valor)}
          />
          <CampoTexto
            label="Data de entrada no time"
            placeholder=""
            valor={data}
            aoAlterar={(valor) => setData(valor)}
            tipo='date'
          />
          <CampoTexto
            label="Imagem"
            placeholder="Digite o endereço da imagem"
            valor={imagem}
            aoAlterar={(valor) => setImagem(valor)}
          />
          <CampoSelecao
            label="Time"
            obrigatorio={true}
            itens={times}
            valor={time}
            aoAlterar={(valor) => setTime(valor)}
          />
          <Botao>Criar card</Botao>
        </div>
      </form>
    </section>
  );
};
export default Formulario;
