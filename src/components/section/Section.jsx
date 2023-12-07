import React, { useEffect, useState } from 'react';
import ImgL from "../../image/default_cover.png"
import './section.css';

const URL = 'http://127.0.0.1:8002/search?';

const Section = () => {
	const [loading, setLoading] = useState(false);
	const [text, setText] = useState('');
	const [res, setRes] = useState('');

	const scrollHeight = () => {
		const booksList = document.getElementById('booksList');
		if (res) booksList.scrollIntoView({ height: '100vh' });
	};

	const handleClick = async e => {
		e.preventDefault();
		setLoading(true);
		const query = URL + new URLSearchParams({ name: text }).toString();
		const data = await fetch(query).then(res => res.json());

		if (typeof data == 'string') {
			setLoading(false);
			return setRes(data);
		}

		console.log(data);

		setRes({
			book: data[0],
		});

		setLoading(false);
	};

	useEffect(() => {
		scrollHeight();
		console.log(res);
	}, [res]);

	return (
		<>
			{loading ? (
				<div className='preloader-box'>
					<div className='preloader'></div>
				</div>
			) : null}

			<div className='full d-flex justify-content-center align-items-center'>
				<div className='d-flex flex-column align-items-center'>
					<h1 className='text-white text-center'>Library UBTUIT</h1>
					<p className='text-white text-center'>Kutubxonalarimizdan qidiring</p>
					<div className='choices'>
						<div>
							<form className='d-flex justify-content-center align-items-center bg-white form__action'>
								<input
									type='text'
									id='text'
									className='form-control w-100'
									placeholder='Qidiruv ... '
									onKeyUp={() => {
										setText(document.getElementById('text').value);
									}}
								/>
								<input
									type='submit'
									className='btn-search btn bg-white fas fa-search'
									onClick={handleClick}
									value='Qidirish'
								/>
							</form>
						</div>
					</div>
				</div>
			</div>

			{res.book ? (
				<div className='fullHeight ' id='booksList'>
					<div className='container'>
						<div className='row'>
							{res.book.map((book, ind) => (
								<div className='card mb-3 mt-4' key={ind}>
									<div className='row g-0'>
										<div className='col-md-4'>
											<img src={ImgL} className='img-fluid rounded-start w-50  mx-4 p-3' width={500} height={500} alt={book.title} />
										</div>
										<div className='col-md-8'>
											<div className='card-body'>
												<h5 className='card-title'>{book.title}</h5>
												<h6 className='card-subtitle mb-2 text-muted'>{book.author?.name}</h6>
												<p className='card-text'>{book.description}</p>
												<p className='card-text text-muted'>{book.name} kutubxonasi</p>
												<p className='card-text text-muted'>Manzil: {book.location}</p>

												<a href={book.url} className='text-decoration-none btn btn-primary' target='_blank'>
													Kutubxonaga o'tish
												</a>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			) : res ? (
				<div className='d-flex align-items-center justify-content-center fullHeight'>
					<h1 id='booksList' className='mt-5 text-white'>
						UBTUIT kutubxonasidan Kitob topilmadi 🙅‍♂️
					</h1>
				</div>
			) : null}
		</>
	);
};

export default Section;
