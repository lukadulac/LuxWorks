import Image from "next/image";
import PresentationSection from "./components/PresentationSection";
import BestChoiceSection from "./components/BestChoiceSection";
import Technologies from "./components/Technologies";
import ContacUs from "./components/ContactUs";


export default function Home() {
	return (
		<section className="min-h-screen">
			<div>
				<PresentationSection />
			</div>
			<div>
				<BestChoiceSection />
			</div>
			<div>
				<Technologies />
			</div>
			<div>
				<ContacUs />
			</div>
		</section>
	);
}
