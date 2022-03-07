export default function Experiences() {
  return (
    <div className="card primary" id="experiences">
      <div className="card-header">
        <h2 className="card-title">Experiences</h2>
      </div>
      <div className="card-body">
        <div>
          <h4 className="experience-title accent">Sr. Software Engineer</h4>
          <h5>BigRadar</h5>
          <span></span>
          <h5>2017 April - Present</h5>
          <p className="education-description">
            BigRadar's modern chat experience makes the customers feel like pro
            support, even if you're away.
          </p>
          <ul>
            <li>Tech Lead</li>
            <li>System Architect</li>
            <li>Code</li>
          </ul>
        </div>
        <div className="expandable" style={{ display: "none" }}>
          <div>
            <h4 className="experience-title accent">Lead Software Engineer</h4>
            <h5>FlexiSpaces</h5>
            <span></span>
            <h5>2018 January - Current</h5>
            <p className="education-description">
              FlexiSpaces is an on-demand platform to book meeting room,
              meetups, coworking spaces etc. It's a marketplace where space
              owners (hosts) can find new customers for their offerings.
            </p>
            <ul>
              <li>Tech Lead</li>
              <li>System Architect</li>
              <li>Code</li>
            </ul>
          </div>
          <div>
            <h4 className="experience-title accent">Director and Tech Lead</h4>
            <h5>Bigly Technology Pvt. Ltd.</h5>
            <span></span>
            <h5>2017 March - Present</h5>
            <div className="education-description">
              Bigly is India's leading company who knows online seller pain and
              try to find every possible solutions for sellers to from increase
              sell to manage returns.
            </div>
            <ul>
              <li>Tech Lead</li>
              <li>System Architect</li>
              <li>Code</li>
              <li>Assigning sprints to each team member</li>
            </ul>
          </div>
          <div>
            <h4 className="experience-title accent">Sr. Software Developer</h4>
            <h5>Edunuts</h5>
            <span></span>
            <h5>2015 August - 2017 April</h5>
            <p className="education-description">
              Explore Top Colleges, Universities, Coaching Institutes &amp;
              Tutors In India
            </p>
            <ul>
              <li>
                Managing and improving the company's tech stack by choosing
                relevant technologies and frameworks.
              </li>
              <li>Assigning sprints to each team member.</li>
              <li>Optimizing the performance and security of the website.</li>
              <li>R&D for future features.</li>
            </ul>
          </div>
          <div>
            <h4 className="experience-title accent">Sr. Software Developer</h4>
            <h5>GuruInfoways</h5>
            <span></span>
            <h5>2014 - 2015</h5>
            <p className="experience-description">
              We work with startups to enterprises to turn their ideas into
              working products. Our team smartly takes care of frontend,
              backend, mobile.
            </p>
            <ul>
              <li>
                Managing and improving the company's tech stack by choosing
                relevant technologies and frameworks.
              </li>
              <li>Assigning sprints to each team member.</li>
              <li>Optimizing the performance and security of the website.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <a href="#" className="btn text-white btn-expand -mx-2">
          More
        </a>
      </div>
    </div>
  );
}
