/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function Buttons(props){

  let buttonColor = undefined;
  const priority = props.priority
   
    if ( priority === "primary"){
      buttonColor = "#074EE8";
    } else if (priority === "secondary"){
      buttonColor = "#07A4E8";
    }

  return (
      <button 
      css={css`
      background-color: ${buttonColor};
      border-radius: 5%; 
      margin: 1% 0 1% 0;
      width: 150px;
      height: 50px;
      `}>
        {props.message}
      </button> 
  );

}


export default Buttons;

      