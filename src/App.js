import React from 'react';
import {
	BrowserRouter,
	Routes,
	Route
} from "react-router-dom";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UserProfile from './pages/UserProfile';
import BookPage from './pages/BookPage';
import PageLayout from './pages/PageLayout';
import { AuthProvider } from './context/AuthContext';

const App = () => {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<PageLayout><HomePage /></PageLayout>} />
					<Route path="/login" element={<PageLayout><LoginPage /></PageLayout>} />
					<Route path="/register" element={<PageLayout><RegisterPage /></PageLayout>} />
					<Route path="/profile" element={<PageLayout><UserProfile /></PageLayout>} />
					<Route path="/:bookUrl" element={<PageLayout><BookPage /></PageLayout>} />
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	);
};

export default App;
