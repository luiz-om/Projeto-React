import logo from './logo.svg';
import './App.css';

//Importação dos componentes criados
import Header from './componentes/Header'
import Footer from './componentes/Footer'
import HomePage from './componentes/HomePage'

function App() {
  return (
    <div className="App">
      {/* Aqui é feita a importação dos compo */}
      <Header />
      <HomePage />

      <Footer />

      
    </div>
  );
}

export default App;
