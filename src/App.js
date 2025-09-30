import React, { useState, useEffect } from "react";
import Demo from "./components/Reducer demo/ReducerDemo";
import HomePage from "./components/Home/HomePage";
import LoginPage from "./components/Login/LoginPage";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // run once: check localStorage for persisted login state
  useEffect(() => {
    const storedUser = localStorage.getItem("isLoggedIn");
    if (storedUser === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <LoginPage onLogin={loginHandler} />}
        {isLoggedIn && <HomePage onLogout={logoutHandler} />}
      </main>
      {/* <Demo /> */}
    </React.Fragment>
  );
}

export default App;
