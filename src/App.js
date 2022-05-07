import { useState } from 'react';
import './App.css';
import { automata } from './assets';

function App() {

  const [valor, setValor] = useState('');
  const [resultado, setResultado] = useState();
  
  const handleChange = event => {
    setValor(event.target.value)
  }

  const handleClick = () => {
    let expReg = /a*b(?!ca*)/
    let booleano = expReg.test(valor);
    setResultado(booleano)
  }
  return (
    <div className="App">
     <header className="App-header">
        <label>
          Validador de RegEx a*(bUca*)
        </label>
      </header>

      <div className='App-body'>
        <label>Ingrese una cadena para validarla en la expresión regular</label>
        <img className='Body-image' src={automata}/>
        <input className='Body-input' value={valor} onChange={handleChange}/>
        <button className='Body-button' onClick={handleClick}>Validar</button>
      </div>
      <div className='Body-result'>
        {resultado ? <label className='Label-correct'>La cadena es valida</label> : <label className='Label-wrong'> La cadena NO es válida</label>}
      </div>

    </div>
  );
}

export default App;
