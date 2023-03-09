import './App.css';
import Calculadora from './Components/Calculadora/Calculadora';

function App(props) {

  return (
    <div>
      <h1 className="Titulo">Calculadora</h1>
      <div className="App">
        <div className="Calculadora">
          <Calculadora />
        </div>
      </div>
    </div>


  );
}

export default App;
