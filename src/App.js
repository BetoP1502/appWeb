//import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sugestoes from './pages/Sugestoes'; 
import ConteudoHome from './components/ConteudoHome';


function App() {
  return (
    <Router>
      {/* Cabeçalho fixo com logo e menu */}
      <Header />
      
      {/* Conteúdo das páginas */}
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<ConteudoHome />} />          
          <Route path="/Sugestoes" element={<Sugestoes />} />
        </Routes>
      </div>
    </Router>
  );  
}

export default App;
