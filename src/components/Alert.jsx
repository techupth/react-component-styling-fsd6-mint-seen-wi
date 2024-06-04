// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import ErrorIcons from "../assets/icons/ErrorIcons";
import WarningIcon from "../assets/icons/WarningIcon";
import InfoIcon from "../assets/icons/InfoIcon";
import SeccessIcon from "../assets/icons/SeccessIcon";

function Alert(props) {
  const checkTypeColor = () => {
    switch (props.type) {
      case "error":
        return "#f9c8c8";
      case "warning":
        return "#f9d9c8";
      case "info":
        return "#F9EBC8";
      case "success":
        return "#CEF7CD";
      default:
        break;
    }
  };

  const CheckTypeText = () => {
    switch (props.type) {
      case "error":
        return (
          <>
            <ErrorIcons />
            This is error alert box
          </>
        );
      case "warning":
        return (
          <>
            <WarningIcon />
            This is warning alert box
          </>
        );
      case "info":
        return (
          <>
            <InfoIcon />
            This is info alert box
          </>
        );
      case "success":
        return (
          <>
            <SeccessIcon />
            This is success alert box
          </>
        );
      default:
        break;
    }
  };

  const styleAlert = `
  display: flex;
  justify-content: start;
  align-items: center;
  width: 650px;
  height: 76px;
  color: #444444;
  background-color: ${checkTypeColor()};
  outline: none;
  border: none;
  padding: 20px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 700;
  font-family: "Kanit", sans-serif;
  gap: 10px;
`;
  return (
    <div
      css={css`
        ${styleAlert}
      `}
    >
      <CheckTypeText />
    </div>
  );
}
export default Alert;
