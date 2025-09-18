"use client";
import { useState } from "react";
import Image from "next/image";
const BestChoiceSection = () => {
	const [open, setOpen] = useState<number | null>(null);

	const items = [
		{
			title: "Why work with us?",
			description:
				"Because we work professionally with modern technologies and always strive to deliver a high-quality product.",
		},
		{
			title: "About our work",
			description:
				"We don't just snap together Lego blocks and call it a website — we carefully analyze what the client truly wants and then develop it into clean, production-ready code.",
		},
		{
			title: "Worried about payment?",
			description:
				"There’s no need to worry — our pricing is based on the scope of your project. You make an initial 50% payment at the start, and the remaining balance once the project is successfully delivered.",
		},
		{
			title: "Plan your project",
			description:
				"Once you reach out to us through the contact form or directly via email, we’ll schedule a meeting to discuss the project’s priorities, design direction, and development process. After that, we’ll provide you with an initial project estimate — completely free of charge.",
		},
		{
			title: "Ongoing Support",
			description:
				"We don’t just deliver your project and disappear — we provide ongoing support, updates, and improvements to ensure long-term success.",
		},
		{
			title:"Transparent Communication",
			description:"We believe in open and transparent communication throughout the entire process, so you’ll always know what stage your project is in.",
		},
		{
			title:"Tailored Solutions",
			description:"Every project is unique — we tailor our solutions to fit your specific goals, brand identity, and audience needs.",
		}
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
