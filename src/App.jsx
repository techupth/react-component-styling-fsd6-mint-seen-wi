import "./App.css";
import Buttons from './components/Button.jsx';
import Alert from './components/Alert.jsx';

function App() {

  return (
    <div className="App">
      <div className="button-components-section">
        <Buttons priority="primary"/>
        <br />
        <Buttons priority="secondary"/>
      </div>
      <hr />
      <div className="alert-components-section">
      <Alert status="error"/>
      <Alert status="warning"/>
      <Alert status="info"/>
      <Alert status="success"/>
      </div>
    </div>
  );
}

export default App;
