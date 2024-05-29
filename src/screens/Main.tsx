import { KeyboardArrowDown, PictureAsPdf } from "@mui/icons-material";
import { Networking, Picture } from "components";
import cv from 'docs/resume.pdf';

const Main = () => {
	return (
		<div className="section flex flex-col">
			<div className="mt-24 flex justify-center lg:justify-start">
				<div className="hidden sm:flex flex-col gap-8 items-center justify-center">
					<Networking />
				</div>
				<div className="sm:pl-8 lg:flex-1 flex items-center justify-between gap-8">
					<div className="flex-1 flex flex-col gap-2 sm:gap-8">
						<div className="flex items-center gap-4 sm:gap-8">
							<div className="lg:hidden w-8 xs:w-12 sm:w-16">
								<Picture />
							</div>
							<h1 className="font-bold tracking-wide">Juan David Soto</h1>
						</div>
						<h2 className="text-secondary capitalize font-semibold pre-line">
							Software Engineer
						</h2>
						<div className="max-w-xl">
							<p>
								<span className="font-bold text-lg pr-2">Hi!</span>I'm Juan David.
							</p>
							<p>
								Systems Engineer from Universidad del Valle with over a year of hands-on experience in web development, specializing in technologies such as React.js, TypeScript, and Node.js.
								<br />
								With a solid foundation in coding, problem-solving, and teamwork, I am dedicated to driving innovative results. My commitment to precision and attention to detail ensures the delivery of high-quality software solutions that meet both user needs and business objectives. I excel in collaborating effectively with cross-functional teams to achieve project goals.
							</p>
						</div>
						<div className="mt-2 flex flex-wrap items-stretch gap-2">
							<a className="btn-secondary px-6 py-4 flex items-center gap-4" href="#projects">
								Check out my work!
								<KeyboardArrowDown />
							</a>
							<a className="border border-secondary rounded-lg px-6 py-4 flex items-center gap-2" href={ cv } download="Curriculum Vitae - Juan David Soto">
								Download CV
								<PictureAsPdf className="text-red-700" />
							</a>
						</div>
					</div>
					<div className="hidden lg:block w-56 2xl:w-72">
						<Picture />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
