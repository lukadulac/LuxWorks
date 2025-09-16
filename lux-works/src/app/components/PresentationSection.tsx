import Image from "next/image";

const PresentationSection = () => {
	return (
		<section className="flex flex-col items center justify-center md:flex-row md:items-start md:justify-start gap-[50px]">
			<div>
				<h1 className="text-[42px] font-bold text-[var(--platinum)]">
					Build Your Awesome Website
				</h1>
				<p className="text-[16px] text-[var(--darkskyblue)] mt-[30px]">
					Enver studio is a digital studio that offers several services such as
					UI/UX Design to developers, we will provide the best service for those
					of you who use our services.
				</p>
				<button className="group flex items-center gap-[8px] mt-[50px] bg-[var(--bdazzledblue)] text-[var(--platinum)] p-3.5 rounded-md cursor-pointer transition-all duration-300 hover:bg-[var(--darkskyblue)] hover:text-[var(--yankeesblue)] font-medium">
					Our Services
					<Image
						src="/arrow-right-up.svg"
						alt="Arrow"
						width={24}
						height={24}
						className="transition-all duration-300 group-hover:hidden"
					/>
					<Image
						src="/arrow-right-up.svg"
						alt="Arrow Hover"
						width={24}
						height={24}
						className="hidden  svgHover transition-all duration-300 group-hover:block"
					/>
				</button>
			</div>
			<div className="relative mt-[50px] w-full flex justify-center items-center md:mt-2">
				<div className="absolute top-0 left-0 flex items-center gap-4">
					<Image src="/waves-icon.svg" alt="Waves" width={90} height={30} />
				</div>
				<div className="absolute top-0 right-0">
					<Image src="/circles-icon.svg" alt="Circles" width={36} height={42} />
				</div>

				<div className="relative mt-8">
					<Image
						src="/hero-image.JPG"
						alt="hero-image"
						width={300}
						height={420}
						className="object-cover rounded-xl relative z-10"
					/>
				</div>

				{/* Donji elementi */}
				<div className="absolute z-20 bottom-0  left-1/2 -translate-x-1/2 flex justify-between w-full">
					<Image src="/play-icon.svg" alt="Play" width={100} height={100} />
					<Image src="/add-icon.svg" alt="Add" width={50} height={50}  />
				</div>
			</div>
		</section>
	);
};
export default PresentationSection;
