import React from "react";
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import ContactForm from "./components/contactForm.jsx";
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
		<meta name="viewport" content="width=device-width, initial-scale=1"></meta>
		<meta http-equiv="Content-Security-Policy" content="frame-ancestors 'self';"></meta>
		<meta http-equiv="X-Content-Type-Options" content="nosniff"></meta>
		<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
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
