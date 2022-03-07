interface IProps {
  children: JSX.Element;
}

export default function Layout({ children }: IProps) {
  return (
    <div>
      <header>
        <div className="container mx-auto p-4">
          <div
            className="flex justify-center items-center text-white text-center"
            style={{ height: "80vh" }}
          >
            <Header />
          </div>
        </div>
      </header>
      {children}
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container mx-auto">
        <div className="text-white text-center my-10">
          <p className="my-2">Copyright &copy; 2020 Adil</p>
          <ul className="social-icons flex justify-center">
            <li>
              <a
                target="facebook"
                href="https://www.facebook.com/adil.sudo"
                className="fa fa-facebook"
              ></a>
            </li>
            <li>
              <a
                target="twitter"
                href="https://twitter.com/_MdAdil"
                className="fa fa-twitter"
              ></a>
            </li>
            <li>
              <a
                target="github"
                href="https://github.com/md-adil"
                className="fa fa-github"
              ></a>
            </li>
            <li>
              <a
                target="linked"
                href="https://www.linkedin.com/in/md-adil/"
                className="fa fa-linkedin"
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function Header() {
  return (
    <div className="photos">
      <a
        data-fancybox="gallery"
        className="flex justify-center"
        href="./images/me-large.jpg"
      >
        <img
          className="img-responsive rounded-circle tm-border rounded-full h-44 w-44 object-cover shadow-lg border-2 border-white"
          src="./images/me.jpg"
          alt="Adil"
        />
      </a>
      <hr className="my-4" />
      <h1 className="text-5xl font-medium text-primary text-shadow drop-shadow">
        Hi, I am Adil
      </h1>
      <h2 className="text-shadow text-4xl mt-4">Software Engineer</h2>
    </div>
  );
}
