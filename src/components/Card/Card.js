import { Link } from 'react-router-dom';

export const Card = ({ id, image, name, location, status }) => {
	return (
		<>
			<div className='card' style={{ width: '16rem' }}>
				{(function () {
					if (status === 'Alive') {
						return (
							<span className='position-absolute top-0 end-0 badge bg-success'>
								{status}
							</span>
						);
					} else if (status === 'Dead') {
						return (
							<span className='position-absolute top-0 end-0 badge bg-danger'>
								{status}
							</span>
						);
					} else {
						return (
							<span className='position-absolute top-0 end-0 badge bg-dark'>
								{status}
							</span>
						);
					}
				})()}
				<img className='card-img-top' src={image} alt={name} />
				<div className='card-body'>
					<h5 className='card-title'>{name}</h5>
					<p className='card-text m-0'>last location</p>
					<p className='card-text'>{location}</p>
					<Link to={`/${id}`} className='btn btn-primary'>
						More
					</Link>
				</div>
			</div>
		</>
	);
};
