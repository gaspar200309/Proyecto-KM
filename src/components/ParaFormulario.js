import { useState } from 'react';

export const ParaFormulario = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    return {
        formState,
        onInputChange
    };
}

