// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import ErrorIcon from "../assets/icons/error-icons";
import WarningIcon from "../assets/icons/warning-icons";
import InfoIcon from "../assets/icons/info-icons";
import SuccessIcon from "../assets/icons/success-icons";

function Alert(props) {

    const status = props.status
    let bgColor = undefined;
    let Icon = undefined;

    if (status === "error"){
        bgColor = '#F9C8C8';
        Icon = ErrorIcon
    } else if (status === "warning"){
        bgColor = '#F9D9C8';
        Icon = WarningIcon
    } else if (status === "info"){
        bgColor = '#F9EBC8';
        Icon = InfoIcon
    } else if (status === "success"){
        bgColor = "#CEF7CD";
        Icon = SuccessIcon
    }

    return (
        <div css={
            css`
                background-color: ${bgColor};
                width: 650px;
                height: 76px;
                margin: 5% 0 5% 0;
                color: #444444;
                border-radius: 10px;
                padding-left: 5%;
                display: flex;
                gap: 10px;
                justify-content: left;
                align-items: center;
                font-weight: 700;
                font-size: 20px;
        `}><Icon />{props.message}
        </div>
    )
}

export default Alert;
