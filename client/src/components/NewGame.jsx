import { privAxios } from '../services/api/axios';
import { useState, useEffect } from 'react';
import { imageValidator } from '../utils/validations';
import { ProgressBar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const NewGame = () => {
	//Input variables
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [image, setImage] = useState({});
	const [validImage, setValidImage] = useState(false);
	const [price, setPrice] = useState(0.0);
	const [category, setCategory] = useState(0);
	//Dropdown elements
	const [categoriesList, setCategories] = useState([]);
	//Err
	const [errMessage, setErrMessage] = useState('');
	//Form
	const [dropdownTitle, setDropdownTitle] = useState('Select category');
	const [uploadStatus, setUploadStatus] = useState(0);

	useEffect(() => {
		const getCategories = async () => {
			try {
				const response = await privAxios('/categories');
				setCategory(response.data.categories[0].Id);
				setCategories(response.data.categories);
			} catch (err) {
				setErrMessage(
					err.response?.data?.message || 'Failed getting categories'
				);
			}
		};

		getCategories();
	}, []);

	useEffect(() => {
		if (imageValidator(image.name)) {
			console.log(image);
			console.log(imageValidator(image.name));
			setValidImage(true);
		} else {
			setValidImage(false);
		}
	}, [image]);

	/**
	 *  Handles categories dropdown change
	 * @param {Number} val category id
	 */
	const handleOnSelect = val => {
		setImage(val);
		categoriesList.forEach(elem => {
			if (elem.Id === Number(val)) setDropdownTitle(elem.Name);
		});
	};

	/**
	 * Handles form submission
	 * @param {Object} e event
	 * @returns
	 */
	const submitForm = async e => {
		e.preventDefault();

		try {
			if (!validImage) {
				setErrMessage('Only image files (jpg, jpeg, png) are allowed!');
				return;
			}

			const formData = new FormData();
			formData.append('image', image);
			formData.append('title', title);
			formData.append('description', description);
			formData.append('price', price);
			formData.append('categoryId', category);

			setErrMessage('');

			await privAxios.post('/games/new', formData, {
				onUploadProgress: data => {
					setUploadStatus(Math.round((data.loaded / data.total) * 100));
				},
				headers: {
					Accept: 'multipart/form-data',
				},
			});

			//TODO: Navigate
		} catch (err) {
			setErrMessage('New game failed. Try again later.');
		}
	};

	return (
		<>
			<h2>New Game</h2>
			<div>
				<p>{errMessage}</p>
			</div>
			{uploadStatus > 0 ? (
				<ProgressBar animated className="mt-5 mb-5" now={uploadStatus} />
			) : (
				<></>
			)}
			<form className="mt-5 mb-5" onSubmit={submitForm}>
				<div className="inputGroup">
					<input
						id="title"
						type="text"
						onChange={e => setTitle(e.target.value)}
						value={title}
						required
					/>
					<label htmlFor="title">Title</label>
				</div>

				<div className="inputGroup">
					<input
						id="gameImage"
						type="file"
						name="image"
						accept="image/*"
						multiple={false}
						onChange={e => setImage(e.target.files[0])}
					/>
					<label htmlFor="gameImage">Select image</label>
				</div>
				<div className="inputGroup">
					<input
						id="description"
						type="text"
						onChange={e => setDescription(e.target.value)}
						value={description}
						required
					/>
					<label htmlFor="description">Description</label>
				</div>
				<div className="inputGroup">
					<input
						id="price"
						type="number"
						onChange={e => setPrice(e.target.value)}
						value={price}
						required
					/>
					<label htmlFor="price">Price</label>
				</div>
				<div className="inputGroup">
					<DropdownButton
						id="category"
						title={dropdownTitle}
						onSelect={handleOnSelect}
					>
						{categoriesList.map(element => (
							<Dropdown.Item key={element.Id} eventKey={element.Id}>
								{element.Name}
							</Dropdown.Item>
						))}
					</DropdownButton>
				</div>
				<Button type="submit">Submit</Button>
			</form>
		</>
	);
};

export default NewGame;
