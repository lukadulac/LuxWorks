import Image from "next/image";

const Contact = () => {
	{/* TODO: add contact form logic on right email */ }
	return (
		<section className="flex flex-col md:flex-row items-center md:items-start justify-between w-full max-w-5xl mx-auto py-12 px-4 gap-8">
			<header className="w-full md:w-1/2 md:pr-8">
				<h1 className="text-4xl font-bold">Let's Get In Touch.</h1>
				<p className="mt-4 text-lg text-[var(--darkskyblue)]">
					Have a question or want to work together? Send me a message.
				</p>
			</header>

			<form
				action="contact"
				className="flex flex-col gap-4 w-full md:w-1/2 bg-[var(--yankeesblue)] p-6 rounded-xl shadow-md"
			>
				<label htmlFor="name" className="font-medium">
					Your Name
				</label>
				<div className="relative w-full">
					<input
						type="text"
						id="name"
						name="name"
						required
						className="w-full p-2 pl-10 border rounded-md bg-[var(--yankeesblue)] text-white"
						placeholder="Enter your name"
					/>
					<Image
						src="/user-icon.svg"
						alt="User"
						width={20}
						height={20}
						className="absolute left-3 top-1/2 -translate-y-1/2 svgColor"
					/>
				</div>

				<label htmlFor="email" className="font-medium">
					Email:
				</label>
				<div className="relative w-full">
					<input
						type="email"
						id="email"
						name="email"
						required
						className="w-full p-2 pl-10 border rounded-md bg-[var(--yankeesblue)] text-white"
						placeholder="Enter your email"
					/>
					<Image
						src="/email-icon.svg"
						alt="Email"
						width={20}
						height={20}
						className="absolute left-3 top-1/2 -translate-y-1/2 svgColor"
					/>
				</div>

				<label htmlFor="message" className="font-medium">
					Message:
				</label>
				<div className="relative w-full">
					<Image
						src="/message-icon.svg"
						alt="Message"
						width={20}
						height={20}
						className="absolute left-3 top-3 svgColor"
					/>
					<textarea
						id="message"
						name="message"
						required
						className="w-full p-2 pl-10 pt-2 border rounded-md min-h-[120px] bg-[var(--yankeesblue)] text-white"
						placeholder="Enter your message"
					></textarea>
				</div>

				<button
					type="submit"
					className="bg-[var(--bdazzledblue)] font-bold cursor-pointer text-[var(--platinum)] text-[18px] py-2 px-4 rounded-md hover:bg-[var(--darkskyblue)] hover:text-[var(--yankeesblue)] transition-all duration-300"
				>
					Send
				</button>
			</form>
		</section>
	);
};

export default Contact;
