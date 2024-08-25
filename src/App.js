import React from "react";
import Header from './components/header.js';
import Footer from './components/footer.js';
import { Route, Routes } from "react-router-dom";
import { Home } from './pages/home.js';
import { Resources } from './pages/resources.js';
import { Contact } from './pages/contact.js';
import { Services } from './pages/services.js';
import { Construction } from './pages/construction.js';
import './App.css';


function App() {
	return (
		<>
		<meta name="viewport" content="width=device-width, initial-scale=1"></meta>
		<Construction />
{/*		<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/resources" element={<Resources />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/services" element={<Services />} />
			</Routes>
		<Footer />*/}
		</>
	);
}

export default App;
