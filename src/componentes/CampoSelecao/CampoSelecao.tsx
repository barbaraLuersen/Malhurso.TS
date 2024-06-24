import "./CampoSelecao.css";

interface CampoSelecaoProps {
  aoAlterar: (valor: string) => void
  obrigatorio: boolean
  label: string
  valor: string
  itens: string[]
}

const CampoSelecao = ({ aoAlterar, obrigatorio, label, valor, itens }: CampoSelecaoProps) => {
  return (
    <div className="campo-selecao">
      <label className="campo-selecao label">{label}</label>
      <select
        className="campo-selecao select"
        required={obrigatorio}
        value={valor}
        onChange={(evento) => aoAlterar(evento.target.value)}
      >
        <option value=""></option>
        {itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
        obrigatorio={true}
      </select>
    </div>
  );
};
export default CampoSelecao;
