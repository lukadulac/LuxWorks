'use client'
import { useRouter } from "next/navigation"

const ContactUs = () => {
  const router = useRouter();
  return (
    <section className="my-4 flex flex-col items-start gap-2 md:my-6 md:flex-row md:items-center md:justify-between">
        <h1 className="text-[42px] font-bold text-[var(--platinum)]">If youre interested in our services <br /> feel free to <br className="block md:hidden"/>  contact us</h1>
        <button onClick={() => router.push("/contact")} className="bg-[var(--bdazzledblue)] text-[var(--platinum)] p-3 rounded-md cursor-pointer transition-all duration-300 hover:bg-[var(--darkskyblue)] hover:text-[var(--yankeesblue)] font-medium">Contact us</button>
    </section>
  )
}

export default ContactUs