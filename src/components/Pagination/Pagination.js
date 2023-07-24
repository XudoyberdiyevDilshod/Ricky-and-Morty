import ReactPaginate from 'react-paginate';

export const Pagination = ({ pages, setActivePage, activePage }) => {
	return (
		<ReactPaginate
			className='pagination my-3 d-flex justify-content-center gap-3'
			pageCount={pages}
			forcePage={activePage === 1 ? 0 : activePage - 1}
			previousLabel='&laquo;'
			nextLabel='&raquo;'
			pageClassName='page-item '
			pageLinkClassName='page-link'
			activeClassName='active'
			previousLinkClassName='btn btn-primary'
			nextLinkClassName='btn btn-primary'
			onPageChange={(data) => setActivePage(data.selected + 1)}
		/>
	);
};
