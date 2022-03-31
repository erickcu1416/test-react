/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import useForm from '../../../hooks/useForm';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import useEmployee from '../hooks/useEmployee';
import moment from "moment";

const FormEmployee = ({onSuccessForm}) => {
	const [inputs, onSubmit, onChangeInputs, resetForm] = useForm(onClickHadler, {
		name: '',
		last_name: '',
	});

    const { onPostEmployee } = useEmployee(onRedirect, loginError);

    function loginError(d) {
		alert(d.error || '');
	}

	function onRedirect() {
		onSuccessForm()
        resetForm();

	}

    const [startDate, setStartDate] = useState(new Date());

	function onClickHadler() {
		const { name, last_name } = inputs;
		const areInputsValid =
			Object.keys(inputs).length !== 0 &&
			name !== '' &&
			last_name !== '' &&
			startDate !== '';
		if (!areInputsValid) return alert('Please, complete form');

		onPostEmployee({name, last_name, birthday: moment(startDate).format('YYYY/MM/DD')})
	}

	return (
		<div className='mt-5'>
			<form onSubmit={onSubmit}>
				<div className='mb-3'>
					<label htmlFor='name' className='form-label'>
						Name
					</label>
					<input
                        maxLength={30}
						type='text'
						name='name'
						className='form-control'
						id='name'
						aria-describedby='name'
						value={inputs.name}
						onChange={onChangeInputs}
					/>
				</div>
				<div className='mb-3'>
					<label htmlFor='last_name' className='form-label'>
						Last name
					</label>
					<input
                        maxLength={30}
						type='text'
						name='last_name'
						className='form-control'
						id='last_name'
						value={inputs.last_name}
						onChange={onChangeInputs}
					/>
				</div>

                <div className='mb-3'>
                    <label htmlFor='birthday' className='form-label'>
						Birthday
					</label>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
				</div>
				<button
					type='submit'
					className='btn btn-primary'
					onClick={onClickHadler}
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default FormEmployee;
