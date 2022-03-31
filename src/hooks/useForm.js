import { useState } from 'react';

function useForm(callback, inputsDefault) {
	const [inputs, setInputs] = useState(inputsDefault);

	function handleSubmit(event) {
		if (event) {
			event.preventDefault();
		}

		callback();
	}

	function handleInputChange(event, type = 'default') {
		event.persist();

		setInputs(inputs => ({
			...inputs,
			[event.target.name]: event.target.value,
		}));

	}

    function resetForm() {
        setInputs(inputsDefault)
    }

	return [inputs, handleSubmit, handleInputChange, resetForm];
}

export default useForm;
