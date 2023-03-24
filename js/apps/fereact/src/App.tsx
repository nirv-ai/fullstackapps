import "./App.css";
import logo from "./logo.svg";

const whatev: string = "hello";

function App() {
  return (
    <div className="App" role="main">
      <article className="App-article">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Welcome to React!</h3>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {whatev}
        </a>
      </article>
    </div>
  );
}

export default App;
