import Image from "next/image";
import PresentationSection from "./components/PresentationSection";
import BestChoiceSection from "./components/BestChoiceSection";

export default function Home() {
	return (
		<section className="min-h-screen">
			<div>
				<PresentationSection />
			</div>
			<div>
				<BestChoiceSection />
			</div>
		</section>
	);
}
