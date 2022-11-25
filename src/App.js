import "./App.css";
import Quiz from "./quiz";

function App() {
  return (
    <div className="App">
      <Quiz />
      <div>
        <footer>
          This project was coded by Ariola Markou and is
          <a
            href="https://github.com/ariolam/thebagsgame"
            target="_blank"
            rel="noreferrer"
            title="Github repository"
          >
            {" "}
            open-sourced on GitHub{" "}
          </a>
          and hosted on
          <a
            href="https://app.netlify.com/teams/ariolam/overview?_ga=2.31828414.1222677229.1657026152-283144925.1646049587"
            target="_blank"
            rel="noreferrer"
            title="Netlify profile"
          >
            {" "}
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
