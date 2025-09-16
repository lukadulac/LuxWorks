import Image from "next/image";
import PresentationSection from "./components/PresentationSection";

export default function Home() {
	return (
		<section className="min-h-screen">
			<div>
        <PresentationSection />
      </div>
		</section>
	);
}
