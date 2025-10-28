import React, { useContext } from "react";
import Demo from "./components/Reducer demo/ReducerDemo";
import HomePage from "./components/Home/HomePage";
import LoginPage from "./components/Login/LoginPage";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./components/Context/AuthContext";
function App() {
  let context = useContext(AuthContext);

  return (
    //authContext is one of root components so here fragment is no need
    <>
      <MainHeader />
      <main>
        {!context.isLoggedIn && <LoginPage />}
        {context.isLoggedIn && <HomePage />}
      </main>
      {/* <Demo /> */}
    </>
  );
}

export default App;
