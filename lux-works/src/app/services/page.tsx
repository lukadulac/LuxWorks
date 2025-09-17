"use client";
import { FC } from "react";
import { Code, ShoppingCart, Layers, Globe, Smartphone, Settings } from "lucide-react";

interface Service {
   icon: React.ReactNode;
  title: string;
  desc: string;
}

const services: Service[] = [
  {
    icon: <Code size={40} />,
    title: "Presentation Websites",
    desc: "Modern and responsive websites to professionally present your business or portfolio.",
  },
  {
    icon: <ShoppingCart size={40} />,
    title: "E-Commerce Stores",
    desc: "Secure and scalable online shops with product management and smooth checkout.",
  },
  {
    icon: <Layers size={40} />,
    title: "Custom Web Solutions",
    desc: "Websites and apps with advanced functionality powered by JavaScript and modern frameworks.",
  },
  {
    icon: <Globe size={40} />,
    title: "SEO Optimization",
    desc: "Optimized websites that rank higher on search engines and drive more traffic.",
  },
  {
    icon: <Smartphone size={40} />,
    title: "Responsive Design",
    desc: "Mobile-first, fully responsive layouts that look perfect on all devices.",
  },
  {
    icon: <Settings size={40} />,
    title: "Website Maintenance",
    desc: "Regular updates, backups, and performance improvements for long-term reliability.",
  },
];

const Services: FC = () => {
  return (
    <section className="  px-6">
      <div className="max-w-[1200px] mx-auto text-center">
        {/* Animacija naslova */}
        <h2 className="text-3xl font-bold text-[var(--platium)] mb-8 opacity-0 animate-fadeInUp">
          Our Services
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-[var(--bdazzledblue)] text-[var(--platinum)] p-6 rounded-2xl shadow-md 
                         hover:bg-[var(--darkskyblue)] transition cursor-pointer 
                         opacity-0 animate-fadeInUp"
              style={{ animationDelay: `${i * 200}ms` }}
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm opacity-90">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
