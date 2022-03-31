import { HashRouter } from 'react-router-dom';

import './App.css';
import App from './components/App/App';

function Root() {
	return (
		<HashRouter>
			<App />
		</HashRouter>
	);
}

export default Root;
