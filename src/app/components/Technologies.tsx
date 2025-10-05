import Image from "next/image";

const Technologies = () => {
	return (
		<section className="my-10">
			<header>
				<h1 className="text-[32px] font-bold text-[var(--platinum)]">
					Technologies
				</h1>
			</header>
			<main className="flex flex-col items-center justify-center py-1 gap-2 md:grid md:grid-cols-3 md:gap-4 mt-4">
				<article
					className="p-4 bg-[var(--bdazzledblue)] rounded-md w-full text-center flex items-center gap-2 
        transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:shadow-lg cursor-pointer hover:text-[var(--yankeesblue)]"
				>
					<Image
						src="/html-icon.svg"
						alt="HTML icon"
						width={24}
						height={24}
						className="transition-transform duration-300 hover:rotate-12"
					/>
					<p className="transition-colors duration-300 text-white ">HTML</p>
				</article>
				<article
					className="p-4 bg-[var(--bdazzledblue)] rounded-md w-full text-center flex items-center gap-2 
        transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:shadow-lg cursor-pointer hover:text-[var(--yankeesblue)]"
				>
					<Image
						src="/css-icon.svg"
						alt="CSS icon"
						width={24}
						height={24}
						className="transition-transform duration-300 hover:rotate-12"
					/>
					<p className="transition-colors duration-300 text-white">CSS</p>
				</article>
				<article
					className="flex items-center gap-2 p-4 bg-[var(--bdazzledblue)] rounded-md w-full text-center 
        transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:shadow-lg cursor-pointer hover:text-[var(--yankeesblue)]"
				>
					<Image
						src="/js-icon.svg"
						alt="Figma icon"
						width={24}
						height={24}
						className="transition-transform duration-300 hover:rotate-12"
					/>
					<p className="transition-colors duration-300 text-white">JavaScript</p>
				</article>
				<article
					className="p-4 bg-[var(--bdazzledblue)] rounded-md w-full text-center flex items-center gap-2 
        transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:shadow-lg cursor-pointer hover:text-[var(--yankeesblue)]"
				>
					<Image
						src="/react-icon.svg"
						alt="React icon"
						width={24}
						height={24}
						className="transition-transform duration-300 hover:rotate-12"
					/>
					<p className="transition-colors duration-300 text-white">React.js</p>
				</article>
				<article
					className="p-4 bg-[var(--bdazzledblue)] rounded-md w-full text-center flex items-center gap-2 
        transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:shadow-lg cursor-pointer hover:text-[var(--yankeesblue)]"
				>
					<Image
						src="/react-icon.svg"
						alt="React icon"
						width={24}
						height={24}
						className="transition-transform duration-300 hover:rotate-12"
					/>
					<p className="transition-colors duration-300 text-white">ReactNative.js</p>
				</article>
				<article
					className="flex items-center gap-2 p-4 bg-[var(--bdazzledblue)] rounded-md w-full text-center 
        transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:shadow-lg cursor-pointer hover:text-[var(--yankeesblue)]"
				>
					<Image
						src="/next-icon.svg"
						alt="Next icon"
						width={24}
						height={24}
						className="transition-transform duration-300 hover:rotate-12"
					/>
					<p className="transition-colors duration-300 text-white">Next.js</p>
				</article>

				<article
					className="flex items-center gap-2 p-4 bg-[var(--bdazzledblue)] rounded-md w-full text-center 
        transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:shadow-lg cursor-pointer hover:text-[var(--yankeesblue)]"
				>
					<Image
						src="/typescript-icon.svg"
						alt="Typescript icon"
						width={24}
						height={24}
						className="transition-transform duration-300 hover:rotate-12"
					/>
					<p className="transition-colors duration-300 text-white">TypeScript</p>
				</article>
				<article
					className="flex items-center gap-2 p-4 bg-[var(--bdazzledblue)] rounded-md w-full text-center 
        transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:shadow-lg cursor-pointer hover:text-[var(--yankeesblue)]"
				>
					<Image
						src="/tailwind-icon.svg"
						alt="Tailwind icon"
						width={24}
						height={24}
						className="transition-transform duration-300 hover:rotate-12"
					/>
					<p className="transition-colors duration-300 text-white">Tailwind CSS</p>
				</article>
				<article
					className="flex items-center gap-2 p-4 bg-[var(--bdazzledblue)] rounded-md w-full text-center 
        transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:shadow-lg cursor-pointer hover:text-[var(--yankeesblue)]"
				>
					<Image
						src="/Node.js-icon.svg"
						alt="Node.js icon"
						width={24}
						height={24}
						className="transition-transform duration-300 hover:rotate-12"
					/>
					<p className="transition-colors duration-300 text-white">Node.js</p>
				</article>
				<article
					className="flex items-center gap-2 p-4 bg-[var(--bdazzledblue)] rounded-md w-full text-center 
        transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:shadow-lg cursor-pointer hover:text-[var(--yankeesblue)]"
				>
					<Image
						src="/express-icon.svg"
						alt="express.js icon"
						width={24}
						height={24}
						className="transition-transform duration-300 hover:rotate-12"
					/>
					<p className="transition-colors duration-300 text-white">Express.js</p>
				</article>
				<article
					className="flex items-center gap-2 p-4 bg-[var(--bdazzledblue)] rounded-md w-full text-center 
        transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:shadow-lg cursor-pointer hover:text-[var(--yankeesblue)]"
				>
					<Image
						src="/wordpress-icon.svg"
						alt="Figma icon"
						width={24}
						height={24}
						className="transition-transform duration-300 hover:rotate-12"
					/>
					<p className="transition-colors duration-300 text-white">WordPress</p>
				</article>
			</main>
		</section>
	);
};
export default Technologies;
