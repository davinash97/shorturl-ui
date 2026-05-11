export default interface ButtonInterface {
	title: string;
	className?: string;
	textColor?: string;
	type?: "submit" | "reset" | "button" | undefined;
	bgColor?: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>; 
	border?: string;
	fontSize?: number;
	borderRadius?: number;
}