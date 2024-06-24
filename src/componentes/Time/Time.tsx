import { IColaborador } from "../../shared/interfaces/IColaborador";
import Card from "../Card/Card";
import "./Time.css";

interface TimeProps {
  corFundo: string
  corDestaque: string
  nome: string
  colaboradores: IColaborador[]
}

const Time = ({ corFundo, corDestaque, nome, colaboradores }: TimeProps) => {
  return (

    //Renderização condicional, quando a lista de colaboradores for maior que zero ele renderiza o componente
    colaboradores.length > 0 && (

      <section className="time" style={{ backgroundColor: corFundo }}>
        <h2 className="time h2" style={{ borderColor: corDestaque }}>
          {nome}
        </h2>
        <div className="colaboradores">
          {colaboradores.map((colaborador) => (
            <Card
              key={colaborador.nome}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              corDestaque={corDestaque}
              data={colaborador.data}
            />
          ))}
        </div>
      </section>
    )
  );
};
export default Time;
