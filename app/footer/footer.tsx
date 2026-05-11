import React from "react"

export default React.memo(function Footer() {
	return (
		<footer className="w-screen flex flex-row text-center justify-between items-center bg-green-100 py-2 px-1">
			<div className="flex justify-between flex-initial items-center w-full gap-3 px-3">
				<div className="w-full flex flex-col py-3 gap-1 text-left">
					<span className="text-md">
						Shrink URL
					</span>
					<span className="text-sm">
						© 2024 Shrink Link. Built with love by <span>davinash97</span>
					</span>
				</div>
				<div>
					<ol className="flex gap-3">
						<li>Privacy</li>
						<li>Status</li>
					</ol>
				</div>
			</div>
		</footer>
	)
})