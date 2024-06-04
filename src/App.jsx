/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "./App.css";
import infoIcon from "./assets/alert-circle.svg";
import successIcon from "./assets/check-circle.svg";
import warningIcon from "./assets/alert-triangle.svg";
import errorIcon from "./assets/frown.svg";

function Buttons(props) {
  return (
    <button
      css={css`
        background-color: ${props.colorButton};
        width: 150px;
        color: white;
      `}
    >
      {props.buttonName}
    </button>
  );
}

function ButtonAlert(props) {
  return (
    <div
      css={css`
        background-color: ${props.colorButton};
        width: 650px;
        height: 50px;
        color: black;
        display: flex;
        padding: 25px 0px 0px 20px;
        gap: 20px;
        justify-content: start;
        font-size: 20px;
        border-radius: 10px;
        margin: 20px;
      `}
    >
      <div>
        <img src={props.buttonImg} />
      </div>
      {props.detailAlert}
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <div className="button-components-section">
        <h1 className="title">Primary</h1>
        <div>
          <Buttons buttonName="Button" colorButton="#074EE8" />
        </div>
      </div>
      <div className="button-components-section">
        <h1 className="title">Secondary</h1>
        <div>
          <Buttons buttonName="Button" colorButton="#07A4E8" />
        </div>
      </div>
      <hr />
      <div className="alert-components-section">
        <ButtonAlert
          buttonImg={errorIcon}
          detailAlert="This is error alert box"
          colorButton="#F9C8C8"
        />
        <ButtonAlert
          buttonImg={warningIcon}
          detailAlert="This is warning alert box"
          colorButton="#F9D9C8"
        />
        <ButtonAlert
          buttonImg={infoIcon}
          detailAlert="This is error alert box"
          colorButton="#F9EBC8"
        />
        <ButtonAlert
          buttonImg={successIcon}
          detailAlert="This is success alert box"
          colorButton="#CEF7CD"
        />
      </div>
    </div>
  );
}

export default App;
