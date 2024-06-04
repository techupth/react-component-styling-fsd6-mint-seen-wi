// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Button(props) {
  if (props.type === "primary") {
    return (
      <>
        <button
          css={css`
            width: 170px;
            height: 50px;
            color: white;
            background-color: #074ee8;
            outline: none;
            border: none;
            padding: 0px, 16px, 0px, 16px;
            border-radius: 4px;
          `}
        >
          Large
        </button>
      </>
    );
  } else if (props.type === "secondary") {
    return (
      <button
        css={css`
          width: 170px;
          height: 50px;
          color: white;
          background-color: #07a4e8;
          outline: none;
          border: none;
          padding: 0px, 16px, 0px, 16px;
          border-radius: 4px;
        `}
      >
        Large
      </button>
    );
  }
}

export default Button;
