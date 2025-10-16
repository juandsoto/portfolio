
import { Close, DarkModeOutlined, HomeOutlined, LightModeOutlined, Menu } from "@mui/icons-material";
import { Networking, Picture } from "components";
import { useBreakpoint } from "hooks";
import { useEffect, useState } from "react";
import useStore from "store";

function Header() {
	const { theme, setTheme } = useStore();
	const breakpoint = useBreakpoint();
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const toggleMenu = () => setIsMenuOpen(prev => !prev);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			setIsScrolled(scrollTop > 20);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={ ["fixed z-40 left-1/2 -translate-x-1/2 w-full bg-light dark:bg-dark", isScrolled && 'shadow dark:shadow-gray-700'].join(' ') }>
			{ breakpoint.sm() ? (
				<div className="section max-w-6xl">
					<div className="flex justify-between items-center">
						{ isMenuOpen ? (
							<Close className="icon mb-1 cursor-pointer" onClick={ toggleMenu } />
						) : (
							<Menu className="icon mb-1 cursor-pointer" onClick={ toggleMenu } />
						) }
						<div className="flex gap-4 items-center">
							<Networking />
							{ theme === "light" ? (
								<span className="icon">
									<LightModeOutlined className="cursor-pointer text-secondary drop-shadow" onClick={ () => setTheme("dark") } />
								</span>
							) : (
								<span className="icon">
									<DarkModeOutlined className="cursor-pointer text-secondary drop-shadow" onClick={ () => setTheme("light") } />
								</span>
							) }
						</div>
					</div>
					<div
						className={
							["bg-light dark:bg-dark mt-4 w-fit mx-auto", isMenuOpen ? 'h-48 mobile-breakpoint:h-12' : 'h-0'].join(' ')
						}
						style={ {
							visibility: isMenuOpen ? 'visible' : 'hidden',
							opacity: isMenuOpen ? '1' : '0',
							transition: 'height .3s ease, opacity .3s ease .3s',
							pointerEvents: isMenuOpen ? 'auto' : 'none'
						} }
					>
						<ul className="flex flex-col mobile-breakpoint:flex-row items-center gap-6">
							<li>
								<a href="#experience" onClick={ toggleMenu }>Experience</a>
							</li>
							<li>
								<a href="#skills" onClick={ toggleMenu }>Skills</a>
							</li>
							<li>
								<a href="#projects" onClick={ toggleMenu }>Personal Projects</a>
							</li>
							<li>
								<a href="#certificates" onClick={ toggleMenu }>Certificates</a>
							</li>
						</ul>
					</div>
				</div>
			) : (
				<div className="section max-w-6xl mx-auto flex justify-between items-center">
					<div className="w-8">
						<a href="#"><HomeOutlined className="text-secondary" fontSize="medium" /></a>
					</div>
					<ul className="flex items-center gap-6">
						<li>
							<a href="#experience">Experience</a>
						</li>
						<li>
							<a href="#skills">Skills</a>
						</li>
						<li>
							<a href="#projects">Personal Projects</a>
						</li>
						<li>
							<a href="#certificates">Certificates</a>
						</li>
					</ul>
					<div className="flex gap-4 items-center">
						{ theme === "light" ? (
							<span className="icon">
								<LightModeOutlined className="cursor-pointer text-secondary drop-shadow" onClick={ () => setTheme("dark") } />
							</span>
						) : (
							<span className="icon">
								<DarkModeOutlined className="cursor-pointer text-secondary drop-shadow" onClick={ () => setTheme("light") } />
							</span>
						) }
					</div>
				</div>
			) }
		</div >
	);
}

export default Header;