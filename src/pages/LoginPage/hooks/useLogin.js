import useLocalStorage from '../../../hooks/useLocalStorage';

import {
	PASSWORD_KEY,
	TOKEN_NAME_STORAGE,
	USER_KEY,
} from '../constants/constants';

function useLogin(onComplete, onError) {
	const { setItem } = useLocalStorage();

	function onLogin(data) {
		console.log('CLICK ON HOOK');
		try {
			const { email, password } = data;
			if (email === USER_KEY && password === PASSWORD_KEY) {
				setItem(TOKEN_NAME_STORAGE, '123...');
				onComplete();
			} else {
				onError({ error: 'Credentials invalid' });
			}
		} catch (error) {
			onError({ error: 'Error login' });
		}
	}

	return { onLogin };
}

export default useLogin;
