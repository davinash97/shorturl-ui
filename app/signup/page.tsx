"use client";

import { useState } from "react";
import "./page.css";

export default function Form() {
	const [formData, setFormData] = useState({
		fname: "",
		lname: "",
		username: "",
		password: "",
		cpassword: "",
	});

	const handleChange = (e: any) => {
		const { id, value } = e.target;

		setFormData(prev => ({
			...prev,
			[id]: value
		}))
	}

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		if (formData.password !== formData.cpassword) {
			console.error("Passwords do not match");
			window.alert("Password don't match");
		}

		const sendForm = {
			"first_name": formData.fname,
			"last_name": formData.lname,
			"username": formData.username,
			"password": formData.password
		};

		const url = "http://localhost:8080/api/v1/auth";

		// const credentials = btoa(`${formData.username}:${formData.password}`);
		try {
			const result = await fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(sendForm),
			});
			const data = await result.json();
			console.log(data);
			return data;
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<div className="flex w-dvw h-dvh items-center justify-center">
			<div className="flex flex-col gap-4 rounded-xl p-5 w-fit ">
				<div className="flex flex-col w-fit gap-5">
					<h1 className="w-full text-3xl text-center">Sign Up</h1>
					<form className="h-full flex flex-col gap-4 justify-between">
						<input id="fname" type="text" placeholder="First Name" value={formData.fname} onChange={handleChange} />
						<input id="lname" type="text" placeholder="Last Name" value={formData.lname} onChange={handleChange} />
						<input id="username" type="text" placeholder="Username" value={formData.username} onChange={handleChange} />
						<input id="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} />
						<input id="cpassword" type="password" placeholder="Confirm Password" value={formData.cpassword} onChange={handleChange} />
						<button type="submit" onClick={handleSubmit} className="bg-green-500 text-green-100 cursor-pointer rounded-2xl py-3">Submit</button>
					</form>
				</div>
			</div>
		</div>
	);
}