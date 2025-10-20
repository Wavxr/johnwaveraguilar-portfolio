import {
	FaCertificate,
	FaHome,
	FaRocket,
	FaStar,
	FaEnvelope,
} from "react-icons/fa";

interface NavLink {
	name: string;
	href: string;
	icon: React.ReactNode;
}

export const homeNavLinks: NavLink[] = [
	{
		name: "Home",
		href: "#home",
		icon: <FaHome className="h-6 w-6" />,
	},
    {
        name: "skills",
        href: "#skills",
        icon: <FaStar className="h-6 w-6" />,
    },
	{
		name: "Projects",
		href: "#projects",
		icon: <FaRocket className="h-6 w-6" />,
	},
	{
		name: "Certifications",
		href: "#certifications",
		icon: <FaCertificate className="h-6 w-6" />,
	},
	{
		name: "Contact",
		href: "#contact",
		icon: <FaEnvelope className="h-6 w-6" />,
	},
];