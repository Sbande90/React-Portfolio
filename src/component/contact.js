import React from "react";
import lkImg from "../images/link1.png";
import gtImg from "../images/GitHub.jpeg";

function contact() {
  return (
    <section id="contact">
        <h1 id="contact-header">CONTACT</h1>
        <ul id="contact-info">
            <li id="contact-email">
                <a className="text-lowercase" href="mailto:salfoband90@gamil.com">
                    {/* <!-- Salfoband90@ --> */}
                    <strong id="com">Salfoband90@gmail.com</strong>
                </a>
            </li>
            <li ><a href="tel:9739051787" id="number">9739051787</a></li>
            <li>
                <a id="linked" target="_blank" href="https://www.linkedin.com/in/salfo-bande-5a203a156/"><img src={lkImg}width="35px" style={{margin: "5px 10px"}}/></a>
                <span id="bar">&</span>
                <a id="git" target="_blank" href="https://github.com/sbande90"><img src={gtImg}width="35px" style={{margin: "5px 10px"}}/></a>
            </li>
        </ul>
        </section>
  );
}

export default contact;
