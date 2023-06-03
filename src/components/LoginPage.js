import React from 'react'

export const Login = () => {

	const handleEmail = () => {
		//email validation
		//authentication
		console.log('email')
	}

	const handlePassword = () => {
		//password validation
		//authentication
		console.log('password')
	}

	return (
		<div>
			<form>
				<input
					type="email"
					placeholder="please enter your email"
					name="email"
					value="email"
					onChange={handleEmail}
				/>
				<br />
				<input
					type="password"
					placeholder="please enter your password"
					name="password"
					value="password"
					onChange={handlePassword}
				/>
				<br />
				<button type="submit">Submit</button>
				<br />

			</form>
		</div>
	)
}
