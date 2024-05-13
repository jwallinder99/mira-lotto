import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<footer className="bg-primary-foreground w-full p-3 text-white py-4 flex justify-between items-center">
			<p>© 2024 James Wallinder</p>
			<ul className="flex justify-between px-4 gap-4">
				<li>
					<Link
						href="https://github.com/jwallinder99/mira-lotto"
						className="hover:text-gray-400"
					>
						Github
					</Link>
				</li>
				<li>
					<Link
						href="https://my-portfolio-ifcsc0368-james-projects-2d2118f9.vercel.app/"
						className="hover:text-gray-400"
					>
						Portfolio
					</Link>
				</li>
				<li>
					<Link
						href="https://www.linkedin.com/in/james-wallinder-66114a186/"
						className="hover:text-gray-400"
					>
						LinkedIn
					</Link>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
