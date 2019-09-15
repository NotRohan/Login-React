import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		};

		this.update = this.update.bind(this);

		this.displayLogin = this.displayLogin.bind(this);
	}

	update(e) {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value
		});
	}

	displayLogin(e) {
		e.preventDefault();
		let users = localStorage.getItem("users");
		let email = this.state.email;
		let password = this.state.password;
		if (users) {
			let check = JSON.parse(users).find((item) => {
				return ((item.user === email) && (item.pass === password));
			})
			if(check) {
				alert('Login Successful');
			} else {
				alert('Email | Password not found');
			}
		} else {
			alert('Email | Password not found');
		}
		this.setState({
			email: '',
			password: ''
		});
	}

	render() {
		return (
			<div className="login">
				<form onSubmit={this.displayLogin}>
					<h2>Login</h2>
					<div className="username">
						<input
							type="text"
							placeholder="Username..."
							value={this.state.email}
							onChange={this.update}
							name="email"
						/>
					</div>

					<div className="password">
						<input
							type="password"
							placeholder="Password..."
							value={this.state.password}
							onChange={this.update}
							name="password"
						/>
					</div>

					<input type="submit" value="Login" />
				</form>

				<Link to="/register"><p className="linkk">Create an account</p></Link>
			</div>
		);
	}
}

export default Login;
