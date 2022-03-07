export default function Contact() {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Contact</h2>
      </div>
      <div className="contact card-body space-y-4">
        <p>
          <i className="fa fa-map-marker"></i> New Delhi, Delhi, India
        </p>
        <p>
          <a href="tel:+919818128797">
            <i className="fa fa-phone"></i> +91 98 18 128797
          </a>
        </p>
        <p>
          <a href="mailto:adil.sudo@gmail.com" target="fs">
            <i className="fa fa-envelope"></i> adil.sudo@gmail.com
          </a>
        </p>
        <p>
          <a href="https://www.flexispaces.com" target="fs">
            <i className="fa fa-globe"></i> www.flexispaces.com
          </a>
        </p>
        <p>
          <a href="https://yacs.live/connect/admin" target="yacs">
            <i className="fa fa-comment"></i> Live chat
          </a>
        </p>
        <p>
          <a target="resume" href="./resume.pdf">
            <i className="fa fa-file-pdf-o"></i> Resume
          </a>
        </p>
      </div>
    </div>
  );
}
