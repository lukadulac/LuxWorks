import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface Project {
	title: string;
	description: string;
	technologies: string[];
	link: string;
}

const projects: Project[] = [
	{
		title: "Betkotip",
		description: "Developed a sports analytics platform focused on providing betting insights, match analysis, and prediction tools. The platform enables users to access detailed betting tips, explore statistical insights, and interact with various calculators and premium content.",
		technologies: ["React", "CSS modules", "Node.js", "Express.js", "MongoDB"],
		link: "https://betkotip.com/?page=1",
	},
	{
		title: "Extol stolarija",
		description:
			"Developed a responsive corporate website for a PVC and aluminum window and door manufacturer. The platform showcases product lines, provides detailed information about services, and includes a configurator that helps customers explore and request custom window solutions.",
		technologies: [
			"React",
			"Next.js",
			"JavaScript",
			".NET",
			"C#",
			"MySQL",
			"Swagger",
		],
		link: "https://extol.rs/",
	},
	{
		title: "HarmonijaVita",
		description:
			"Developed a modern website for a psychotherapy and counseling center focused on improving accessibility to mental health services. The platform presents therapy programs, therapist information, and enables clients to easily reach out and schedule consultations.",
		technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
		link: "https://harmonijavita.com/",
	},
];

const OurWork = () => {
	return (
		<section className="px-6 pb-12">
			<div className="max-w-[1200px] mx-auto text-center">
				<h1 className="text-4xl text-white font-bold text-[var(--platinum)] my-8 opacity-0 animate-fadeInUp">
					Our Work
				</h1>
				<p className="text-[var(--platinum)] opacity-90 max-w-[760px] mx-auto mb-10  animate-fadeInUp">
					A quick look at selected projects and the technologies used in each
					one.
				</p>

				<div className="grid gap-8 md:grid-cols-3">
					{projects.map((project, i) => (
						<article
							key={project.title}
							className="bg-[var(--bdazzledblue)] text-[var(--platinum)] p-6 rounded-2xl shadow-md hover:bg-[var(--yankeesblue)] transition hover:scale-105 opacity-0 animate-fadeInUp text-left"
							style={{ animationDelay: `${i * 180}ms` }}
						>
							<h2 className="text-xl font-semibold mb-3">{project.title}</h2>
							<p className="text-sm opacity-90 mb-5">{project.description}</p>

							<div className="mb-6">
								<h3 className="text-sm uppercase tracking-wide opacity-80 mb-3">
									Technologies
								</h3>
								<ul className="flex flex-wrap gap-2">
									{project.technologies.map((tech) => (
										<li
											key={`${project.title}-${tech}`}
											className="text-xs px-3 py-1 rounded-full bg-[var(--yankeesblue)] border border-[var(--darkskyblue)]/30"
										>
											{tech}
										</li>
									))}
								</ul>
							</div>

							<Link
								href={project.link}
								className="inline-flex items-center gap-2 text-sm font-medium text-[var(--darkskyblue)] hover:text-white transition"
								target="_blank"
							>
								Project link
								<ExternalLink size={16} />
							</Link>
						</article>
					))}
				</div>

				<p className="mt-14 text-3xl md:text-4xl font-bold text-[var(--platinum)] tracking-wide opacity-0 animate-fadeInUp">
					And so much more
				</p>
			</div>
		</section>
	);
};

export default OurWork;
