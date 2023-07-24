import { Route, Routes } from 'react-router-dom';
import './assets/styles/main.css';
import { Header } from './components/Header';
import { Character } from './pages/Character';
import { Location } from './pages/Location';
import { Episode } from './pages/Episode';
import { SinglePage } from './pages/SinglePage/SinglePage';

function App() {
	return (
		<>
			<Header />
			<div className='container'>
				<Routes>
					<Route path='/' element={<Character />} />
					<Route path='/location' element={<Location />} />
					<Route path='/episode' element={<Episode />} />
					<Route path='/:id' element={<SinglePage />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
