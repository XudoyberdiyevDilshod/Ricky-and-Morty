import { useEffect } from 'react';
import { useState } from 'react';
import { Card } from '../../components/Card';
import { Search } from '../../components/Search';
import { Filter } from '../../components/Filter';
import { Pagination } from '../../components/Pagination';

export const Character = () => {
	const [activePage, setActivePage] = useState(1);
	const [status, setStatus] = useState('');
	const [gender, setGender] = useState('');
	const [species, setSpecies] = useState('');
	const [data, setData] = useState([]);
	const [search, setSearch] = useState('');
	const { info, results } = data;
	console.log(results);
	let api = `https://rickandmortyapi.com/api/character/?page=${activePage}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

	useEffect(() => {
		(async () => {
			const data = await fetch(api).then((res) => res.json());
			setData(data);
		})();
	}, [api]);

	return (
		<>
			<h2 className='text-center h2 my-3'>Character</h2>
			<Search setSearch={setSearch} setActivePage={setActivePage} />
			<div className='row'>
				<div className='col-2'>
					<Filter
						setSpecies={setSpecies}
						setStatus={setStatus}
						setGender={setGender}
						setActivePage={setActivePage}
					/>
				</div>
				<div className='col-10'>
					{results?.length ? (
						<div className='d-flex flex-wrap gap-3'>
							{results.map((item) => (
								<Card
									id={item.id}
									key={item.id}
									image={item.image}
									name={item.name}
									location={item.location.name}
									status={item.status}
								/>
							))}
						</div>
					) : (
						<h3>Character not found</h3>
					)}
				</div>
			</div>
			<Pagination
				activePage={activePage}
				setActivePage={setActivePage}
				pages={info?.pages}
			/>
		</>
	);
};
