//import logo from './logo.svg';
import './App.css';
import Lista from './components/Listade';

function App() {
  return (
    <div className="container-fluid">
      <h1>Hola Dojo!</h1>
      <h3 className='text-info'>Lista de cosas por hacer :</h3>
      <Lista name="React"/> 
    </div>
  );
}

export default App;
