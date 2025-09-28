import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";

export default function App() {
  return (
    <div className="app">
      <header className="app-header">Demo React App</header>

      <main className="container">
        <LoginPage />
        {/* <HomePage /> */}
      </main>
    </div>
  );
}
