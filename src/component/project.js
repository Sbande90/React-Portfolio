import "../App.css";
import petImage from "../images/pet.png"
import eatImage from "../images/eat.png"
import refactorImage from "../images/refactor.png"
import dplannerImage from "../images/dplanner.png"
import extendImage from "../images/extend.png"
import codeImage from "../images/code.png"

function App() {
  const mySites = [
    {
      title: "Pet-Speech-Health",
      gitHubLink: "https://github.com/Sbande90/project",
      herokuLink: "https://pet-speak-health.herokuapp.com/",
      libraries: ["Bootstrap", "mysql", "nodejs"],
      img: petImage,
      width: 300,
      height: 200,
    },
    {
      title: "E-commerce-back-end",
      gitHubLink: "https://github.com/Sbande90/E-Commerce-Back-End",
      herokuLink: "https://e-commerce-back-ends.herokuapp.com/",
      libraries: ["Bootstrap", "mysql", "nodejs"],
      img: eatImage,
      width: 300,
      height: 200,
    },
    {
      title: "code-refactor",
      gitHubLink: "https://github.com/Sbande90/code-refactor",
      herokuLink: "https://sbande90.github.io/code-refactor/",
      libraries: ["html", "javasript", "css"],
      img: refactorImage,
      width: 300,
      height: 200,
    },
    {
      title: "day-planner",
      gitHubLink: "https://github.com/Sbande90/-Day-Planner",
      herokuLink: " https://sbande90.github.io/-Day-Planner/",
      libraries: ["html", "javasript", "css"],
      img: dplannerImage,
      width: 300,
      height: 200,
    },
    {
      title: "extendedplay",
      gitHubLink: "https://github.com/Sbande90/project",
      herokuLink: " https://joshuajword.github.io/extendedplay/",
      libraries: ["html", "javasript", "css", "nodejs"],
      img: extendImage,
      width: 300,
      height: 200,
    },
    {
      title: "code-quiz",
      gitHubLink: " https://github.com/Sbande90/code-quiz",
      herokuLink: " https://sbande90.github.io/code-quiz/",
      libraries: ["html", "javasript", "css"],
      img: codeImage,
      width: 300,
      height: 200,
    },
  ];
  return (
    <div className="App">
      <header className="jumbotron">
        <h1>
          {" "}
          <strong>Salfo Bande</strong>
        </h1>
      </header>
      <div className="container">
        <div className="row">
          {mySites.map((site) => (
            <div className="col-sm-12 col-md-4" style={{marginBottom:"5px"}}>
              <div className="card">
                <img
                  src={site.img}
                  className="card-img-top"
                  alt={site.title}
                  width={site.width}
                  height={site.height}
                  marginBottom={site.marginBottom}
                />
                <div className="card-body">
                  <h5 className="card-title">{site.title}</h5>
                  <p>Libraries I used</p>
                  <ul className="list-unstyled">
                    {site.libraries.map((lib) => (
                      <li className="card-text">{lib}</li>
                    ))}
                  </ul>
                  <a href={site.gitHubLink} className="btn btn-primary">
                    Github Repo
                  </a>
                  <a href={site.herokuLink} className="btn btn-primary" style={{margin: "5px"}}>
                    Heroku Link
                  </a>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
