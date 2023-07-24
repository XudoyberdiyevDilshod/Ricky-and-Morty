import { Link, NavLink } from 'react-router-dom';
import './Header.css';

export const Header = () => {
	return (
		<header className='site-header'>
			<div className='container'>
				<div className='site-header__inner'>
					<Link className='text-decoration-none text-dark' to='/'>
						The Rick and Morty
					</Link>
					<ul className='site-header__list'>
						<li className='site-header__item'>
							<NavLink
								className={({ isActive }) =>
									isActive
										? 'text-decoration-underline text-dark'
										: 'text-decoration-none text-dark'
								}
								to='/'
							>
								Character
							</NavLink>
						</li>
						<li className='site-header__item'>
							<NavLink
								className={({ isActive }) =>
									isActive
										? 'text-decoration-underline text-dark'
										: 'text-decoration-none text-dark'
								}
								to='/location'
							>
								Location
							</NavLink>
						</li>
						<li className='site-header__item'>
							<NavLink
								className={({ isActive }) =>
									isActive
										? 'text-decoration-underline text-dark'
										: 'text-decoration-none text-dark'
								}
								to='/episode'
							>
								Episode
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
};
