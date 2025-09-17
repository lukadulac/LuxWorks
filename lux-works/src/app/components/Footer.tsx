"use client";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
const Footer = () => {
	const pathname = usePathname();

	const checkIfHomePage = () => {
		if (pathname === "/") {
			scrollTo({ top: 0, behavior: "smooth" });
		} else {
			window.location.href = "/";
		}
	};

	return (
		<footer className="max-w-[1200px] mx-auto bg-[var(--bdazzledblue)] py-4 px-4 md:px-10 flex flex-col md:flex-row md:justify-between md:items-center gap-4 text-center md:text-left">
			<div>
				<Image
					src="/LuxWorksLogo.png"
					alt="Logo"
					width={80}
					height={80}
					className="cursor-pointer rounded-full w-16 h-16 md:w-20 md:h-20"
					onClick={checkIfHomePage}
				/>
			</div>
            <nav>
                <ul className="flex flex-wrap gap-4 text-[var(--platinum)] text-sm md:text-base mt-4">
                    {/* TODO: create pages and add footer links here */}
                    <li>Support</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Contact</li>
                    
                </ul>
            </nav>
            <p>&copy; {new Date().getFullYear()} LuxWorks. All rights reserved</p>
		</footer>
	);
};
export default Footer;
