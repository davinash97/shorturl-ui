import React from "react";
import ButtonInterface from "./button-interface";

export default React.memo(function Button({ title, className, bgColor, textColor, fontSize, borderRadius }: ButtonInterface) {
	return (
		<button className={className} style={{
			backgroundColor: bgColor,
			color: textColor,
			fontSize: fontSize ? `{fontSize}px` : `15px`,
			borderRadius: borderRadius ? `{borderRadius}px` : "10px",
			width: "inherit"
		}}>
			{title}
		</button>
	)
})