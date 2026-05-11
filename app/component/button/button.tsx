import React from "react";
import ButtonInterface from "./button-interface";

export default React.memo(function Button({
	title,
	className,
	bgColor,
	textColor,
	type,
	onClick,
	fontSize,
	borderRadius
}: ButtonInterface) {
	return (
		<button
			type={type}
			onClick={onClick}
			className={`${className ?? ""} cursor-pointer`}
			style={{
				backgroundColor: bgColor,
				color: textColor,
				fontSize: fontSize ? `${fontSize}px` : "15px",
				borderRadius: borderRadius ? `${borderRadius}px` : "10px",
			}}
		>
			{title}
		</button>
	);
});