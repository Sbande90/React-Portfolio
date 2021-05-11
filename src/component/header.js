import React, { useEffect } from "react";
import resumeImg from "./My resume.pdf"

function header() {

// useEffect(()=>{
//     document.getElementById("flex").style.display="none";
// })






  return (

      <>

<nav class="navbar navbar-expand-lg navbar-light bg-light" id="flex">
        <div class="container-fluid">
            <button class="navbar-toggler" id="toggler1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">

                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                        <a className="navbar-brand" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="navbar-brand" href="/about">About</a>
                    </li>
                    {/* <!-- <li className="nav-item">
                        <a className="navbar-brand" href="#skills">Skills</a>
                    </li> --> */}
                    <li className="nav-item">
                        <a className="navbar-brand" href="/project">Prjects</a>
                    </li>
                    <li className="nav-item">
                        <a className="navbar-brand" href="/contact">Contacts</a>
                    </li>
                    <li className="nav-item">
                        <a href={resumeImg} className="navbar-brand" target="_blank">Resume</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>



    <nav className="navbar navbar-expand-lg navbar-light bg-light" id="flex1">
        <div className="container-fluid">
            <button className="navbar-toggler" id="toggler2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo00"
                aria-controls="navbarTogglerDemo00" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo00">

                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                     {/* <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">About</a>
                    </li>  */}
                    <li className="nav-item">
                        <a className="navbar-brand" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="navbar-brand" href="/about">About</a>
                    </li>
                    {/* <!-- <li className="nav-item">
                        <a className="navbar-brand" href="#skills">Skills</a>
                    </li> --> */}
                    <li className="nav-item">
                        <a className="navbar-brand" href="/project">Prjects</a>
                    </li>
                    <li className="nav-item">
                        <a className="navbar-brand" href="/contact">Contacts</a>
                    </li>
                    <li className="nav-item">
                        <a href={resumeImg} className="navbar-brand" target="_blank">Resume</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </>
  );
}

export default header;