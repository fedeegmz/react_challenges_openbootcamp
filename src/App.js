import './App.css';
import ContactComponent from './challenge1/contact';
import ClockFunction from './challenge2/clockFunction';
import Clock from './challenge2/clockClass';

function App() {
  return (
    <div className="App">
      {/* CHALLENGE 1 */}
      <h1>Challenge 1</h1>
      <ContactComponent></ContactComponent>

      {/* CHALLENGE 2 */}
      <h1>Challenge 2</h1>
      <Clock></Clock>
      <ClockFunction></ClockFunction>
    </div>
  );
}

export default App;
