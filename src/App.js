import logo from './logo.svg';
import './App.css';
import Icon from './components/Icon';
import Phrase from './components/Phrase'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <Icon/> 
     {/* <br></br> */}
     <Phrase/>
     <br></br>
     <br></br>
     <Footer></Footer>
    </div>
  );
}

export default App;
