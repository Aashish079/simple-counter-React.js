import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import Button from "@mui/material/Button";

function App() {
  const [state, setState] = useState(0);
  const ClickHandlerInc = () => {
    setState((prevValue) => {
      return (prevValue += 1);
    });
  };
  const ClickHandlerDec = () => {
    setState((prevValue) => {
      if (prevValue > 0) {
        return (prevValue -= 1);
      } else {
        return prevValue;
      }
    });
  };

  return (
    // <div className="app">
    <div className="container">
      <div className="content">
        <h1>{state}</h1>
        <div className="btn-div">
          <span className="btn">
            <Button className="btn-green" onClick={ClickHandlerInc}>
              <AddIcon />
            </Button>
          </span>
          <span className="btn">
            <Button className="btn-red" onClick={ClickHandlerDec}>
              <DeleteIcon />
            </Button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
