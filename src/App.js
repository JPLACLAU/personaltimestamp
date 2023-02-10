import logo from "./logo.svg";
import data from "./watsonLog.json";
import "./App.css";

export const personalTimeStamp = () => {
  return (
    <>
      <div>
        <div>id : {data.id}</div>
        <div>start : {data.start}</div>
        <div>stop : {data.stop}</div>
        <div>
          <label>Country :</label>
        </div>
      </div>
    </>
  );
};
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
