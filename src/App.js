import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="app">
     <Header />
     <Home />
     <Skills />
     <Footer />
    </div>
  );
}

export default App;
