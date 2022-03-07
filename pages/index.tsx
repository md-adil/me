import About from "../src/components/about";
import Contact from "../src/components/contact";
import DetailedSkills from "../src/components/detailed-skills";
import Educations from "../src/components/educations";
import Experiences from "../src/components/experiences";
import Languages from "../src/components/languages";
import Layout from "../src/components/layout";
import Skills from "../src/components/skills";

export default function Home() {
  return (
    <Layout>
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 w-full lg:w-1/2">
            <About />
          </div>
          <div className="p-4 w-full lg:w-1/2">
            <Skills />
          </div>
          <div className="p-4 w-full">
            <DetailedSkills />
          </div>
          <div className="p-4 w-full lg:w-2/3">
            <Educations />
          </div>
          <div className="p-4 w-full lg:w-1/3">
            <Languages />
          </div>
          <div className="p-4 w-full lg:w-1/3">
            <Contact />
          </div>
          <div className="p-4 w-full lg:w-2/3">
            <Experiences />
          </div>
        </div>
      </div>
    </Layout>
  );
}
