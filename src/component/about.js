import React from "react";
import htmlImg from "../images/html.png";
import cssImg from "../images/css3.png";
import jsImg from "../images/js.png";
import jqueryImg from "../images/jquery.jpeg";
import nodeImg from "../images/node.png";
import herokuImg from "../images/heroku.png";
import gitImg from "../images/GitHub.jpeg";
import mysqlImg from "../images/mysql.jpeg";
import mongoImg from "../images/mongo.png";

function about() {
  return (
    <div id="about">
        <div><h2 id="about-header">About</h2></div>
            <div id="about-block">
                <span id="who-i-am">
                    <span id="photo"> </span>
                    <span id="introduction">I am a Full Stack Web Developer and currently studying at Rutgers University Web Development
                         | Coding Boot Camp. Feel free to check out my portfolio to see all the amazing apps I built during the boot camp program.
                    </span>
                </span>
                <div id="skills">
            <div className="skill"><img src={htmlImg} width="35px" style={{margin: "5px 10px"}} alt="icon"/> <div className="skill1">HTML5</div></div>
            <div className="skill"><img src={cssImg} width="35px" style={{margin: "5px 10px"}} alt="icon"/> <div className="skill1">CSS3</div></div>
            <div className="skill"><img src={jsImg} width="35px" style={{margin: "5px 10px"}} alt="icon"/> <div className="skill1"> JavaScript</div></div>
            <div className="skill"><img src={jqueryImg} width="35px" style={{margin: "5px 10px"}} alt="icon"/> <div className="skill1">jQuery</div></div>
            <div className="skill"><img src={nodeImg} width="35px" style={{margin: "5px 10px"}} alt="icon"/> <div className="skill1"> Node.js</div></div>
            <div className="skill"><img src={herokuImg} width="35px" style={{margin: "5px 10px"}} alt="icon"/> <div className="skill1">Heroku</div></div>
            <div className="skill"><img src={gitImg} width="35px" style={{margin: "5px 10px"}} alt="icon"/> <div className="skill1">Git</div></div>
            <div className="skill"><img src={mysqlImg} width="35px" style={{margin: "5px 10px"}} alt="icon"/> <div className="skill1">MySQL</div></div>
            <div className="skill"><img src={mongoImg} width="35px" style={{margin: "5px 10px"}} alt="icon"/><div className="skill1"> MongoDB</div></div>
                </div>
            </div>
            
       </div>
  );
}

export default about;