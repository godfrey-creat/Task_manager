import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const history = useHistory();

	const handleSubmit = asybc (e) => {
		e.preventDefault();
		try {
			const response = await axios.post('http://localhost:8000/api/token/', {
				username,
				password,
			});
			localStorage.setItem('token', response.data.access);
			history.push('/task-board');
		} catch (error) {
			console.error('Login failed', error);
		}
	};

	return (
		<div>
			<h2>Login</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Username</label>
					<input
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div>
					<label>Password</label>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button type="submit">Login</button>
			</form>
		</div>
	);
};

export default Login;
