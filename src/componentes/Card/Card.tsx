import "./Card.css";

interface CardProps {
  corDestaque: string
  imagem: string
  nome: string
  cargo: string
  data: string
}

const Card = ({ corDestaque, imagem, nome, cargo, data }: CardProps) => {
  return (
    <div className="card">
      <div className="cabecalho" style={{ backgroundColor: corDestaque }}>
        <img src={imagem} alt={nome} />
      </div>
      <div className="rodape">
        <h3>{nome}</h3>
        <h4>{cargo}</h4>
        <h4>{new Date(data).toLocaleDateString()}</h4>
      </div>
    </div>
  );
};

export default Card;
