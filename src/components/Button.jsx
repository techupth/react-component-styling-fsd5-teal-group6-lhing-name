// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Button(props) {
  if (props.type === "Primary") {
    return (
      <button
        css={css`
          padding: 0px 20px;
          background-color: #074ee8;
          width: 170px;
          height: 50px;
          border-radius: 5px;
          color: white;
        `}
      >
        {props.text}
      </button>
    );
  } else if (props.type === "Secondary") {
    return (
      <button
        css={css`
          padding: 0px 20px;
          background-color: #07a4e8;
          width: 170px;
          height: 50px;
          border-radius: 5px;
          color: white;
        `}
      >
        {props.text}
      </button>
    );
  }
  return <button>{props.text}</button>;
}

export default Button;
