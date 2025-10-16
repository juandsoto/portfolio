import { GitHub, LinkedIn } from '@mui/icons-material';

function Networking() {
	return (
		<>
			<a className="icon social-media-button" href="https://github.com/juandsoto" target="_blank">
				<GitHub />
			</a>
			<a
				className="icon social-media-button"
				href="https://www.linkedin.com/in/juan-david-soto-carmona-287a89206"
				target="_blank"
			>
				<LinkedIn className='text-[#0967c2]'/>
			</a>
		</>
	);
}

export default Networking;