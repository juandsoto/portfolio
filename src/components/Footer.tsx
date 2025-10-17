
export const Footer = () => {
	return (
		<footer className="w-full bg-dark text-light dark:bg-light/10 p-8 sm:flex gap-8 md:items-center md:justify-between">
			<span className="text-center block">© { new Date().getFullYear() }
				<a href="https://github.com/juandsoto" target='_blank' className="hover:underline"> Juan David Soto</a>. All Rights Reserved.
			</span>
			<ul className="flex flex-col xs:flex-row items-center justify-center gap-4 text-sm sm:text-base mt-3 sm:mt-0 whitespace-nowrap">
				<li>
					<a href="#" className="hover:underline">Home</a>
				</li>
				<li>
					<a href="#experience" className="hover:underline">Experience</a>
				</li>
				<li>
					<a href="#skills" className="hover:underline">Skills</a>
				</li>
				<li>
					<a href="#projects" className="hover:underline">Personal Projects</a>
				</li>
				<li>
					<a href="#certificates" className="hover:underline">Certificates</a>
				</li>
			</ul>
		</footer>
	);
}