import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import ReactAccordion from './Components/ReactAccordion/ReactAccordion';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <ReactAccordion></ReactAccordion>
    </div>
  );
}

export default App;
