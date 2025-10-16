import { Footer, Header } from "components";
import { Courses, Experiences, Main, Projects, Skills } from "screens";

function App() {
  return (
    <div className="space-y-16">
      <div className="max-w-screen-2xl mx-auto flex flex-col gap-16">
        <Header />
        <Main />
        <Experiences />
        <Skills />
        <Projects />
        <Courses />
      </div>
      <Footer />
    </div>
  );
}

export default App;
