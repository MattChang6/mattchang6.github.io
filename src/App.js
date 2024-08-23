import React from "react";
import Header from './components/header.js';
import Footer from './components/footer.js';
import { Route, Routes } from "react-router-dom";
import { Home } from './pages/home';
import { Resources } from './pages/resources';
import { Contact } from './pages/contact';
import { Services } from './pages/services';
import './App.css';


function App() {
	return (
		<>
		<meta name="viewport" content="width=device-width, initial-scale=1"></meta>
		<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/resources" element={<Resources />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/services" element={<Services />} />
			</Routes>
		<Footer />
		</>
	);
}

export default App;
