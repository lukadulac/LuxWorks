"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

import Link from "next/link";

const Header = () => {
	const router = useRouter();
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
		document.body.style.overflow = isOpen ? "auto" : "hidden";
	};

	const closeMenu = () => {
		setIsOpen(false);
		document.body.style.overflow = "auto";
	};

	return (
		<header className="max-w-[100vw] mx-auto fixed top-0 left-0 right-0 z-40 py-4 px-4 md:px-10 bg-[var(--bdazzledblue)] transition-all duration-300">
			<div className="w-full max-w-[1200px] mx-auto flex justify-between items-center">
				<Image
					onClick={() => {
						closeMenu();
						router.push("/");
					}}
					src="/LuxWorksLogo.png"
					alt="LuxWorks Logo"
					width={80}
					height={80}
					className="cursor-pointer rounded-full w-16 h-16 md:w-20 md:h-20"
				/>

				<nav className="hidden md:block">
					<ul className="flex gap-6 lg:gap-8 text-[var(--platinum)] text-base lg:text-lg">
						<li>
							<Link
								href="/"
								className="hover:text-[var(--darkskyblue)] transition-colors duration-200 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[var(--darkskyblue)] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
							>
								Home
							</Link>
						</li>
						{/* <li>
							<Link
								href="/services"
								className="hover:text-[var(--darkskyblue)] transition-colors duration-200 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[var(--darkskyblue)] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
							>
								Services
							</Link>
						</li> */}
						<li>
							<Link
								href="/ourWork"
								className="hover:text-[var(--darkskyblue)] transition-colors duration-200 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[var(--darkskyblue)] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
							>
								Our Work
							</Link>
						</li>
						<li>
							<Link
								href="/aboutUs"
								className="hover:text-[var(--darkskyblue)] transition-colors duration-200 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[var(--darkskyblue)] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
							>
								About Us
							</Link>
						</li>
						<li>
							<Link
								href="/contact"
								className="hover:text-[var(--darkskyblue)] transition-colors duration-200 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[var(--darkskyblue)] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
							>
								Contact
							</Link>
						</li>
					</ul>
				</nav>

				<div className="hidden md:block">
					<Link
						href="/contact"
						className="bg-[var(--yankeesblue)] text-[var(--platinum)] px-6 py-2.5 rounded-md hover:bg-[var(--darkskyblue)] hover:text-[var(--yankeesblue)] transition-all duration-300 font-medium text-base"
					>
						Get in touch
					</Link>
				</div>

				<div className="md:hidden flex items-center">
					<button
						onClick={toggleMenu}
						className="relative w-8 h-8 flex items-center justify-center focus:outline-none group"
						aria-label={isOpen ? "Close menu" : "Open menu"}
					>
						<div className="relative w-6 h-5">
							<div
								className={`absolute inset-0 flex flex-col justify-between transition-all duration-300 ${
									isOpen ? "opacity-0 rotate-90" : "opacity-100"
								}`}
							>
								<Image
									src="/mobile-menu.svg"
									alt="Menu"
									width={24}
									height={24}
									className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
								/>
							</div>

							<div
								className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
									isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
								}`}
							>
								<Image
									src="/close-svgrepo-com.svg"
									alt="Close menu"
									width={24}
									height={24}
									className="w-6 h-6 transition-transform duration-300 group-hover:rotate-90 svgColor"
								/>
							</div>
						</div>
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			<div
				className={`fixed inset-0 bg-[var(--bdazzledblue)] z-30 transform ${
					isOpen ? "translate-x-0" : "translate-x-full"
				} transition-transform duration-300 ease-in-out pt-24 px-6 md:hidden`}
				style={{ top: "5rem" }}
			>
				<nav className="h-full">
					<ul className="flex flex-col items-center space-y-8 text-2xl text-[var(--platinum)]">
						<li>
							<Link
								href="/"
								onClick={closeMenu}
								className="block py-2 hover:text-[var(--darkskyblue)] transition-colors duration-200"
							>
								Home
							</Link>
						</li>
						{/* <li>
							<Link
								href="/services"
								onClick={closeMenu}
								className="block py-2 hover:text-[var(--darkskyblue)] transition-colors duration-200"
							>
								Services
							</Link>
						</li> */}
						<li>
							<Link
								href="/ourWork"
								onClick={closeMenu}
								className="block py-2 hover:text-[var(--darkskyblue)] transition-colors duration-200"
							>
								Our Work
							</Link>
						</li>
						<li>
							<Link
								href="/aboutUs"
								onClick={closeMenu}
								className="block py-2 hover:text-[var(--darkskyblue)] transition-colors duration-200"
							>
								About Us
							</Link>
						</li>
						<li>
							<Link
								href="/contact"
								onClick={closeMenu}
								className="block py-2 hover:text-[var(--darkskyblue)] transition-colors duration-200"
							>
								Contact
							</Link>
						</li>
						<li className="mt-8">
							<Link
								href="/contact"
								onClick={closeMenu}
								className="inline-block bg-[var(--yankeesblue)] text-[var(--platinum)] px-8 py-3 rounded-md hover:bg-[var(--darkskyblue)] hover:text-[var(--yankeesblue)] transition-all duration-300 font-medium text-lg"
							>
								Get in touch
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
