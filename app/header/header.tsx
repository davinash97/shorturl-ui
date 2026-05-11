import React from "react";
import Button from "../component/button/button";

export default React.memo(function Header() {
	return (
		<header className="absolute top-0 w-screen flex flex-row text-center justify-between items-center bg-green-100 py-2 px-1">
			<div className="flex justify-center items-center gap-3">
				<div className="text-base px-4 py-3">
					Shrink URL
				</div>
				<div>
					<ol className="flex gap-3">
						<li>Home</li>
						<li>About</li>
						<li>Contact</li>
					</ol>
				</div>
			</div>
			<div><Button title="Get Started"  textColor="#EFEFFF" className="bg-green-500 px-4 py-2" /></div>
		</header>
	)
})