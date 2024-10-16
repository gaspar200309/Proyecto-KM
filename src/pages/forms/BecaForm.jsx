import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { createBeca, updateBeca, getBecaById } from '../../service/api';
import ScrollToTop from '../../components/scrooll/Scrooll';
import InputText from '../../components/inputs/InputText';
import Select from '../../components/selected/Selected';
import { IoArrowBackCircleSharp } from 'react-icons/io5';

import './BecaForm.css';

const BecaForm = () => {
	const [beca, setBeca] = useState({
		nombre: '',
		institucion: 'publica',
		tipo: 'universidad',
		descripcionUniversidad: '',
		importante: '',
		promedioRequerido: '',
		imgSrc: null,
		becas: {
			social: { descripcion: '' },
			trabajo: { descripcion: '' },
			excelencia: { descripcion: '' },
		},
		direccion: '',
	});

	const [isEdit, setIsEdit] = useState(false);
	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		if (id) {
			setIsEdit(true);
			getBecaById(id).then((response) => setBeca(response.data));
		}
	}, [id]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		if (name === 'imgSrc') {
			setBeca({ ...beca, imgSrc: e.target.files[0] });
		} else if (name.startsWith('becas')) {
			const [, tipoBeca, key] = name.split('-');
			setBeca((prevBeca) => ({
				...prevBeca,
				becas: {
					...prevBeca.becas,
					[tipoBeca]: {
						...prevBeca.becas[tipoBeca],
						[key]: value,
					},
				},
			}));
		} else {
			setBeca({
				...beca,
				[name]: value,
			});
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData();
		for (const key in beca) {
			if (key === 'becas') {
				formData.append('becas', JSON.stringify(beca[key]));
			} else {
				formData.append(key, beca[key]);
			}
		}
		if (isEdit) {
			await updateBeca(id, formData);
		} else {
			await createBeca(formData);
		}
		navigate('/becas');
	};

	return (
		<div className="">
			<ScrollToTop />
			<Link to="/listForm" className="icon">
				<IoArrowBackCircleSharp />
			</Link>
			<div className="form-headerBeca">
				<h1>{isEdit ? 'Editar beca' : 'Crear beca'}</h1>
			</div>
			<form className="form-container" onSubmit={handleSubmit}>
				{/* InputText para los campos de texto */}
				<InputText
					name="nombre"
					value={beca.nombre}
					onChange={handleChange}
					placeholder="Nombre"
					required
				/>

				{/* Select para seleccionar institución */}
				<Select
					name="institucion"
					value={beca.institucion}
					onChange={handleChange}
					options={[
						{ value: 'publica', label: 'Pública' },
						{ value: 'privada', label: 'Privada' },
					]}
					required
				/>

				{/* Select para seleccionar tipo */}
				<Select
					name="tipo"
					value={beca.tipo}
					onChange={handleChange}
					options={[
						{ value: 'universidad', label: 'Universidad' },
						{ value: 'instituto', label: 'Instituto' },
						{ value: 'normal', label: 'Normal' },
					]}
					required
				/>

				{/* InputText para textarea */}
				<InputText
					name="descripcionUniversidad"
					value={beca.descripcionUniversidad}
					onChange={handleChange}
					placeholder="Descripción de la Universidad"
					multiline={true}
					required
				/>

				{/* InputText para campo opcional */}
				<InputText
					name="importante"
					value={beca.importante}
					onChange={handleChange}
					placeholder="Importante (opcional)"
				/>

				{/* InputText para promedio */}
				<InputText
					name="promedioRequerido"
					value={beca.promedioRequerido}
					onChange={handleChange}
					placeholder="Promedio Requerido (opcional)"
				/>

				<input
					type="file"
					name="imgSrc"
					onChange={handleChange}
					accept="image/*"
				/>

				{/* Vista previa de la imagen seleccionada */}
				{beca.imgSrc && (
					<div className="image-preview">
						<h4>Vista previa de la imagen:</h4>
						<img
							src={URL.createObjectURL(beca.imgSrc)}
							alt="Vista previa"
							className="preview-img"
						/>
					</div>
				)}

				<h3>Beca Social</h3>
				<InputText
					name="becas-social-descripcion"
					value={beca.becas.social.descripcion}
					onChange={handleChange}
					placeholder="Descripción de Beca Social"
					multiline={true}
				/>

				<h3>Beca Trabajo</h3>
				<InputText
					name="becas-trabajo-descripcion"
					value={beca.becas.trabajo.descripcion}
					onChange={handleChange}
					placeholder="Descripción de Beca Trabajo"
					multiline={true}
				/>

				<h3>Beca Excelencia</h3>
				<InputText
					name="becas-excelencia-descripcion"
					value={beca.becas.excelencia.descripcion}
					onChange={handleChange}
					placeholder="Descripción de Beca Excelencia"
					multiline={true}
				/>

				<InputText
					name="direccion"
					value={beca.direccion}
					onChange={handleChange}
					placeholder="Dirección (opcional)"
				/>

				<button type="submit">{isEdit ? 'Actualizar' : 'Crear'}</button>
			</form>
		</div>
	);
};

export default BecaForm;
