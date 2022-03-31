import useAxios from '../../../hooks/useAxios';

function useEmployee(onComplete, onError) {
	const { post } = useAxios();

	function onPostEmployee(data) {
		post('/v1/examen/employees/erick_chan', data)
			.then(response => {
				console.log('RESPONSE', response);
				onComplete();
			})
			.catch(err => {
                console.log('err', err)
				// onError({ error: err.message });
			});
	}

	return { onPostEmployee };
}

export default useEmployee;
