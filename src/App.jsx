import "./App.css";
import Buttons from './components/Button.jsx';
import Alert from './components/Alert.jsx';

function App() {

  return (
    <div className="App">
      <div className="button-components-section">
        <Buttons priority="primary" message="Button"/>
        <br />
        <Buttons priority="secondary" message="Button"/>
      </div>
      <hr />
      <div className="alert-components-section">
      <Alert status="error" message="This is error alert box"/>
      <Alert status="warning" message="This is warning alert box"/>
      <Alert status="info" message="This is info alert box"/>
      <Alert status="success" message="This is success alert box"/>
      </div>
    </div>
  );
}

export default App;
