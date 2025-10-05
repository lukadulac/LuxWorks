'use client'
import TextType from "../components/TextType";
import { useRouter } from "next/navigation";
const AboutUs = () => {
	const router = useRouter();
	return (
		<>
			<section className="max-w-[1200px] mx-auto text-center animate-fadeInUp flex flex-col items-center">
				<h1 className="text-4xl text-white font-bold text-center my-8 animate-fadeInUp">
					About Us
				</h1>
				<TextType
					text="We are ambitious developers dedicated to creating websites that help
					our clients boost sales and showcase their businesses. Using modern
					technologies, we focus on writing clean, reliable code and delivering
					a final product that truly satisfies our clients. Client satisfaction
					is our top priority, which is why we maintain open communication
					throughout the entire development process, making adjustments based on
					feedback. We build all types of websites—whether it’s presentation
					sites, e-commerce stores, admin dashboards, booking platforms, or any
					custom functionality our clients need."
					as="h2"
					className="text-xl text-[var(--platinum)] mb-4"
				/>
				<button onClick={() => router.push("/contact")} className="cursor-pointer mt-8 mb-8 bg-[var(--bdazzledblue)] text-[var(--platinum)] px-6 py-3 rounded-md hover:bg-[var(--yankeesblue)] hover:text-[var(--darkskyblue)] transition duration-300 animate-fadeInUp">
					Contact Us
				</button>
			</section>
		</>
	);
};

export default AboutUs;
