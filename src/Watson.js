import data from "./watsonLog.json";
import "./App.css";

function Watson() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <div>id : {data.id}</div>
          <div>start : {data.start}</div>
          <div>stop : {data.stop}</div>
        </p>
      </header>
    </div>
  );
}

export default Watson;
