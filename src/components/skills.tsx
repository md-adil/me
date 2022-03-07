import { Fragment } from "react";
import skills, { ISkill } from "./../data/skills";

function Skill({ skill }: { skill: ISkill }) {
  return (
    <>
      <span>{skill.name}</span>
      <span className="pull-right">{skill.percent}%</span>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow={skill.percent}
          aria-valuemin={0}
          aria-valuemax={100}
          style={{ width: `${skill.percent}%` }}
        ></div>
      </div>
    </>
  );
}
export default function Skills() {
  return (
    <div className="card primary">
      <div className="card-header">
        <h2 className="card-title">Skills</h2>
      </div>
      <div className="card-body" id="skill-overview">
        {skills.map((skill, i) => (
          <Skill skill={skill} key={i} />
        ))}
        <span>
          <a href="#skills-node-js">Nodejs</a> /
          <a href="#skills-mongodb">MongoDB</a>
        </span>
        <span className="pull-right">70%</span>
        <div className="progress">
          <div
            className="progress-bar progress-bar-primary"
            role="progressbar"
            aria-valuenow={70}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ width: "70%" }}
          ></div>
        </div>
        <span>
          <a href="#skills-php">PHP</a> /<a href="#skills-mysql">MySQL</a>
        </span>
        <span className="pull-right">90%</span>
        <div className="progress">
          <div
            className="progress-bar progress-bar-primary"
            role="progressbar"
            aria-valuenow={70}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ width: "90%" }}
          ></div>
        </div>
        <span>
          <a href="#skills-react">React</a>
        </span>
        <span className="pull-right">85%</span>
        <div className="progress">
          <div
            className="progress-bar progress-bar-primary"
            role="progressbar"
            aria-valuenow="85"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "85%" }}
          ></div>
        </div>
        <span>
          <a href="#skills-javascript">Vue</a>
        </span>
        <span className="pull-right">65%</span>
        <div className="progress">
          <div
            className="progress-bar progress-bar-primary"
            role="progressbar"
            aria-valuenow="95"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "65%" }}
          ></div>
        </div>
        <span>
          <a href="#skills-python">Python</a>
        </span>
        <span className="pull-right">50%</span>
        <div className="progress">
          <div
            className="progress-bar progress-bar-primary"
            role="progressbar"
            aria-valuenow="95"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "50%" }}
          ></div>
        </div>
        <div className="text-right">
          <a href="#" className="btn-more-skills white">
            Please checkout full skills with details.
          </a>
        </div>
      </div>
    </div>
  );
}
