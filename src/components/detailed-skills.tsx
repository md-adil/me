export default function DetailedSkills() {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Programing Languages</h3>
        <button className="skill-close icon-btn text-2xl">&times;</button>
      </div>
      <div className="card-body space-y-4">
        <div className="skill" id="skills-php">
          <strong>PHP</strong>
          <div className="skill-description">
            Total workings experience of 5 years.
            <br />
            Frameworks: Laravel <small>(favorite)</small>, Code Ignitor, Slim.
            <br />
            I would love to show you some of my opensource projects
            <br />
            <ul>
              <li>
                <a
                  target="php-truecaller"
                  href="https://packagist.org/packages/md-adil/truecaller-php-sdk"
                >
                  truecaller-php-sdk
                </a>
                Unofficial Truecaller authentication sdk for php and laravel.
              </li>
              <li>
                <a
                  target="php-shyplite"
                  href="https://packagist.org/packages/md-adil/shyplite"
                >
                  Shyplite
                </a>
                Unofficial Shyplite logistic sdk for php and Laravel.
              </li>
            </ul>
            I like CLI stuffs, wrote songs downloader entirely in php
            <a target="songspk" href="https://github.com/md-adil/songspk-dl">
              songspk-dl
            </a>
          </div>
        </div>
        <div className="skill" id="skills-javascript">
          <strong>Javascript</strong>
          <div className="skill-description">
            Total workings experience of 5 Years.
            <br />
            Frameworks: JQuery, React <small>(favorite)</small> and Next, Vue.
          </div>
        </div>
        <div className="skill" id="skills-react">
          <strong>React</strong>
          <div className="skill-description">
            Total workings experience of 4 Years.
            <br />
            The most favorite frontend framework.
            <br />
            <ul>
              <li>Next.js</li>
              <li>Redux</li>
              <li>Prefer functional components over class</li>
            </ul>
          </div>
        </div>
        <div className="skill" id="skills-typescript">
          <strong>Typescript</strong>
          <div className="skill-description">
            The most favorite programming language. working since last 2 years
            and I loved it.
            <br />
            Now I think typescript first before writing any js.
            <br />
            Latest MongoDB ORM
            <a
              target="mongojack"
              href="https://www.npmjs.com/package/mongojack"
            >
              npmjs.com/package/mongojack
            </a>
          </div>
        </div>
        <div className="skill" id="skills-node-js">
          <strong>Node.js</strong>
          <div className="skill-description">
            Technically it's a javascript, but worked on javascript in node
            environment since 4 Years.
            <br />
            Frameworks: Express.js, Koa, Mongoose. <br />
            Express.js is good but as other frameworks like Laravel.
            <br />I tweaked a bit to make more sense for me, you can take a loot
            <a
              target="node-starter"
              href="https://github.com/md-adil/node-starter"
            >
              github.com/md-adil/node-starter
            </a>
            my express development style.
          </div>
        </div>
        <div className="skill" id="skills-cpp">
          <strong>C++</strong>
          <div className="skill-description">
            Mostly worked for IOT.
            <br />
            I wrote some network stuff for FreeRTOS from low level programming.{" "}
            <br />
            Github repo
            <a
              target="embedded-ip"
              href="https://github.com/md-adil/embedded-ip-cpp"
            >
              github.com/md-adil/embedded-ip-cpp
            </a>
            contains following helper.
            <ul>
              <li>JSON parser</li>
              <li>SocketIO client</li>
              <li>Event Driven module like javascript for C++</li>
            </ul>
          </div>
        </div>
        <div className="skill" id="skills-html-css-scss">
          <strong>HTML, CSS, SCSS</strong>
          <div className="skill-description">
            Started working long before PHP.
          </div>
        </div>
        <div className="skill" id="skills-python">
          <strong>Python</strong>
          <div className="skill-description">
            Never worked on any major projects. just cli and scrappers thing,
            since I like Python I can easily switch to this. <br />A small tool
            to configure apache server
            <a
              target="http-server"
              href="https://github.com/md-adil/http-install"
            >
              github.com/md-adil/http-install
            </a>
            .
          </div>
        </div>
        <div className="skill" id="skills-kotlin-java-go-rust">
          <strong>
            Other programming languages just learnt and never got a chance to
            work with.
          </strong>
          <div className="skill-description">Kotlin, Java, Go and Rust.</div>
        </div>
        <div className="skill-heading">
          <strong>Databases</strong>
        </div>
        <div className="skill" id="skills-mysql">
          <strong>MySQL</strong>
          <div className="skill-description">
            Enough experience to work with all programming languages.
          </div>
        </div>
        <div className="skill" id="skills-mongodb">
          <strong>MongoDB</strong>
          <div className="skill-description">Working since Nodejs</div>
        </div>
        <div className="skill-heading">
          <strong>Build tools & version control system</strong>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <div className="skill">
              <strong>GIT</strong>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="skill">
              <strong>Webpack</strong>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="skill">
              <strong>Parcel</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
