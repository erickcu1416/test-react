import { useNavigate } from 'react-router-dom';
import useForm from './hooks/useForm';
import useLogin from './hooks/useLogin';

export const LoginPage = () => {
	const navigate = useNavigate();

	const [signInInputs, onSubmit, onChangeInputs] = useForm(onClickHadler);
	const { onLogin } = useLogin(onRedirect, loginError);

	function loginError(d) {
		alert(d.error || '');
	}

	function onRedirect() {
		navigate('/', {});
	}

	const disableActionInput = e => {
		e.preventDefault();
		return false;
	};

	function onClickHadler() {
		const { email, password } = signInInputs;
		const areInputsValid =
			Object.keys(signInInputs).length !== 0 && email !== '' && password !== '';
		if (!areInputsValid) return alert('Please, complete form');

		onLogin(signInInputs);
	}

	return (
		<div className='container mt-5'>
			<form onSubmit={onSubmit}>
				<div className='mb-3'>
					<label htmlFor='exampleInputEmail1' className='form-label'>
						Email address
					</label>
					<input
						type='email'
						name='email'
						className='form-control'
						id='email'
						aria-describedby='emailHelp'
						onPaste={disableActionInput}
						onCopy={disableActionInput}
						value={signInInputs.email}
						onChange={onChangeInputs}
					/>
					{/* <div id="emailHelp" className="form-text">Well never share your email with anyone else.</div> */}
				</div>
				<div className='mb-3'>
					<label htmlFor='exampleInputPassword1' className='form-label'>
						Password
					</label>
					<input
						type='password'
						name='password'
						className='form-control'
						id='password'
						onPaste={disableActionInput}
						onCopy={disableActionInput}
						value={signInInputs.password}
						onChange={onChangeInputs}
					/>
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
