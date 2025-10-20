import Image from "next/image";
interface Props {
	props: {
		width: number;
		height: number;
	};
}
function Logo({ props }: Props) {
	const { width, height } = props;
	return (
		<Image
			src="/logo-500x500.webp"
			className="h-8 w-8 mr-2 rounded-lg"
			alt="John Waver Aguilar"
			width={width}
			height={height}
		/>
	);
}

export default Logo;