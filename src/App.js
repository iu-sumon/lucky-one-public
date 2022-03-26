import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import ReactAccordion from './Components/ReactAccordion/ReactAccordion';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <ReactAccordion></ReactAccordion>
      <Footer></Footer>
    </div>
  );
}

export default App;
