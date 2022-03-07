export default function Educations() {
  return (
    <div className="card primary">
      <div className="card-header">
        <h2 className="card-title">Education</h2>
      </div>
      <div className="card-body space-y-4" id="education">
        <div className="education-content">
          <h4 className="text-lg font-medium">Software Engineering</h4>
          <div className="education-school">
            <h5>School of Internet</h5>
            <span></span>
            <h5>2009 January - Still learning</h5>
          </div>
          <p className="education-description">
            Teaching your self how to <strong>code</strong> isn't something
            everybody is doing. It requires lots of
            <strong>dedication</strong> and <strong>motivation</strong>.
          </p>
        </div>
        <div className="education-content">
          <h4 className="text-lg font-medium">Bachelor of Commerce</h4>
          <div className="education-school">
            <h5>University of Delhi</h5>
            <span></span>
            <h5>2009 - 2013</h5>
          </div>
          <p className="education-description">
            I couldn't get <strong>Science College</strong> due to education
            system of India, rather than compromising with my passion, I chose
            to <strong>teach</strong> myself and learnt how to
            <strong>code</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
