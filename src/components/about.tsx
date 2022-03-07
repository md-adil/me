export default function About() {
  return (
    <div className="card">
      <div className="card-body about space-y-2">
        <div className="">
          <h3 className="text-primary text-xl">Love to code.</h3>
          <h2 className="text-3xl">Degree don't define skills.</h2>
        </div>
        <p>Always enjoy new technologies and connect with people.</p>
        <p>
          Self taught Computer Programmer, Motivated and Dedicated to Computer
          and Science, Code Enthusiasts, Philanthropist, Tech Junkie and
          Gymnast.
        </p>
        <p>
          Please checkout my lockdown project. <br />
          <a target="yacs" href="https://yacs.live">
            YACS
          </a>{" "}
          talk to anyone without sharing contacts.
        </p>
        <p>
          Latest opensource project for Node, Mongo, and Typescript
          <a target="mongojack" href="https://www.npmjs.com/package/mongojack">
            npmjs.com/package/mongojack
          </a>
        </p>
        <div className="about-more" style={{ display: "none" }}>
          <div>
            Date of Birth: <strong>Oct 05, 1991</strong>
          </div>
        </div>
      </div>
      <div className="card-footer -mx-3">
        <div className="flex space-x-1">
          <a className="btn" href="#experiences" data-scroll-to="#experiences">
            Experience
          </a>
          <a className="btn" href="#education" data-scroll-to="#education">
            Education
          </a>
          <a className="btn" href="#contacts" data-scroll-to="#contacts">
            Contacts
          </a>
          <a className="btn btn-about-more" href="#">
            Personal Details
          </a>
        </div>
      </div>
    </div>
  );
}
