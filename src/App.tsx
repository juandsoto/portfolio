import { Footer, Header } from "components";
import { Courses, Experiences, Main, Projects, Skills } from "screens";

function App() {
	return (
		<div className="max-w-screen-2xl mx-auto flex flex-col gap-8">
			<Header />
			<Main />
			<Experiences />
			<Skills />
			<Projects />
			<Courses />
			<Footer />
		</div>
	);
}

export default App;
