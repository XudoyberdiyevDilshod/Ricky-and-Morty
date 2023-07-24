import React, { useEffect, useState } from 'react';
import { Card } from '../../components/Card';
import { InputGroup } from '../../components/Search';

export const Episode = () => {
	const [data, setData] = useState([]);
	const [results, setResults] = useState([]);
	const { air_date, name } = data;
	let [id, setId] = useState(1);

	console.log(results);
	let api = `https://rickandmortyapi.com/api/episode/${id}`;
	useEffect(() => {
		(async () => {
			let data = await fetch(api).then((res) => res.json());
			setData(data);

			let character = await Promise.all(
				data.characters.map((el) => {
					return fetch(el).then((res) => res.json());
				}),
			);
			setResults(character);
		})();
	}, [api]);
	return (
		<>
			<h2 className='text-center h2 my-3'>Episode name: {name}</h2>
			<h5 className='text-center'>
				Air Date: {air_date === '' ? 'Unknown' : air_date}
			</h5>
			<div className='row'>
				<div className='col-2'>
					<h4 className='text-center mb-4'>Pick Location</h4>
					<InputGroup name='Episode' changeID={setId} total={51} />
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
						<h3>Episode not found</h3>
					)}
				</div>
			</div>
		</>
	);
};
