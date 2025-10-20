import Logo from "../logo/logo";
function Footer() {
	return (
		<footer className="bg-gray-950 text-white py-8 px-4 md:px-8">
			<div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between">
				<div className="flex items-center">
					<Logo props={{ width: 32, height: 32 }} />
					<span className="text-lg font-bold">John Waver Aguilar</span>
				</div>
			</div>
		</footer>
	);
}

export default Footer;