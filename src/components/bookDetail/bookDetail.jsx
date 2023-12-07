// BookDetail.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import './bookDetail.css'
import Header from '../header/Header';

const API = 'http://127.0.0.1:8002';

function BookDetail() {
	const location = useLocation();
	const book = location.state ? location.state.book : null;
	// console.log(book)	
	// console.log(location)	


	return (
		<>
		<Header />
		<div className='mx-3'>
      <a href="/books" className=' text-decoration-none fs-5'><i className=' fa fa-arrow-circle-left'></i>  Go Back</a>
    </div>
				<div className='card container book-item mt-4'>
					<div className='row g-0 book-item'>
						<div className='col-12 col-lg-4 book-item d-flex justify-content-center align-items-center p-3'>
							<img src={API + book.image} className='' alt={book.title} width={300} height={300} />
						</div>
						<div className='col-lg-8 book-item'>
							<div className='card-body'>
								<h5 className='card-title'>{book.title}</h5>
								<h6 className='card-title text-secondary'>{book.author.name}</h6>
								<p className='card-text'>{book.description}</p>
								<button className='btn btn-secondary btn-outline-success'>
									<a href={API +book.pdf} className=' text-decoration-none text-white'>
										Pdf yuklash
									</a>
								</button>
								<div>
									<br />
								</div>
								<a href={API + book.audio}>
									<audio src={API + book.audio} controls></audio>
								</a>
							</div>
						</div>
					</div>
				</div>
		
		</>
	);
}

export default BookDetail;
