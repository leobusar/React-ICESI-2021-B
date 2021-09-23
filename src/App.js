import './App.css';
import routes from './config/routes';

function App() {

  var owner= { nombre: "Leonardo", apellido: "Bustamante" }

  return (
    <div className="App">

       {routes} 
    </div>
  );
}

export default App;
