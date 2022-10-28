import "./App.css";
import { useState } from "react";
const users = [
  { userName: "derik", pasword: "1234" },
  { userName: "Aertur", pasword: "567" },
];
function App() {
  const [isLogdIn, setIsLogdIn] = useState(false);
  const [pasword, setPasword] = useState("");
  const [userName, setUserName] = useState("");
  function toggleLogIn() {
    if (
      users.some(
        (elem) => elem.userName === userName && elem.pasword === pasword
      )
    )
      setIsLogdIn((old) => !old);
    else {
      alert("wrog input");
      setPasword("");
      setUserName("");
    }
  }
  function logOut() {
    setIsLogdIn(false);
  }
  return (
    <div>
      <header>
        {!isLogdIn ? (
          <button>login</button>
        ) : (
          <div>
            <button onClick={logOut}> logout</button>
            <h3>{userName}</h3>
          </div>
        )}
      </header>
      {!isLogdIn ? (
        <div className="login-form">
          <input
            placeholder="login"
            onChange={(event) => setUserName(event.target.value)}
            value={userName}
          />
          <input
            placeholder="pasword"
            onChange={(event) => setPasword(event.target.value)}
            value={pasword}
          />
          <button onClick={toggleLogIn}>login</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
