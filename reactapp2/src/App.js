// import logo from './logo.svg';
import Home from './components/home'
import About from './components/about'
import Learn from './components/learn'
import High from './components/high'
import './App.css';

function App() {
  return (
    <div className="App">
      <Home btn="hahahha"></Home>
      <About></About>
      <Learn showFlag></Learn>
      <High showFlag></High>
    </div>
  );
}

export default App;
