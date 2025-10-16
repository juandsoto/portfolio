import { Circle } from '@mui/icons-material';
import { useBreakpoint } from 'hooks';

function Dot() {

	return (
		<Circle className="text-secondary" sx={ { fontSize: "6px"}} />
	);
}

export default Dot;