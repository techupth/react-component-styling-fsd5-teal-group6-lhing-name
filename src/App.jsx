import "./App.css";
import { Alert } from "./Alert";
import { Button } from "./button.jsx";
function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        {/* Render ตัว Button 2 แบบ */}
        <h1>
          primary <Button type="primary" />
        </h1>
        <h1>
          secondary <Button type="secondary" />
        </h1>
      </div>
      <hr />
      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */}
        <Alert type="a" />
        <br></br>
        <Alert type="b" />
        <br></br>
        <Alert type="c" />
        <br></br>
        <Alert type="d" />
      </div>
    </div>
  );
}
export default App;
