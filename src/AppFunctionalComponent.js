import { useState } from "react";
import "./App.css";

function App(props) {
  const [currentCount, updateCurrentCount] = useState(0);

  const [userName, setUserName] = useState("Guest");
  function handleIncrement() {
    updateCurrentCount(currentCount + 1);
  }

  return (
    <form
      className="App"
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        setUserName(formProps.userName);
      }}
    >
      <h2>Welcome, {userName}</h2>
      <input
        name="userName"
        type="text"
        // onChange={(e) => setUserName(e.target.value)}
      ></input>
      <p>Count is</p>
      <h3>{currentCount}</h3>

      <button type="submit" onClick={() => handleIncrement()}>
        Increment
      </button>
    </form>
  );
}

export default App;
