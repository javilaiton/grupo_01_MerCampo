import logo from '../logo.svg';
import '../assets/css/App.css';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Footer></Footer>
      </header>
    </div>
  );
}

export default App;
