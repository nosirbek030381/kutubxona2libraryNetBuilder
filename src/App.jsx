import { Route, BrowserRouter as Router, Switch, } from 'react-router-dom';
import About from './components/aboutUs/About';
import BookDetail from './components/bookDetail/bookDetail';
import Books_List from './components/books/books';
import Home from './components/pages/Home';

function App() {
	return (
		<div>
			<Router>
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route exact path='/about'>
						<About />
					</Route>
					<Route exact path='/books'>
						<Books_List />
					</Route>
					<Route  path='/book/:bookId'>
						<BookDetail />
					</Route>
					{/* <Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/book/:bookId' element={<BookDetail />} />
				<Route path='/books' element={<Books_List />} /> */}
				</Switch>
			</Router>
		</div>
	);
}

export default App;
