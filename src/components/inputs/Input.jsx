import './input.css'

export const Input = ({ label, name = '', className = '', id, type = 'text', placeholder = '', register, errors = null, accept = '' }) => {
	return (
		<div className="config-input">
			{label && <label htmlFor={id}>{label}</label>}

			<input type={type} className={className} id={id} name={name} placeholder={placeholder} {...register} accept={accept} />
			{errors && errors[id] && <span className="error-validation">{errors[id].message}</span>}
		</div>
	)
}
