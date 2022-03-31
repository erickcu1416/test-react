/* eslint-disable react/prop-types */
import FormEmployee from './components/FormEmployee';
import Table from './components/Table';
import { useTable } from './hooks/useTable';

export const EmployeesPage = props => {
	const { items, onChangePage, page, totalFound, onSearchItem } = useTable({
		endpoint: '/v1/examen/employees/erick_chan',
		source: props.source,
	});

	const onPreviousHandler = () => {
		if (page > 1) {
			onChangePage(page - 1);
		}
	};

	const onNextHandler = () => {
		const t = totalFound / 10;
		const totalPages = Math.ceil(t);

		if (page < totalPages) {
			onChangePage(page + 1);
		}
	};

	return (
		<div className='container mt-5'>
			<h2>EmployeesPage</h2>
			{items.length === 0 ? (
				<button
					className='btn btn-outline-secondary'
					type='button'
					id='button-addon2'
					onClick={() => {
						onSearchItem('');
					}}
				>
					Press for show table
				</button>
			) : (
				<div className='row'>
					<div className='col-8'>
						<div className='mt-5'>
							<div className='input-group mb-3'>
								<input
									type='text'
									className='form-control'
									placeholder='Search...'
									aria-label='Search...'
									aria-describedby='button-addon2'
									onChange={e => onSearchItem(e.target.value)}
								/>
							</div>
						</div>
						<Table
							onPrevious={onPreviousHandler}
							numberPage={page}
							onNext={onNextHandler}
							items={items}
						/>
					</div>
					<div className='col-3 offset-1'>
                        <FormEmployee onSuccessForm={() => onSearchItem('')}/>
                    </div>
				</div>
			)}
		</div>
	);
};
