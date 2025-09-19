import Image from "next/image";
import PresentationSection from "./components/PresentationSection";
import BestChoiceSection from "./components/BestChoiceSection";
import Technologies from "./components/Technologies";
import ContacUs from "./components/ContactUs";
import AnimateOnScroll from "./components/AnimateOnScroll";

export default function Home() {
	return (
		<section className="min-h-screen">
			<AnimateOnScroll>
				<PresentationSection />
			</AnimateOnScroll>
			<AnimateOnScroll>
				<BestChoiceSection />
			</AnimateOnScroll>
			<AnimateOnScroll>
				<Technologies />
			</AnimateOnScroll>
			<AnimateOnScroll>
				<ContacUs />
			</AnimateOnScroll>
		</section>
	);
}
