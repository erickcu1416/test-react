/* eslint-disable react/jsx-key */
import ItemTable from './ItemTable';

/* eslint-disable react/prop-types */
const Table = ({ items = [], numberPage = 1, onPrevious, onNext }) => {
	return (
		<div>
			<table className='table mt-5'>
				<thead>
					<tr>
						<th scope='col'>#</th>
						<th scope='col'>Name</th>
						<th scope='col'>Lastname</th>
						<th scope='col'>Birthday</th>
					</tr>
				</thead>
				<tbody>
					{items.map(i => (
						<ItemTable key={i.id} item={i} />
					))}
				</tbody>
			</table>
			<div>
				<nav aria-label='Page navigation example'>
					<ul className='pagination'>
						<li className='page-item'>
							<a className='page-link' onClick={() => onPrevious()}>
								Previous
							</a>
						</li>
						<li className='page-item'>
							<a className='page-link' href='#'>
								{numberPage}
							</a>
						</li>
						<li className='page-item'>
							<a className='page-link' onClick={() => onNext()}>
								Next
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Table;
