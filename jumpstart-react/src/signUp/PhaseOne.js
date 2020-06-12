import React, {useState, useEffect} from "react";
// import Button from 'react-bootstrap/button'
import "./PhaseOne.css";

function PhaseOne(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [array, setArray] = useState([]);

  const goNext = () => {
    let _json = [];
    _json.push(userName);
    _json.push(password);
    setArray(_json);
    console.log(array);
  };

  return (
    <div className="formContainer">
      <input
        type="text"
        name="username"
        className="loginBox"
        placeholder="Please choose User Name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="password"
        name="password"
        className="loginBox"
        placeholder="Please choose a password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        variant="primary"
        className="saveButton"
        size="lg"
        onClick={goNext}
      >
        Next
      </button>
    </div>
  );
}
export default PhaseOne;
