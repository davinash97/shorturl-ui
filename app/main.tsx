'use client';

import Button from "./component/button/button";

export default function Main() {

	const onSubmit = () =>
		window.alert("function are temporarily unavailable");

	return (
		<main className="w-screen h-screen flex flex-col gap-6 text-center justify-center items-center px-5">
			<h1 className="text-8xl font-bold">Shrink your <span className="text-green-400">Links</span></h1>
			<p className="text-center min-w-full px-3">
				The high-performance URL management platform built for modern
				development teams. Precise, authoritative, and frictionless redirection at scale.
			</p>
			<div
				className="
						bg-green-50
						text-green-900
						min-w-[50%]
						flex
						items-center
						gap-4
						p-2
						rounded-2xl
						focus-within:shadow-[3px_3px_5px_rgba(0,128,0,0.207),-3px_-3px_5px_rgba(0,128,0,0.367)]">
				<span className="p-2 select-none">🔗</span>

				<input
					type="text"
					name="inputURl"
					id="inputURl"
					placeholder="Shrink your URL"
					className="flex-1 text-center py-3 outline-none bg-transparent"
				/>

				<Button
					title="➜"
					type="submit"
					onClick={onSubmit}
					className="p-5 bg-transparent hover:shadow-[3px 3px 5px rgba(0, 128, 0, 0.207), -3px -3px 5px rgba(0, 128, 0, 0.367)]
					hover:bg-green-400 hover:shadow-none"
				/>
			</div>
		</main >
	)
}