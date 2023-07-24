export function Search({ setSearch, setActivePage }) {
	return (
		<div>
			<input
				onChange={(evt) => {
					setActivePage(1);
					setSearch(evt.target.value);
				}}
				type='search'
				placeholder='Type a query...'
				className='form-control w-50 mx-auto mb-5 rounded-pill'
			/>
		</div>
	);
}
