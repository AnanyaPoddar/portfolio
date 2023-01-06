import React from "react"
import {languages, tools} from "../skills.js"

function Skills() {
  return (
    <div id="skills">
        <h1 className="heading" data-aos="fade-up" data-aos-offset="-30px"><span>Skills</span></h1>
        <div className="skills-container">
            <div className="languages">
                <h4>Languages and Databases</h4>
                <ul className="langs">{languages && languages.map((lang) => <li key={lang} className="lang">{lang}</li>)}</ul>
            </div>
            <div className="tools">
                <h4>Tools and Frameworks</h4>
                <ul className="langs">{tools && tools.map((tool) => <li key={tool} className="lang">{tool}</li>)}</ul>
            </div>
        </div>
    </div>
  )
}

export default Skills;