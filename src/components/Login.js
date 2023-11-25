
import React, { useState } from 'react';

function Login() {
    // State to hold the input values
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Function to handle form submission
    const handleLogin = () => {
        // In a real-world scenario, you would handle the login logic here
        e.preventDefault()
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit = {handleLogin}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="submit">
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;

