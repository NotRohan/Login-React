import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Register extends Component {
	constructor(props) {
		super(props);

		this.state = {
			fullname: '',
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
		if (users) {
			let newArr = [...JSON.parse(users)];
			let email = this.state.email;
			let check = newArr.find((item) => {
				return item.user === email;
			})
			if (check) {
				alert("This Email is Already Registered");
				return;
			}
			newArr.push({user:this.state.email, pass: this.state.password});
			localStorage.setItem("users",JSON.stringify(newArr));
			alert("You have successfully registered");
		} else {
			let newArr = [{user:this.state.email, pass: this.state.password}];
			localStorage.setItem("users",JSON.stringify(newArr));
			alert("You have successfully registered");
		}
		this.setState({
			fullname: '',
			email: '',
			password: ''
		});
	}

	render() {
		return (
			<div className="register">
				<form onSubmit={this.displayLogin}>
					<h2>Register</h2>

					<div className="name">
						<input
							type="text"
							placeholder="Full Name"
							name="fullname"
							value={this.state.fullname}
							onChange={this.update}
						/>
					</div>

					<div className="email">
						<input
							type="text"
							placeholder="Enter your email"
							name="email"
							value={this.state.email}
							onChange={this.update}
						/>
					</div>

					<div className="pasword">
						<input
							type="password"
							placeholder="Password"
							name="password"
							value={this.state.password}
							onChange={this.update}
						/>
					</div>
					<input type="submit" value="Login" />
				</form>

				<Link to="/"><p className="linkk">Login Here</p></Link>
			</div>
		);
	}
}

export default Register;
