import Button from "./component/button/button";

export default function Main() {
	return (
		<main className="w-screen h-screen flex flex-col gap-6 text-center justify-center items-center px-5">
			<h1 className="text-8xl font-bold">Shrink your <span className="text-green-400">Links</span></h1>
			<p className="text-center min-w-full px-3">
				The high-performance URL management platform built for modern
				development teams. Precise, authoritative, and frictionless redirection at scale.
			</p>
			<div className="bg-green-50 text-green-900 min-w-full flex items-center gap-4 p-2 rounded-2xl">
				<span className="p-2">🔗</span>
				<input
					type="text"
					name="inputURl"
					id="inputURl"
					placeholder="Shrink your URL"
					className="flex-1 text-center py-3"
				/>

				<Button
					title="➜"
					className="p-5 cursor-pointer"
				/>
			</div>
		</main >
	)
}