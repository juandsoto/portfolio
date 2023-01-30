import { Courses, Experiences, Main, Projects, Skills } from "screens";

function App() {
  return (
    <div className="pb-4">
      <Main />
      <div className="flex flex-col gap-8">
        <Experiences />
        <Skills />
        <Projects />
        <Courses />
      </div>
    </div>
  );
}

export default App;
