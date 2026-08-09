"use client";

import React from "react";

import Button from "../component/button/button";

import { useNavigation } from "../utils/navigation";

export default React.memo(function Header() {

	const navigate = useNavigation();

	return (
		<header className="absolute top-0 w-screen flex flex-row text-center justify-between items-center bg-green-100 py-2 px-1">
			<div className="flex justify-center items-center gap-3">
				<div className="text-base px-4 py-3">
					<a href="/">Shrink URL</a>
				</div>
				<div>
					<ol className="flex gap-3">
						{/* <li><a href="/">Home</a></li> */}
						<li><a href="/about">About</a></li>
						<li><a href="/contact">Contact</a></li>
					</ol>
				</div>
			</div>
			<div><Button title="Get Started" textColor="#EFEFFF" className="bg-green-500 px-4 py-2" onClick={() => navigate("signup")} /></div>
		</header>
	)
})