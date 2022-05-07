import { useState } from 'react';
import './App.css';
import { automata } from './assets';

function App() {

  const [valor, setValor] = useState('');
  let cadena = 'abca';
  let expReg = /a*b(?!ca*)ca*/

  console.log(expReg.test(cadena));


  const handleChange = event => {
    setValor(event.target.value)
  }
  return (
    <div className="App">
     <header className="App-header">
        <label>
          Resolución de Autómata a*(bUca*)
        </label>
      </header>

      <div className='App-body'>
        <label>Ingrese una cadena para validarla en la expresión regular</label>
        <img className='Body-image' src={automata}/>
        <input className='Body-input' value={valor} onChange={handleChange}/>
        <button className='Body-button'>Validar</button>
      </div>
    </div>
  );
}

export default App;
