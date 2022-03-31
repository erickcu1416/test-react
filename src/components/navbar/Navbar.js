import { NavLink } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';
import { TOKEN_NAME_STORAGE } from '../../pages/LoginPage/constants/constants';
import './navbar.css';

export default function Navbar() {
	const { removeItem } = useLocalStorage();
	return (
		<div>
			<nav className='navbar navbar-expand-lg navbar-light bg-light'>
				<div className='container-fluid'>
					<div className='collapse navbar-collapse' id='navbarNav'>
						<ul className='navbar-nav'>
							<li className='nav-item'>
								<NavLink
									to='/'
									className={({ isActive }) =>
										isActive ? ' nav-link active' : 'nav-link'
									}
								>
									EmployeesPage
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink
									to='/upload'
									className={({ isActive }) =>
										isActive ? ' nav-link active' : 'nav-link'
									}
								>
									UploadPage
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink
									onClick={() => {
										removeItem(TOKEN_NAME_STORAGE);
									}}
									to='/login'
									className='nav-link'
								>
									Logout
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}
