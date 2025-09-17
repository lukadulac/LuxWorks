"use client";
import { useState } from "react";
import Image from "next/image";
const BestChoiceSection = () => {
	const [open, setOpen] = useState<number | null>(null);

	const items = [
		{ title: "Feature 1", description: "Description for feature 1." },
		{ title: "Feature 2", description: "Description for feature 2." },
		{ title: "Feature 3", description: "Description for feature 3." },
		{ title: "Feature 4", description: "Description for feature 4." },
		{ title: "Feature 5", description: "Description for feature 5." },
	];

	const toggle = (index: number) => {
		setOpen(open === index ? null : index);
	};

	return (
		<section className="mt-20">
			<div className="SectionHeader">
				<h1 className="text-[32px] font-bold text-[var(--platinum)] ">
					Why LuxWorks is the best choice?
				</h1>
			</div>
			<div className="SectionContent border-2 border-white p-2 rounded-xl mt-4">
				{items.map((item, index) => (
					<div
						key={index}
						onClick={() => toggle(index)}
						className={`cursor-pointer my-2 p-2 bg-[var(--bdazzledblue)] rounded-md 
                  transition-all duration-500 ease-in-out overflow-hidden`}
					>
						<div className="flex items-center justify-between">
							<p className="text-white font-semibold">{item.title}</p>
							<Image
								src="/dropdown-arrow.svg"
								alt="Arrow"
								width={24}
								height={24}
								className={`svgColor transition-transform duration-300 ${
									open === index ? "rotate-180" : ""
								}`}
							/>
						</div>

						<div
							className={`transition-all duration-500 ease-in-out ${
								open === index
									? "max-h-96 opacity-100 mt-2"
									: "max-h-0 opacity-0"
							}`}
						>
							<p className="text-white">{item.description}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};
export default BestChoiceSection;
