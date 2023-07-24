import { useEffect, useState } from 'react';
import { Card } from '../../components/Card';
import { InputGroup } from '../../components/Search';

export const Location = () => {
	const [number, setNumber] = useState(1);
	const [results, setResults] = useState([]);
	const [data, setData] = useState([]);
	let { dimension, type, name } = data;
	let api = `https://rickandmortyapi.com/api/location/${number}`;
	useEffect(() => {
		(async () => {
			const data = await fetch(api).then((res) => res.json());
			setData(data);
			const location = await Promise.all(
				data.residents.map((el) => {
					return fetch(el).then((res) => res.json());
				}),
			);
			setResults(location);
		})();
	}, [api]);

	return (
		<>
			<h2 className='text-center h2 my-3'>Location: {name}</h2>
			<h5 className='text-center'>
				Air Date: {dimension === '' ? 'Unknown' : dimension}
			</h5>
			<h5 className='text-center'>Type: {type}</h5>
			<div className='row'>
				<div className='col-2'>
					<h4 className='text-center mb-4'>Pick Location</h4>
					<InputGroup name='Location' changeID={setNumber} total={126} />
				</div>
				<div className='col-10'>
					{results?.length ? (
						<div className='d-flex flex-wrap gap-3'>
							{results.map((item) => (
								<Card
									id={item.id}
									key={item.id}
									image={item.image}
									location={item.name}
									status={item.status}
								/>
							))}
						</div>
					) : (
						<h3>Location not found</h3>
					)}
				</div>
			</div>
		</>
	);
};
