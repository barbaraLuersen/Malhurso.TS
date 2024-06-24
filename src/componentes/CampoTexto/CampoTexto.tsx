import React from "react";
import "./CampoTexto.css";
import { text } from "stream/consumers";

interface CampoTextoProps {
  aoAlterar: (valor: string) => void
  placeholder: string
  label: string
  valor: string
  obrigatorio?: boolean
  tipo?: 'text' | 'password' | 'date' | 'email' | 'number'
}

const CampoTexto = ({ aoAlterar, placeholder, label, valor, obrigatorio = false, tipo = 'text' }: CampoTextoProps) => {
  const aoDigitar = (evento: React.ChangeEvent<HTMLInputElement>) => {
    aoAlterar(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label className="campo-texto label">{label}</label>
      <input
        placeholder={placeholder}
        value={valor}
        onChange={aoDigitar}
        required={obrigatorio}
        type={tipo}
      ></input>
    </div>
  );
};
export default CampoTexto;
