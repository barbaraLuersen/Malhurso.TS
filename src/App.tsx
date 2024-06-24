import { useState } from "react";
import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario/Formulario";
import Time from "./componentes/Time/Time";
import Titulo from "./componentes/Titulo/Titulo";
import Rodape from "./componentes/Rodape/Rodape";
import { IColaborador } from "./shared/interfaces/IColaborador";

function App() {
  const times = [
    {
      nome: "Desenvolvedores",
      corFundo: "#7C8681",
      corDestaque: "#C4CEC2",
    },
    {
      nome: "Designers",
      corFundo: "#676D4B",
      corDestaque: "#A2A568",
    },
    {
      nome: "Costureiras",
      corFundo: "#35412A",
      corDestaque: "#4E5B31",
    },
  ];

  const [colaboradores, setColaboradores] = useState<IColaborador[]>([]);

  const aoNovoColaboradorAdicionado = (colaborador: IColaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className="App">
      <Banner enderecoImagem="/imagens/Banner.png" textoAlternativo="Banner principal da página Malhurso" />
      <Formulario
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
        times={times.map((time) => time.nome)}
      />
      <Titulo />
      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          corFundo={time.corFundo}
          corDestaque={time.corDestaque}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}
        />
      ))}
      <Rodape />
    </div>
  );
}

export default App;
