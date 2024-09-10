import React from "react";
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import { Route, Routes } from "react-router-dom";
import { Home } from './pages/home.jsx';
import { Resources } from './pages/resources.jsx';
import { Contact } from './pages/contact.jsx';
import { Services } from './pages/services.jsx';
import { Construction } from './pages/construction.jsx';
import './App.css';


function App() {
	return (
		<>
		{/*<Construction />*/}
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
