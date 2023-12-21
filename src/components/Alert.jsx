// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Error from "./image/error.png";
import Warning from "./image/warning.png";
import Info from "./image/info.png";
import Success from "./image/success.png";
function Alert(props) {
  if (props.type === "error") {
    return (
      <div
        css={css`
          width: 650px;
          height: 50px;
          border-radius: 10px;
          background-color: #f9c8c8;
          font-weight: bold;
          display: flex;
          align-items: center;
          gap: 10px;
          padding-left: 20px;
        `}
      >
        <div>
          <img src={Error} />
        </div>
        <p> This is error alert box</p>
      </div>
    );
  } else if (props.type === "warning") {
    return (
      <div
        css={css`
          width: 650px;
          height: 50px;
          border-radius: 10px;
          background-color: #f9d9c8;
          font-weight: bold;
          display: flex;
          align-items: center;
          gap: 10px;
          padding-left: 20px;
        `}
      >
        <div>
          <img src={Warning} />
        </div>
        <p>This is warning alert box</p>
      </div>
    );
  } else if (props.type === "info") {
    return (
      <div
        css={css`
          width: 650px;
          height: 50px;
          border-radius: 10px;
          background-color: #f9ebc8;
          font-weight: bold;
          display: flex;
          align-items: center;
          gap: 10px;
          padding-left: 20px;
        `}
      >
        <div>
          <img src={Info} />
        </div>
        <p>This is info alert box</p>
      </div>
    );
  } else if (props.type === "success") {
    return (
      <div
        css={css`
          width: 650px;
          height: 50px;
          border-radius: 10px;
          background-color: #cef7cd;
          font-weight: bold;
          display: flex;
          align-items: center;
          gap: 10px;
          padding-left: 20px;
        `}
      >
        <div>
          <img src={Success} />
        </div>
        <p>This is success alert box</p>
      </div>
    );
  }
  return <div>{props.text}</div>;
}
export default Alert;
