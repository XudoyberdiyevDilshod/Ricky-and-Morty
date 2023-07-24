import React from 'react';
import { ButtonFilter } from '../ButtonFilter';

export const Filter = ({ setActivePage, setStatus, setGender, setSpecies }) => {
	const text = ['alive', 'dead', 'unknown'];
	const gender = ['female', 'male', 'genderless', 'unknown'];
	const species = [
		'Human',
		'Alien',
		'Humanoid',
		'Popybutthole',
		'Mythological',
		'Unknown',
		'Animal',
		'Disease',
		'Robot',
		'Cronenberg',
		'Planet',
	];

	return (
		<div>
			<h3 className='text-center'>Filter</h3>
			<p
				onClick={() => {
					setStatus('');
					setGender('');
					setSpecies('');
					setActivePage(1);
					window.location.reload(false);
				}}
				style={{ cursor: 'pointer' }}
				className='text-center text-primary text-decoration-underline'
			>
				clear all
			</p>

			<div className='accordion' id='accordionExample'>
				<div className='accordion-item'>
					<h2 className='accordion-header'>
						<button
							className='accordion-button'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#collapseOne'
							aria-expanded='true'
							aria-controls='collapseOne'
						>
							Filter by status
						</button>
					</h2>
					<div
						id='collapseOne'
						className='accordion-collapse collapse show'
						data-bs-parent='#accordionExample'
					>
						<div className='accordion-body'>
							{text.map((item, index) => (
								<ButtonFilter
									key={index}
									text={item}
									name='status'
									index={index}
									setState={setStatus}
								/>
							))}
						</div>
					</div>
				</div>
				<div className='accordion-item'>
					<h2 className='accordion-header'>
						<button
							className='accordion-button collapsed'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#collapseTwo'
							aria-expanded='false'
							aria-controls='collapseTwo'
						>
							Filter by species
						</button>
					</h2>
					<div
						id='collapseTwo'
						className='accordion-collapse collapse'
						data-bs-parent='#accordionExample'
					>
						<div className='accordion-body'>
							{species.map((item, index) => (
								<ButtonFilter
									key={index}
									text={item}
									name='species'
									index={index}
									setState={setSpecies}
								/>
							))}
						</div>
					</div>
				</div>
				<div className='accordion-item'>
					<h2 className='accordion-header'>
						<button
							className='accordion-button collapsed'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#collapseThree'
							aria-expanded='false'
							aria-controls='collapseThree'
						>
							Filter by gender
						</button>
					</h2>
					<div
						id='collapseThree'
						className='accordion-collapse collapse'
						data-bs-parent='#accordionExample'
					>
						<div className='accordion-body'>
							{gender.map((item, index) => (
								<ButtonFilter
									key={index}
									text={item}
									name='gender'
									index={index}
									setState={setGender}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
