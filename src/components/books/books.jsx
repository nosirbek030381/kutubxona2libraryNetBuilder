import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/Header';
import './books.css';

const API = 'http://127.0.0.1:8002';

const BooksList = () => {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		fetch('http://127.0.0.1:8002/books')
			.then(response => response.json())
			.then(data => {
				setBooks(data);
			})
			.catch(error => console.error('Error fetching data:', error));
	}, []);

	return (
		<>
			<Header />
			<div className='mx-3'>
				<a href='/' className=' text-decoration-none fs-5'>
					<i className=' fa fa-arrow-circle-left'></i> Go Back
				</a>
			</div>
			<h1 className='mx-5 font-monospace text-uppercase fs-2'>Books</h1>
			<div className='container mb-4'>
				<div className='row'>
					{books.map(book => (
						<div className=' col-12 col-lg-4 mt-2 justify-content-center' key={book.id}>
							<div className='card mt-3'>
								<div className='card-body'>
									<img src={API + book.image} alt={book.title} width={200} height={200} />
									<h5 className='card-title mt-2'>
										{' '}
										<Link
											className=' text-decoration-none'
											to={{ pathname: `/book/${book.id}`, state: { book } }}
										>
											{book.title}
										</Link>
									</h5>
									<p className='card-text text-secondary'>Muallif: {book.author.name}</p>
									<Link
										className=' text-decoration-none btn btn-primary'
										to={{ pathname: `/book/${book.id}`, state: { book } }}
									>
										Book Detail
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default BooksList;
