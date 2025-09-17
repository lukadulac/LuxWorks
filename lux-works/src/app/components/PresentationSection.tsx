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
					<Image
						src="/waves-icon.svg"
						alt="Waves"
						width={90}
						height={30}
						className="w-[60px] h-[20px] md:w-[90px] md:h-[30px]"
					/>
				</div>
				<div className="absolute top-0 right-0">
					<Image
						src="/circles-icon.svg"
						alt="Circles"
						width={36}
						height={42}
						className="w-[36px] h-[42px] md:w-[51px]] md:h-[60px]"
					/>
				</div>

				<div className="relative mt-8 flex justify-center items-center">
					<div
						className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                  w-[260px] h-[330px] md:w-[310px] md:h-[430px] 
                  border-2 border-[var(--platinum)] rounded-xl rotate-0 z-0"
					></div>

					<div
						className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                  w-[280px] h-[370px] md:w-[350px] md:h-[470px] 
                  border-2 border-[var(--darkskyblue)] rounded-xl rotate-6 md:rotate-6 z-0"
					></div>

					<Image
						src="/hero-image5.png"
						alt="hero-image"
						width={300}
						height={420}
						className="w-[250px] h-[320px] md:w-[300px] md:h-[420px] 
               object-cover rounded-xl relative z-10"
					/>
				</div>

				{/* Donji elementi */}
				<div className="absolute z-20 bottom-0  left-1/2 -translate-x-1/2 flex justify-between w-full">
					<Image
						src="/play-icon.svg"
						alt="Play"
						width={100}
						height={100}
						className="relative right-4 w-[65px] h-[75px] md:w-[100px] md:h-[100px]"
					/>
					<Image
						src="/add-icon.svg"
						alt="Add"
						width={50}
						height={50}
						className="relative top-1 w-[40px] h-[40px] md:w-[50px] md:h-[50px]"
					/>
				</div>
			</div>
		</section>
	);
};
export default PresentationSection;
