import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import Demo from "./components/Reducer demo/ReducerDemo";

export default function App() {
  return (
    <div className="app">
      <header className="app-header">Demo React App</header>

      <main className="container">
        <LoginPage />
        {/* <HomePage /> */}
        {/* <Demo /> */}
      </main>
    </div>
  );
}
